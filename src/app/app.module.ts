import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AlphaButtonComponent } from './alpha-button/alpha-button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchComponent } from './search/search.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDisplayBoxComponent } from './employee-display-box/employee-display-box.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDataService } from './employee-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    AlphaButtonComponent,
    SideBarComponent,
    SearchComponent,
    EmployeeFormComponent,
    EmployeeDisplayBoxComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
