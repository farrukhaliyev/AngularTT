import { Route, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { FormComponent } from "../components/form/form.component";

export const routes :Routes = [
    {path: "home/main", component: HomeComponent},
    {path: "form/main", component: FormComponent}
];