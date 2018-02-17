import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DealCreationComponent } from './deal-creation/deal-creation.component';
import { MapsComponent } from './maps/maps.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'deal-creation',   component: DealCreationComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'maps',           component: MapsComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
