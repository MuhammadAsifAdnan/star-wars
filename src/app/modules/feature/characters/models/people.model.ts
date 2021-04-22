export interface People {
    name: string;
    height: string; // height in meters
    mass: string; // weight in kilograms
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    films: string[]; // An array of film resource URLs that this person has been in.
    url: string; //  the hypermedia URL of this resource
}