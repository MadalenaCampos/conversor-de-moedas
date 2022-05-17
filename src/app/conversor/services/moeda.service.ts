import { Injectable } from '@angular/core';

// "Interface" moeda
import { Moeda } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  private moedas!: Moeda[];

  constructor() {}

  private moedasObj = [
    // http://fixer.io ...
    { sigla: 'AUD', descricao: 'Dólar australiano', simbolo: 'AU$' },
    { sigla: 'BGN', descricao: 'Lev búlgaro', simbolo: 'лв' },
    { sigla: 'BRL', descricao: 'Real brasileiro', simbolo: 'R$' },
    { sigla: 'CAD', descricao: 'Dólar canadense', simbolo: 'CA$' },
    { sigla: 'CHF', descricao: 'Franco suíço', simbolo: 'CHF' },
    { sigla: 'CNY', descricao: 'Yuan Chinês', simbolo: 'CN¥' },
    { sigla: 'CZK', descricao: 'Coroa República Tcheca', simbolo: 'Kč' },
    { sigla: 'DKK', descricao: 'Coroa dinamarquesa', simbolo: 'kr' },
    { sigla: 'EUR', descricao: 'Euro', simbolo: '€' },
    { sigla: 'GBP', descricao: 'Libra Esterlina', simbolo: '£' },
    { sigla: 'HKD', descricao: 'Dólar de Hong Kong', simbolo: 'HK$' },
    { sigla: 'HRK', descricao: 'Coroa Croácia', simbolo: 'kn' },
    { sigla: 'HUF', descricao: 'Florim húngaro', simbolo: 'Ft' },
    { sigla: 'IDR', descricao: 'Rupia indonésia', simbolo: 'Rp' },
    { sigla: 'ILS', descricao: 'Novo shekel israelense', simbolo: '₪' },
    { sigla: 'INR', descricao: 'Rupia indiana', simbolo: '₹' },
    { sigla: 'JPY', descricao: 'Iene japonês', simbolo: '¥' },
    { sigla: 'KRW', descricao: 'Won sul-coreano', simbolo: '₩' },
    { sigla: 'MXN', descricao: 'Peso mexicano', simbolo: 'MX$' },
    { sigla: 'MYR', descricao: 'Malásia Ringgit', simbolo: 'RM' },
    { sigla: 'NOK', descricao: 'Coroa Noruega', simbolo: 'kr' },
    { sigla: 'NZD', descricao: 'Dólar da Nova Zelândia', simbolo: 'NZ$' },
    { sigla: 'PHP', descricao: 'Peso filipino', simbolo: '₱' },
    { sigla: 'PLN', descricao: 'Złoty Polónia', simbolo: 'zł' },
    { sigla: 'RON', descricao: 'Leu romeno', simbolo: 'lei' },
    { sigla: 'RUB', descricao: 'Belarus Ruble', simbolo: '₽' },
    { sigla: 'SEK', descricao: 'Coroa Suécia', simbolo: 'kr' },
    { sigla: 'SGD', descricao: 'Dólar de Singapura', simbolo: 'S$' },
    { sigla: 'THB', descricao: 'Baht Tailândia', simbolo: '฿' },
    { sigla: 'TRY', descricao: 'Lira turca', simbolo: '₺' },
    { sigla: 'USD', descricao: 'Dólar dos Estados Unidos', simbolo: 'US$' },
    { sigla: 'ZAR', descricao: 'Rand África do Sul', simbolo: 'R' },
  ];

  public listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    // Usado para melhorar a performance caso o service precise ser chamado mais de uma vez
    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      // Object.assign => copia todas as propriedades de um objeto para outro.
      this.moedas.push(moeda);
    }
    return this.moedas;
  }
}
