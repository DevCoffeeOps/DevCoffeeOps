import { assertEnvVar } from '@dev-coffee-ops/assert-env-var';
import { queryPlaces } from '@dev-coffee-ops/query-places';
import { writeToStorage } from '@dev-coffee-ops/write-to-storage';
import { mkdir } from 'fs/promises';

async function extract() {
    assertEnvVar('EXTRACT__KEYWORD');
    assertEnvVar('EXTRACT__CITY_STATE');
    assertEnvVar('EXTRACT__DIR_PATH');
    assertEnvVar('EXTRACT__FILE_PATH');

    assertEnvVar('EXTRACT__PAUSE');
    if(process.env.EXTRACT__PAUSE === 'true') throw 'PAUSE';

    const places = await queryPlaces(process.env.EXTRACT__KEYWORD, process.env.EXTRACT__CITY_STATE);
    const placesStr = JSON.stringify(places, null, 2);

    await writeToStorage(placesStr);

    console.log('extract success')
}

extract().then().catch(err => console.log(err));
