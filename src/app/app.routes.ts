import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RedactarComponent } from './redactar/redactar.component';

export const routes: Routes = [

    {path: '',component:LoginComponent },
    {path: 'home', component: HomeComponent},
    {path: 'redactar', component: RedactarComponent},
    {path: 'comunicados',component:ComunicadosComponent },
    {path: 'perfil',component:PerfilComponent},
    
];
