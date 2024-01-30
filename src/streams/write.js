import { createWriteStream, promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath, { encoding: 'utf-8' });

    try {
        stdin.pipe(writeStream);
        console.log('Enter your details:');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

await write();
