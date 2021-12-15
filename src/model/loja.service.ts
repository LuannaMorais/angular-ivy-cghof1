import { Injectable } from '@angular/core';
import { Produto, __produtos } from './produto';

@Injectable()
export class LojaService {
  constructor() {}

  obterProdutos() {
    return __produtos;
  }
}
