import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferecia: any[];

  constructor() {
    this.listaTransferecia = [];
  }
  get transferencias(){
    return this.listaTransferecia;
  }
  adicionar(transferencia: any){
    this.melhoriaDados(transferencia);
    this.listaTransferecia.push(transferencia);
  }

  private melhoriaDados(transferencia: any){
    transferencia.data = new Date();
  }
}
