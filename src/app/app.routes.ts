import { Routes, RouterModule } from "@angular/router";
import { DashboradComponent } from './Application/dashboard/dashborad.component';
import { NgModule } from "@angular/core";

export const routes:Routes = [

    {
        path: 'DashBoard',  
        data: {
        title: 'DashBoard'
        },
        component: DashboradComponent
    },
    {
        data: [''],
        path: '**',
        redirectTo: 'DashBoard',
    },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


