import { Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { CancerComponent } from './views/cancer/cancer.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { PanelAdminComponent } from './views/panel-admin/panel-admin.component';
import { PanelUserComponent } from './views/panel-user/panel-user.component';
import { PanelNewsComponent } from './views/panel-news/panel-news.component';
import { AppComponent } from './app.component';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
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
                path: 'adminPanel',
                component: PanelLayoutComponent,
                children: [
                    { path: '', component: PanelAdminComponent },
                ]
            },
            {
                path: 'userPanel',
                component: PanelLayoutComponent,
                children: [
                    { path: '', component: PanelUserComponent },
                ]
            },
            {
                path: 'newsPanel',
                component: PanelLayoutComponent,
                children: [
                    { path: '', component: PanelNewsComponent },
                ]
            }
        ]
    },
    { path: '**', redirectTo: 'home' } // Redirige a home si es una ruta que no conoce
];
