import { Collaborateur } from "./collaborateur";

export interface Conjoint {
    id?:             number;
    nom:            string;
    prenom:         string;
    collaborateur : Collaborateur;
    matricule? : string;
}