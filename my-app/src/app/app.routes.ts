import { Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { CancerComponent } from './components/cancer/cancer.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { GaleriaComponent } from './views/galeria/galeria.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'cancer', component: CancerComponent },
    { path: 'about', component: NosotrosComponent},
    { path: 'news', component: NoticiasComponent },
    {path: 'gallery', component: GaleriaComponent}
];
