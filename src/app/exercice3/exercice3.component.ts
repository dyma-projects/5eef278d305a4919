import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component {

  statut: boolean = true;

  
  public changeBool($event){
    this.statut = !this.statut;
    console.log(this.statut);
  }
  


}
