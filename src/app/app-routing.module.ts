import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: "", redirectTo: "/home/main", pathMatch: 'full'},
  {path: "home/main", component: HomeComponent},
  {path: "form/main", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
