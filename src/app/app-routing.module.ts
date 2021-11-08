import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailModule } from './customer-detail/customer-detail.module';

const routes: Routes = [

  // { path:'',
  //   component: CounterComponent,
  // }

    { path:'customer-detail',
    // loadChildren:()=> import('./customer-detail/customer-detail.module').then(mod=>CustomerDetailModule)
    component: CustomerDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
