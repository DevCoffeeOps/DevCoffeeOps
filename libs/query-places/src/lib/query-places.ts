import { coordinatesFromCityState } from '@dev-coffee-ops/coordinates-from-city-state';
import { googleMapsSearchText } from '@dev-coffee-ops/google-maps-search-text';

export async function queryPlaces(keyword: string, cityState: string): Promise<any[]> {
  const coordinates = await coordinatesFromCityState(cityState);
  const places = await googleMapsSearchText(keyword, coordinates.lat, coordinates.lng, 5000);
  return places;
}
