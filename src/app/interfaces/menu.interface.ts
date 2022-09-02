export interface Menu{

    id? : string;
    titre? : string;
    url? : string;
    active? : boolean;
    menuItem? : Array<Menu>; 

}