import { projectStorage } from "../firebase/config";
import getUsers from "./getUsers";
import { ref } from "vue";

const { user } = getUsers();

const useStorage = () => {
	const error = ref(null);
	const url = ref(null);
	const filePath = ref(null);

	const uploadImage = async (file) => {
		filePath.value = `banners/${user.value.uid}/${file.name}`;
		const storageRef = projectStorage.ref(filePath.value);

		try {
			const res = await storageRef.put(file);
			url.value = await res.ref.getDownloadURL();
		} catch (err) {
			console.log(err.message);
			error.value = err.message;
		}
	};

	const deleteImage = async (path) => {
		const storageRef = projectStorage.ref(path);

		try {
			await storageRef.delete();
		} catch (err) {
			console.log(err.message);
			error.value = err.message;
		}
	};

	return { url, filePath, error, uploadImage, deleteImage };
};

export default useStorage;
