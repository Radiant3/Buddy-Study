import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//app stuff to change
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';

//pages
import { IndexComponent } from './index/index.component';
import { Route } from '@angular/router';
import { FindBuddyPageComponent } from './find-buddy-page/find-buddy-page.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FindBuddyPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
