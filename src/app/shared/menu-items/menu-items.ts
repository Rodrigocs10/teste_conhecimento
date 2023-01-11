import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [  
  { state: 'tabela', name: 'Tabela', type: 'link', icon: 'av_timer' },
  { state: 'grupoimagens', name: 'Grupo Imagens', type: 'link', icon: 'av_timer' },
  { state: 'numerosaleatorios', name: 'Numeros Aleatórios', type: 'link', icon: 'av_timer' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
