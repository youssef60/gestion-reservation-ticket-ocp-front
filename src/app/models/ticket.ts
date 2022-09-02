import { Collaborateur } from "./collaborateur";
import { TypeTicket } from "./typeTicket";

export interface Ticket {
    id?:              number;
    nbrTicketAdulte?: number;
    nbrTicketEnfant?: number;
    typeTicket?:      TypeTicket;
    collaborateur? :  Collaborateur;
    total? : number;
    createdTime? : Date;
}