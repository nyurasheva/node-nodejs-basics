import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const fileContent = 'I am fresh and young';

  try {
    await writeFile(filePath, fileContent, { flag: 'wx' });
    console.log(`File fresh.txt created successfully at ${filePath}`);
  } catch {
    console.error(`Error: ${errorMessage}`);
  }
};

await create();