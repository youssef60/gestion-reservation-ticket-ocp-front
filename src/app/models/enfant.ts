import { Collaborateur } from "./collaborateur";

export interface Enfant {
    collaborateur: Collaborateur;
    dateNaissance: string;
    id?:           number;
    nom:           string;
    prenom:        string;
    matricule?:    string;
}
