import { Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { CancerComponent } from './components/cancer/cancer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'cancer', component: CancerComponent },
    { path: 'about', component: NosotrosComponent},
    { path: 'news', component: NoticiasComponent }


];
