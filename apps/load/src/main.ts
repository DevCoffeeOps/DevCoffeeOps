import { assertEnvVar } from '@dev-coffee-ops/assert-env-var';
import { RowService } from '@dev-coffee-ops/db-base-client';
import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';

async function main() {
    assertEnvVar('LOAD__INPUT_FILE_PATH');
    assertEnvVar('LOAD__JSON_PATH');
    
    let fileContents = (await readFile(process.env.LOAD__INPUT_FILE_PATH)).toString();
    let fileContentsAsObj = await JSON.parse(fileContents);
    if(process.env.LOAD__JSON_PATH !== 'none')
        fileContentsAsObj = fileContentsAsObj[process.env.LOAD__JSON_PATH];
    const prisma = new PrismaClient();
    const rowService = new RowService(prisma);
    const rows = await rowService.findAll();
    for (const row of rows) {
        await rowService.delete(row.id);
    }
    const ops = fileContentsAsObj.map((item: any) => {
        return rowService.create({
            data: JSON.stringify(item)
        });
    });
    await Promise.all(ops);
    await prisma.$disconnect();

    console.log('load success');
}

main().then().catch(err => console.log(err));
