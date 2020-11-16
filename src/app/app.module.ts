import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { ResumeProfileComponent } from './myresume/resume-profile/resume-profile.component';
import { ResumeWorkExperienceComponent } from './myresume/resume-profile/resume-work-experience/resume-work-experience.component';
import { ResumeEducationComponent } from './myresume/resume-education/resume-education.component';
import { ResumeFooterComponent } from './myresume/resume-footer/resume-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'resume', component: MyresumeComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    MyresumeComponent,
    ResumeProfileComponent,
    ResumeWorkExperienceComponent,
    ResumeEducationComponent,
    ResumeFooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/