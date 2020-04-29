import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  payDate:string;
  amount:number;
  height:number;
  miles:number;

  // data = {

  //   name: "Shamsher Alam",
  //   college :"TCSC"
  // };

  onNameChange(value:string){
    this.name = value;
  }

  onDateChange(value:string){
    this.payDate = value;
  }

  onAmountChange(value:string){

    this.amount = parseFloat(value);
  }

  onHeightChange(value:string){
    this.height = parseInt(value);
  }

  onMilesChange(value:string){
    if(!value){
      return this.miles=0;
    }
    this.miles = parseFloat(value);
  }
}
