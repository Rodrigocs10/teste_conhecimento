import { LiveAnnouncer } from "@angular/cdk/a11y";
import {
  CdkDragDrop,
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Papa } from "ngx-papaparse";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";

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
  selector: "app-tabela-csv",
  templateUrl: "./tabela-csv.component.html",
  styleUrls: ["./tabela-csv.component.css"],
})
export class TabelaCsvComponent implements AfterViewInit {
  displayedColumns: string[] = [];
  file!: File;
  previousIndex: number | undefined;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  columns: any[] = [
    { field: "0", hidden: false },
    { field: "1", hidden: false },
    { field: "2", hidden: false },
    { field: "3", hidden: false },
    { field: "4", hidden: false },
    { field: "5", hidden: false },
    { field: "6", hidden: false },
    { field: "7", hidden: false },
    { field: "8", hidden: false },
    { field: "9", hidden: false },
    { field: "10", hidden: false },
    { field: "11", hidden: false },
    { field: "12", hidden: false },
    { field: "13", hidden: false },
    { field: "14", hidden: false },
    { field: "15", hidden: false },
    { field: "16", hidden: false },
    { field: "17", hidden: false },
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  mostrarTodasColunas(){
    for(let i = 0; i< this.columns.length; i++){
      this.columns[i].hidden = false;
    }
  }

  ngOnInit() {
    this.setDisplayedColumns();
    this.dataSource.sort = this.sort;
  }

  removerColuna(index: number) {
    this.columns[index].hidden = true;
  }

  constructor(private papa: Papa, private _liveAnnouncer: LiveAnnouncer) {}
  fileChanged(event: any) {
    this.file = event.target.files[0];
    //console.log(this.file);

    this.papa.parse(this.file, {
      delimiter: ";",
      newline: "",
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

  dragStarted(event: CdkDragStart, index: number) {
    //this.previousIndex = index;
  }

  dropListDropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.setDisplayedColumns();
  }

  setDisplayedColumns() {
    this.columns!.forEach((colunm, index) => {
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
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
