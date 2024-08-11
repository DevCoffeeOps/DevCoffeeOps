import { mkdir, writeFile } from 'fs/promises';
import { assertEnvVar } from '@dev-coffee-ops/assert-env-var';
import { existsSync } from 'fs';

export async function writeToStorage(contents: string): Promise<void> {
  assertEnvVar('EXTRACT__DIR_PATH');
  assertEnvVar('EXTRACT__FILE_PATH');
  if (!existsSync(process.env.EXTRACT__DIR_PATH)) {
    await mkdir(process.env.EXTRACT__DIR_PATH);
  }
  await writeFile(process.env.EXTRACT__FILE_PATH, contents);
}
