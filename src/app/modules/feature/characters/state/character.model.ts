import { getIdFromUrl } from "src/app/modules/shared/helper/utility";
import { Movie } from "../../movies/state/movie.model";

export interface Character {
  id: number | string;
  name: string;
  height: string; // height in meters
  mass: string; // weight in kilograms
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[]; // An array of film resource URLs that this person has been in.
  filmIds: string[];
  filmsSummary?: Partial<Movie[]>;
  url: string; //  the hypermedia URL of this resource
}

export function createCharacter(params: Partial<Character>) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films, url } = params;
  return {
    id: getIdFromUrl(url), name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films, filmIds: films?.map(filmUrl => getIdFromUrl(filmUrl)), url
  } as Character;
}
