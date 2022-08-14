import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Item1Component } from './pages/item1/item1.component';
import { Item2Component } from './pages/item2/item2.component';

const routes:Routes =[

  {path: 'item1', component:Item1Component},
  {path: 'item2', component:Item2Component},

  {path:'', pathMatch:'full', redirectTo:'/item1'},
  {path:'**', pathMatch:'full', redirectTo:'/item1'}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
