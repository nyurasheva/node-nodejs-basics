import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    console.log(`File ${filePath} deleted successfully`);
  } catch {
    console.error(`Error: ${errorMessage}`);
  }
};

await remove();