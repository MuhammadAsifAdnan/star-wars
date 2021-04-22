import { ID } from '@datorama/akita';
export interface Movie {
  id: ID;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // An array of people resource URLs that are in this film.
  url: string; //  the hypermedia URL of this resource
}

export function createMovie(params: Movie) {
  function getId(url: string) {
    // TODO: can this be improved?!
    let pieces = url?.split('/');
    return pieces[pieces.length - 2]
  }

  const { title, episode_id, opening_crawl, producer, director, release_date, url, characters } = params; //only taking the properties we are interested in
  return { id: getId(url), title, episode_id, opening_crawl, producer, director, release_date, url, characters: characters?.map((characterUrl: string) => getId(characterUrl)) } as Movie;
}
