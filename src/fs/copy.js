import { promises as fsPromises, constants } from 'fs';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const copy = async () => {
  const sourcePath = path.join(currentModulePath, 'files');
  const destinationPath = path.join(currentModulePath, 'files_copy');

  try {
    await fsPromises.access(sourcePath, constants.R_OK);
    await fsPromises.mkdir(destinationPath);

    const files = await fsPromises.readdir(sourcePath);

    await Promise.all(files.map(async (file) => {
      const sourceFilePath = path.join(sourcePath, file);
      const destinationFilePath = path.join(destinationPath, file);
      await fsPromises.copyFile(sourceFilePath, destinationFilePath);
    }));

    console.log(`Files copied successfully from ${sourcePath} to ${destinationPath}`);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await copy();
