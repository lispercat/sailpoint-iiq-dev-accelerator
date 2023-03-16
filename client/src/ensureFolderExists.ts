import path = require('path');
import * as fs from 'fs';

/**
 * Ensure that the folder supposed to hold the filename exists and if not, creates it
 * @param filepath absolute path, including the filename
 */
export async function ensureParentFolderExists(filepath: string) {
    console.log('> ensureParentFolderExists', filepath);
    const parentFolder = path.dirname(filepath);
    ensureFolderExists(parentFolder);
}
export async function ensureFolderExists(folder: string) {
    console.log('> ensureFolderExists', folder);
    if (!fs.existsSync(folder)) {
        console.log('ensureFolderExists: creating ', folder);
        fs.mkdirSync(folder, { recursive: true });
    }
    console.log('< ensureFolderExists');
}