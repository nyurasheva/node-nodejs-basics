import { writeFile } from 'fs/promises';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const create = async () => {
  const filePath = path.join(currentModulePath, 'files', 'fresh.txt');
  const fileContent = 'I am fresh and young';

  try {
    await writeFile(filePath, fileContent, { flag: 'wx' });
    console.log(`File fresh.txt created successfully at ${filePath}`);
  } catch (err) {
    console.error(`Error: ${errorMessage}`);
  }
};

await create();