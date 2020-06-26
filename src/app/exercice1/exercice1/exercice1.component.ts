import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component{

  title = "titre Exercice 1";
  age = 37;
  bool = true;
  objet = {
    prenom : "Mohamed"
  };

  public inputType = "date";

  public diviser(nombre : number): number 
  {
      return nombre / 2;
  }

  public cliquer($event)
  {
    console.log('fait');  
  }



}
