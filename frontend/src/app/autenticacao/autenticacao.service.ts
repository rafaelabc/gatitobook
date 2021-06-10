import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';

const API = environment.apiURL

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${API}/user/login`,
      {
        userName: usuario,
        password: senha,
      },
      {
        observe: 'response',
      }
    ).pipe(
      tap((res) =>{
        const authToken = res.headers.get('x-access-token') ?? 'null';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
