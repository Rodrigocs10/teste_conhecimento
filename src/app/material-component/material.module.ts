import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';


import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { TabelaCsvComponent } from './tabela-csv/tabela-csv.component';
import { GrupoImagensComponent } from './grupo-imagens/grupo-imagens.component';
import { NumerosAleatoriosComponent } from './numeros-aleatorios/numeros-aleatorios.component';

import { DatePipe } from '@angular/common';


import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    
    FlexLayoutModule,
    CdkTableModule,
    DragDropModule
  ],
  providers: [DatePipe ],
  entryComponents: [TabelaCsvComponent],
  declarations: [
    TabelaCsvComponent,
    GrupoImagensComponent,
    NumerosAleatoriosComponent    
  ]
})
export class MaterialComponentsModule {}
