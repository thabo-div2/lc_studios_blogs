import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getSingleCollection = (collection, id) => {
	const post = ref(null);
	const error = ref(null);

	const load = async () => {
		try {
			let res = await projectFirestore.collection(collection).doc(id).get();

			if (!res.exists) {
				throw Error("There is no blog post here");
			}

			console.log(res.data());
			post.value = {
				...res.data(),
				id: res.id,
			};
		} catch (err) {
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { post, error, load };
};

export default getSingleCollection;
