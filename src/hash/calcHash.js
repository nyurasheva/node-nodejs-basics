import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const stream = createReadStream(filePath);
        const hash = createHash('sha256');

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            const finalHash = hash.digest('hex');
            console.log(`SHA256 hash for the file: ${finalHash}`);
        });
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};

await calculateHash();
