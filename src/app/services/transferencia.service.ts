import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferecia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferecia = [];
  }

  get transferencias(){
    return this.listaTransferecia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) {
    this.melhoriaDados(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private melhoriaDados(transferencia: any){
    transferencia.data = new Date();
  }
}
