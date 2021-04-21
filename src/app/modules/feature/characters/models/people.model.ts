export interface People {
    name: string;
    height: string; // height in meters
    mass: string; // weight in kilograms
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    films: string[]; // array of urls of films for this person,
    url: string; // url to this resource
}