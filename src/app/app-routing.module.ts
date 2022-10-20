import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lenguajes } from './enums/lenguajes.enum';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
