import path from 'path';

export const currentModulePath = path.dirname(new URL(import.meta.url).pathname);
export const errorMessage = 'FS operation failed';