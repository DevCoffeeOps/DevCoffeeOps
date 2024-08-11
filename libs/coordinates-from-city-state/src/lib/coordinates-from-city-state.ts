import axios from 'axios';
import { assertEnvVar } from '@dev-coffee-ops/assert-env-var';

interface Location {
  lat: number;
  lng: number;
}

export async function coordinatesFromCityState(cityState: string): Promise<Location> {
  assertEnvVar('EXTRACT__GOOGLE_MAPS_API_KEY');
  const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityState)}&key=${process.env.EXTRACT__GOOGLE_MAPS_API_KEY}`;
  const response = await axios.get(geocodingUrl);
  const location: Location = response.data.results[0].geometry.location;
  return location;
}
