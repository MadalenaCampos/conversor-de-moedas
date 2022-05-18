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
          this.possuiErro = response.error ? true : null;

          // Tradução dos erros, solução temporária
          if (
            response.error.code ===
            'Your monthly usage limit has been reached. Please upgrade your Subscription Plan.'
          ) {
            this.mensagemDeErro =
              'Seu limite de uso mensal foi atingido. Por favor, atualize seu Plano de Assinatura.';
          } else if (
            response.error.info ===
            'You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]'
          ) {
            this.mensagemDeErro =
              'Você não forneceu uma chave de acesso de API válida. [Suporte técnico: support@apilayer.com]';
          } else {
            this.mensagemDeErro = response.error.code;
          }
        },
        () => {},
        () => {
          this.loading = false;
        }
      );
    }
  }

  public sairEOutraConsulta(): void {
    this.modalAberto = false;
  }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.inicializandoValores();
  }
}
