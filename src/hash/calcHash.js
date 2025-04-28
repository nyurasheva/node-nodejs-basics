import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const finalHash = hash.digest('hex');
        console.log(`SHA256 hash for the file: ${finalHash}`);
    });

    stream.on('error', (err) => {
        console.error(`Error reading the file: ${err.message}`);
    });
};

await calculateHash();
