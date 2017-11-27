﻿/// <reference path="components/shared/datagrid/datagrid.component.ts" />
import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CustomerInquiryComponent } from './Components/Customer/customer-inquiry.component';
import { RegistrationComponent } from './components/Registration/Registration.component';
import { UserService } from './Service/user.service';
import { AlertService } from './Components/Services/alert.service';

import { DataGrid } from './Components/Shared/DataGrid/datagrid.component';
//import { DataGridColumn, DataGridButton, DataGridEventInformation } from './Components/Shared/DataGrid/datagrid.core';

//import { DataGridColumn, DataGridButton, DataGridEventInformation } from './shared/datagrid/datagrid.core';
//import { DataGrid } from './components/home.component';

// import AlertBoxComponent and add it in the declerations

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
     //   declarations: [AppComponent, UserComponent, HomeComponent, FetchDataComponent],

    //declarations: [AppComponent, UserComponent, HomeComponent, FetchDataComponent, RegistrationComponent, DataGrid, DataGridColumn, DataGridButton, DataGridEventInformation],
    declarations: [AppComponent, UserComponent, HomeComponent, FetchDataComponent, RegistrationComponent, DataGrid, CustomerInquiryComponent],

  //  declarations: [AppComponent, UserComponent, HomeComponent],

    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, AlertService],
    bootstrap: [AppComponent]

})
export class AppModule { }
