import { Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { CancerComponent } from './views/cancer/cancer.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { PanelAdminComponent } from './views/panel-admin/panel-admin.component';
import { PanelUserComponent } from './views/panel-user/panel-user.component';
import { PanelNewsComponent } from './views/panel-news/panel-news.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'cancer', component: CancerComponent },
    { path: 'about', component: NosotrosComponent},
    { path: 'news', component: NoticiasComponent },
    {path: 'gallery', component: GaleriaComponent},
    {path: 'adminPanel', component: PanelAdminComponent},
    {path: 'userPanel', component: PanelUserComponent},
    {path: 'newsPanel', component: PanelNewsComponent}
];
