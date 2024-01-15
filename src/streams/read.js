import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    try {
        await pipeline(readStream, process.stdout);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

await read();
