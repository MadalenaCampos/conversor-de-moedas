import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.less'],
})
export class ConversorComponent implements OnInit {
  public loading = false;
  public modalAberto = false;

  public moedas: Moeda[];
  private conversao: Conversao;
  private possuiErro: boolean;
  private conversaoResponse: ConversaoResponse;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  public abrirModal() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalAberto = true;
    }, 1000);
  }

  public sairEOutraConsulta(): void {
    this.modalAberto = false;
  }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    // this.init()
  }
}



  // public moedas = [
  //   { codigo: 'USD', nome: 'Dólar', sigla: 'US$' },
  //   { codigo: 'BRL', nome: 'Real', sigla: 'R$' },
  //   { codigo: 'EUR', nome: 'Euro', sigla: '€' },
  //   { codigo: 'GBP', nome: 'Libra', sigla: '£' },
  //   { codigo: 'JPY', nome: 'Iene', sigla: '¥' },
  //   { codigo: 'CAD', nome: 'Dólar Canadense', sigla: 'C$' },
  // ];
