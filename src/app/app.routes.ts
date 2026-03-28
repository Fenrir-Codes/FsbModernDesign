import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Findbolig } from './findbolig/findbolig';
import { Minafdeling } from './minafdeling/minafdeling'; 
import { Contact } from './contact/contact';
import { Goodtoknow } from './goodtoknow/goodtoknow';
import { Acuthelp } from './acuthelp/acuthelp';

export const routes: Routes = [
    { path: '', component: Home}, 
    { path: 'login', component: Login },
    { path: 'findbolig', component: Findbolig },
    { path: 'minafdeling', component: Minafdeling },   
    { path: 'contact', component: Contact },
    { path: 'goodtoknow', component: Goodtoknow },
    { path: 'acuthelp', component: Acuthelp },    
    { path: '**', redirectTo: '' } 
];
