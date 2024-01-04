import { storage } from "./StoreImage";
import { ref, getDownloadURL } from 'firebase/storage';

const getImageUrl = async (imagePath) => {
  try {
    const storageRef = ref(storage, imagePath);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};

export { getImageUrl };
