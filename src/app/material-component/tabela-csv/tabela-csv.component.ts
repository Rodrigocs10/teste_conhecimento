import {LiveAnnouncer} from '@angular/cdk/a11y';
import { CdkDragDrop, CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

export interface Rows {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;  
}

@Component({
  selector: 'app-tabela-csv',
  templateUrl: './tabela-csv.component.html',
  styleUrls: ['./tabela-csv.component.css'],
})

export class TabelaCsvComponent implements AfterViewInit{
  displayedColumns: string[] = [];
  file!: File;
  previousIndex: number | undefined ;  
  dataSource: any;  
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  columns: any[] = [
    { field: '0' },
    { field: '1' },
    { field: '2' },  
    { field: '3' },  
    { field: '4' },  
    { field: '5' },  
    { field: '6' },  
    { field: '7' },  
    { field: '8' },  
    { field: '9' },  
    { field: '10' },  
    { field: '11' },  
    { field: '12' },  
    { field: '13' },  
    { field: '14' },  
    { field: '15' },  
    { field: '16' },  
    { field: '17' },  
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.setDisplayedColumns();
    this.dataSource.sort = this.sort;
  }

  constructor(private papa: Papa, private _liveAnnouncer: LiveAnnouncer) {}
  fileChanged(event: any) {
    this.file = event.target.files[0];
    //console.log(this.file);

    this.papa.parse(this.file, {
      delimiter: ';',
      newline: '',
      header: false,
      dynamicTyping: true,
      complete: (result) => {
        
        this.dataSource = new MatTableDataSource<Rows>(result.data);
        this.dataSource.paginator = this.paginator;
        this.setDisplayedColumns();
        this.dataSource.sort = this.sort;
        
        console.log(result.data[0]["0"]);
      },
    });
  }
  
  dragStarted(event: CdkDragStart, index: number ) {
    //this.previousIndex = index;
  }
  
  dropListDropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.setDisplayedColumns();
  }

  setDisplayedColumns() {
    this.columns!.forEach(( colunm, index) => {
      colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
