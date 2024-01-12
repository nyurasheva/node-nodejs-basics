import { promises as fsPromises } from 'fs';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const rename = async () => {
  const sourceFilePath = path.join(currentModulePath, 'files', 'wrongFilename.txt');
  const destinationFilePath = path.join(currentModulePath, 'files', 'properFilename.md');

  try {
    await fsPromises.rename(sourceFilePath, destinationFilePath);
    console.log(`File renamed successfully from ${sourceFilePath} to ${destinationFilePath}`);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await rename();
