import { Component, OnInit, ViewChild } from '@angular/core';
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
  public conversao: Conversao;
  public possuiErro: boolean;
  public conversaoResponse: ConversaoResponse;
  public mensagemDeErro!: string;
  public resultado!: number;

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;
  // Fará a ligação entre o formulário html e atributo de classe.

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  public inicializandoValores(): void {
    this.conversao = new Conversao('', '', null);
    this.possuiErro = false;
  }

  public converter() {
    if (this.conversaoForm.form.valid) {
      this.loading = true;
      this.conversorService.converter(this.conversao).subscribe(
        (response) => {
          this.conversaoResponse = response;
          console.log(response);
          this.resultado =
            this.conversaoResponse.rates[this.conversao.moedaPara].toFixed(2);
          this.modalAberto = true;
        },
        (error) => {
          this.possuiErro = true;

          // Tratamento para as mensagens de erros, pois a API não fornece mensagens claras
          if (this.conversao.moedaDe === this.conversao.moedaPara) {
            this.mensagemDeErro =
              'A moeda de origem e de destino não podem ser iguais';
          } else {
            this.mensagemDeErro =
              'Ocorreu um erro na requisição, por favor, tente novamente em alguns segundos';
          }
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.possuiErro = false;
        }
      );
    }
  }

  public sair(): void {
    this.modalAberto = false;
  }

  public outraConsulta() {
    this.modalAberto = false;
    this.inicializandoValores();
  }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.inicializandoValores();
  }
}
