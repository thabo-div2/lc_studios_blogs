import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const useSingleCollection = (collection, id) => {
	const error = ref(null);
	const isPending = ref(false);

	let docRef = projectFirestore.collection(collection).doc(id);

	const delDoc = async () => {
		isPending.value = true;
		error.value = null;

		try {
			const ref = await docRef.delete();
			isPending.value = true;

			return res;
		} catch (err) {
			console.log(err.message);
			isPending.value = false;
			error.value = "Invalid action! Cannot delete";
		}
	};

	return {
		error,
		isPending,
		delDoc,
	};
};

export default useSingleCollection;
