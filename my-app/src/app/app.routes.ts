import { Routes } from '@angular/router';
import { CancerComponent } from './views/cancer/cancer.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { PanelAdminComponent } from './views/panel-admin/panel-admin.component';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { IndexComponent } from './views/index/index.component';
import { PanelNewsComponent } from './views/panel-news/panel-news.component';
import { PanelUserComponent } from './views/panel-user/panel-user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: IndexComponent },
            { path: 'cancer', component: CancerComponent },
            { path: 'about', component: NosotrosComponent },
            { path: 'news', component: NoticiasComponent },
            { path: 'gallery', component: GaleriaComponent },
        ]
    },
    {
        path: '',
        component: PanelLayoutComponent,
        children: [
            { path: '', redirectTo: 'adminHome', pathMatch: 'full' },
            { path: 'adminHome', component: PanelAdminComponent },
            { path: 'newsManagement', component: PanelNewsComponent },
            { path: 'usersManagement', component: PanelUserComponent }
        ]
    }
];
