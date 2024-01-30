import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filesFolderPath = path.join(__dirname, 'files');

  try {
    const files = await fsPromises.readdir(filesFolderPath);
    console.log('List of files:', files);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await list();
