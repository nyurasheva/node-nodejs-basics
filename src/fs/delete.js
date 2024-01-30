import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePathToRemove = path.join(__dirname, '/files/fileToRemove.txt');

  try {
    await fsPromises.unlink(filePathToRemove);
    console.log(`File ${filePathToRemove} removed successfully`);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await remove();
