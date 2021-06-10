import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { RodapeModule } from './components/rodape/rodape.module';
import { CartaoComponent } from './components/cartao/cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RodapeModule,
    CabecalhoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
