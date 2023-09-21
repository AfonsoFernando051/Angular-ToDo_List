import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarefaEditComponent } from './tarefa-edit/tarefa-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tarefa-edit',
    component: TarefaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
