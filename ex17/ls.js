
import path from 'path';
import fs from 'fs/promises';
import { Stats } from 'fs';

// BEGIN (write your solution here)
const ls = async (dir) => {
  const dirPath = path.resolve(dir);
  try {
    const files = await fs.readdir(dirPath);
    return Promise.all(files.map(async (el) => {
      try {
        const filePath = path.join(dirPath, el);
        const stat = await fs.stat(filePath);
        return { filePath, stat };
      } catch (e) {
        return
      }
    })).then((filesStats) => filesStats.map((fileStat) => {
      if (fileStat !== undefined) {
        return {
          filepath: fileStat.filePath,
          mode: fileStat.stat.mode
        }
      }
    }))
  } catch (e) {
    const stat = await fs.stat(dirPath);
    return [{
      filepath: dirPath,
      mode: stat.mode
    }];
  }
}

export default ls
