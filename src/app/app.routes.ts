import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { BuyBookComponent } from './buybook/buybook.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  // {
  // path: 'add',
    // component: CartComponent
  // },
{
  path: 'buybook',
  component: BuyBookComponent
},
  {
    path: 'edit',
    component: EditComponent
  },



];

export const AppRoutes = RouterModule.forRoot(appRoutes);
