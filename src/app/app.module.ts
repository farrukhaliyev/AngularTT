import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TestDirective } from './directives/TestExample/test.directive';
import { CustomIfDirective } from './directives/CustomIf/custom-if.directive';
import { CustomForDirective } from './directives/CustomFor/custom-for.directive';
import { KatanaPipe } from './pipes/katana.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestDirective,
    CustomIfDirective,
    CustomForDirective,
    KatanaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
