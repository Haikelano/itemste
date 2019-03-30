import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import { WorkflowComponent } from './workflow/workflow.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
const appRoutes = [
  {path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'workflow', component: WorkflowComponent},
  {path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-Found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-Found' }
]
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,

  MatRippleModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes),
    TreeViewModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
