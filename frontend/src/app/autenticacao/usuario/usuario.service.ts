import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private tokenService : TokenService ) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private usuarioSubject = new BehaviorSubject <Usuario>({});

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario =  jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }
  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}
