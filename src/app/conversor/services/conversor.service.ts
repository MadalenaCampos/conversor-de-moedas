import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
/*
RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

=> https://rxjs.dev/guide/overview
*/

import { Conversao, ConversaoResponse } from '../models';

@Injectable()
export class ConversorService {
  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação
  private readonly BASE_URL =
    'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  constructor(private http: HttpClient) {}

  //Realiza a chamada para a API de conversão de moedas.
  public converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);
    // Essa é a rota da API com os parâmetros que serão passados para a requisição
  }

  // Ambas as funções abaixo são para o caso de o usuário não informar a moeda de origem, e fazer a conversão para o padrão da moeda, retornando a cotação delas.
  public cotacaoPara(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];
  }

  public cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
    // O 1 é usado como base, representado uma unidade da moeda base, onde 1 dividido pela moeda de destino me permite saber qual a cotação da minha moeda base. O 4 é o número de casas decimais que serão mostradas.
  }

  // Verifica se existe uma data da cotação da moeda. Caso sim exibe, se não, retorna uma string vazia.
  public dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}
