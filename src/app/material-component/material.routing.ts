import { Routes } from '@angular/router';

import { TabelaCsvComponent } from './tabela-csv/tabela-csv.component';
import { GrupoImagensComponent } from './grupo-imagens/grupo-imagens.component';
import { NumerosAleatoriosComponent } from './numeros-aleatorios/numeros-aleatorios.component';
import { TestandoLayoutComponent } from './testando-layout/testando-layout.component';
import { TestandoDragComponent } from './testando-drag/testando-drag.component';

export const MaterialRoutes: Routes = [  
  {
    path: 'tabela',
    component: TabelaCsvComponent
  },
  {
    path: 'grupoimagens',
    component: GrupoImagensComponent
  },
  {
    path: 'numerosaleatorios',
    component: NumerosAleatoriosComponent
  },
  {
    path: 'testandolayout',
    component: TestandoLayoutComponent
  },
  {
    path: 'testandodrag',
    component: TestandoDragComponent
  },
  
];
