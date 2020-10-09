import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstockComponent } from './instock/instock.component';
import { SigninComponent } from './signin/signin.component';
import { CashierComponent } from './cashier/cashier.component';
import { ConverterComponent } from './converter/converter.component';
import { InsightComponent } from './insight/insight.component';
import { ComplaintComponent} from './complaint/complaint.component';

    const routes: Routes = [
        
        { path: 'instock',        component: InstockComponent },
        { path: 'signin',         component: SigninComponent },
        { path: 'cashier',        component: CashierComponent},
        { path: 'converter',      component: ConverterComponent},
        { path: 'insight',        component: InsightComponent},
        { path: 'complaint',      component: ComplaintComponent},

           
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }