import { Component, OnInit } from '@angular/core';
import { lenguajes } from '../enums/lenguajes.enum';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataSource : DataSource ;
  displayedColumns = [
    

  ]

  constructor(
    public lenguajesEnum : lenguajes 
  ) {
      this.dataSource = new this.DataSource({});
   }

  ngOnInit(): void {
    this.mostrarLenguajes
  }

mostrarLenguajes(){
  console.log(this.lenguajesEnum)
}

}
