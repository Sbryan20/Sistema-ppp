import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstructureComponent } from './estructure/estructure.component';
import { AdminComponent } from './admin/admin.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { TabledocentesComponent } from './admin/docente_apoyo/tabledocentes.component';
import { TableestudiantesComponent } from './admin/estudiantes/tableestudiantes.component';
import { ResponsablePppComponent } from './admin/responsable-ppp/responsable-ppp.component';
import { DirectorPComponent } from './admin/director-p/director-p.component';
import { CoordinadorVComponent } from './admin/coordinador-v/coordinador-v.component';
import { ConvocatoriaComponent } from './responsable-ppp/convocatoria/convocatoria.component';
import { AnexoComponent } from './responsable-ppp/convocatoria/anexo.component';
import { SeleccionEComponent } from './responsable-ppp/convocatoria/seleccion-e.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';




const routes: Routes=[
{path:'',redirectTo:'',pathMatch:'full'},
{path:'admin',component:AdminComponent},
{path:'docenteapoyo',component:TabledocentesComponent},
{path:'estudiantes',component:TableestudiantesComponent},
{path:'responsable',component:ResponsablePppComponent},
{path:'director_p',component:DirectorPComponent},
{path:'coordinador',component:CoordinadorVComponent},
{path:'convocatoria',component:ConvocatoriaComponent},
{path:'anexo2',component:AnexoComponent},
{path:'seleccion-e',component:SeleccionEComponent},
{path:'estructure',component:EstructureComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    EstructureComponent,
    AdminComponent,
    TabledocentesComponent,
    TableestudiantesComponent,
    ResponsablePppComponent,
    DirectorPComponent,
    CoordinadorVComponent,
    ConvocatoriaComponent,
    AnexoComponent,
    SeleccionEComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule
    
  ],
  providers: [

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '687138032046-hincfi1l7jtj5qakdcqmcfk9252875fa.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
