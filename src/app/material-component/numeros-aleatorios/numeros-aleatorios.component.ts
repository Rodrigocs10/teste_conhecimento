import { Component, NgModuleFactory } from '@angular/core';
import { UtilImplementation } from "../../shared/util";
import { DatePipe } from '@angular/common'

export interface Estilo {
  cor: string;
  background: string;
}

@Component({
  selector: 'app-numeros-aleatorios',
  templateUrl: './numeros-aleatorios.component.html',
  styleUrls: ['./numeros-aleatorios.component.css']
})



export class NumerosAleatoriosComponent{

  flagEstilo:boolean = false;
  contadorEstilo:number = 0;
  contadorMudancaEstilo: number = 0;

  
  estilos:Estilo[] = [
    {background: "red", cor: "blue"},
    {background: "blue", cor: "red"},
    {background: "yellow", cor: "black"},
    {background: "blue", cor: "white"},
    {background: "green", cor: "black"},
  ]

  generatedNumbers: number[] = [];


  constructor(private datepipe: DatePipe){
    this.timer();
  }
  
  getData(){
    let date = new Date();
    return date;
  }
  

  timer(){
    setInterval(()=>{

      

      let util = new UtilImplementation();    
      this.numero = parseFloat((this.numero + util.generateRandomNumber()).toFixed(2));

      this.generatedNumbers.push(this.numero);
      if (this.generatedNumbers.length > 10) {
        this.generatedNumbers.shift();
      }

      let passo = Math.trunc(this.numero / 50000);

      if(this.contadorEstilo < passo ){        
        this.contadorEstilo = passo % 5;
      }

    }, 1000)
  }

  numero: number = 0;

  
}
