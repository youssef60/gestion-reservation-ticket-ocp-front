import { Conjoint } from "./conjoint";
import { Enfant } from "./enfant";
import { Ticket } from "./ticket";

export interface Collaborateur {
    matricule?:    string;
    prenom?: string;
    cin?:       string;
    nom?:    string;
    conjoints? : Conjoint[];
    enfants? : Enfant[];
    prisTicket? : boolean; 
    prisMaxTicket? : boolean;
    tickets? : Ticket[];

 

}