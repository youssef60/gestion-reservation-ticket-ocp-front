import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { Collaborateur } from "../models/collaborateur";
import { Enfant } from "../models/enfant";




export function validateAdulte( a : number ) : ValidatorFn {
    return ( control : AbstractControl) : { [key : string] : boolean} | null =>
        {
            
            if(control.value > a || control.value < 0){
            return {errorMaxAdulte : true }
            }
            else{
            return null;
            }
        }
  }


export function validateAdulteDino( a : number ) : ValidatorFn {
    return ( control : AbstractControl) : { [key : string] : boolean} | null =>
        {
            
            const aquaParcAdulte = control.get('aquaParcAdulte');
            const dinoAdulte = control.get('dinoAdulte')
           
         

            if( !aquaParcAdulte || !dinoAdulte  ||  (aquaParcAdulte.value + dinoAdulte.value) > a ){
            return {errorMaxAdulte : true }
            }
            else{
            return null;
            }
        }
  }


export function disableEnfantInputValidator( a : number ) : ValidatorFn {
    return ( control : AbstractControl) : { [key : string] : boolean} | null =>
        {
            
            if( a == 0 ){
            return {errorNullEnfant : true }
            }
            else{
            return null;
            }
        }
  }

export function validateEnfantDino( a : number ) : ValidatorFn {
    return ( control : AbstractControl) : { [key : string] : boolean} | null =>
        {
          
            const aquaParcEnfant = control.get('aquaParcEnfant');
            const dinoEnfant = control.get('dinoEnfant')
           


            if( !aquaParcEnfant || !dinoEnfant  ||  (aquaParcEnfant.value + dinoEnfant.value) > a ){
            return {errorMaxEnfant : true }
            }
            else{
            return null;
            }
        }
  }
  

 export function getEnfantAge(enfant? : Enfant){

    const arr = enfant?.dateNaissance.split('/');

    const day = arr![0];
    const month = arr![1] ;
    const year  = arr![2] ;


    const date : any= new Date(+year, +month - 1, +day);

    const timeDiff : number = Date.now() - date;

    return  Math.floor((timeDiff / (1000 * 3600 * 24))/365);

  }

  