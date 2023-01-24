import { SharedUiModule } from './shared/shared-ui/shared-ui.module';
import { LibsModule } from './libs/libs.module';
import { LayoutModule } from './layout/layout.module';
import { PrimengModule } from './shared/shared-ui/primeng.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LibsModule,
    PrimengModule,
    LayoutModule,
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
