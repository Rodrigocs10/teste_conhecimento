import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'grupo-imagens',
  templateUrl: './grupo-imagens.component.html',
  styleUrls: ['./grupo-imagens.component.css'],
})
export class GrupoImagensComponent {

  selectedFiles?: FileList;
  grupoA: string[] = [];
  grupoB: string[] = [];



  drop(event: CdkDragDrop<string[]>): void {

    console.log("Previsous", event.previousContainer.data)
    console.log("Current", event.container.data)

    if (event.previousContainer === event.container) {
      console.log("passour ...", event.container);
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }


  selectFiles(event: any): void {
    //this.message = [];
    //this.progressInfos = [];
    this.selectedFiles = event.target.files;
  
    this.grupoA = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.grupoA.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

}
