import { ID } from '@datorama/akita';
import { getIdFromUrl } from '../../../shared/helper/utility';
import { Character } from '../../characters/state/character.model';
export interface Movie {
  id: ID;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // An array of people resource URLs that are in this film.
  characterIds: string[];
  characterSummary?: Partial<Character[]>;
  url: string; //  the hypermedia URL of this resource
}

export function createMovie(params: Partial<Movie>) {

  const { title, episode_id, opening_crawl, producer, director, release_date, url, characters } = params; //only taking the properties we are interested in
  return { id: getIdFromUrl(url), title, episode_id, opening_crawl, producer, director, release_date, url, characters, characterIds: characters?.map((characterUrl: string) => getIdFromUrl(characterUrl)) } as Movie;
}
