import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DealCreationComponent } from './deal-creation/deal-creation.component';
import { MapsComponent } from './maps/maps.component';

import { environment } from '../environments/environment';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SuiModule} from "ng2-semantic-ui";
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DealCreationComponent,
        UserProfileComponent,
        MapsComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        SuiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
