import { promises as fsPromises } from 'fs';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const list = async () => {
  const filesFolderPath = path.join(currentModulePath, 'files');

  try {
    const files = await fsPromises.readdir(filesFolderPath);
    console.log('List of files:', files);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await list();
