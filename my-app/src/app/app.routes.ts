import { Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent }
];
