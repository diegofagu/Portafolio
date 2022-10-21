import { Component, OnInit } from '@angular/core';
import { lenguajes } from '../enums/lenguajes.enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataSource : lenguajes[] ;
  
  MatTableDataSource = lenguajes[name]
  
  displayedColumns = [

  ]

  constructor(
    public lenguajesEnum : lenguajes 
  ) {

   }

  ngOnInit(): void {
    this.mostrarLenguajes
  }

mostrarLenguajes(){
  console.log(this.lenguajesEnum)
}

}
