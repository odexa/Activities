
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@notes_todo_items';

// READ NOTES
export const getNotes = async () => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);

    if (storedData === null) {
      return [];
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      throw new Error('Stored notes data is not an array.');
    }

    return parsedData;

  } catch (error) {
    console.error('GET NOTES ERROR:', error);
    throw error;
  }
};

// SAVE NOTES
export const saveNotes = async (notes) => {
  try {
    const jsonValue = JSON.stringify(notes);

    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);

    console.log('NOTES SAVED SUCCESSFULLY');

    return true;

  } catch (error) {
    console.error('SAVE NOTES ERROR:', error);

    return false;
  }
};

// CLEAR NOTES
export const clearNotes = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);

    console.log('NOTES CLEARED SUCCESSFULLY');

    return true;

  } catch (error) {
    console.error('CLEAR NOTES ERROR:', error);

    return false;
  }
};
