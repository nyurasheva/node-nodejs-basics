import { promises as fsPromises } from 'fs';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const remove = async () => {
  const filePathToRemove = path.join(currentModulePath, 'files', 'fileToRemove.txt');

  try {
    await fsPromises.unlink(filePathToRemove);
    console.log(`File ${filePathToRemove} removed successfully`);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await remove();
