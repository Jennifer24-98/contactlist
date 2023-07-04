import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: 'list',
    component:StudentComponent
  },
  {
    path: 'view',
    component:DetailsComponent
  },
  {
    path: '**',
    component:NotfoundComponent
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
