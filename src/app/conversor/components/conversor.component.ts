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
          console.log(response)
          this.modalAberto = true;
        },
        (error) => {
          this.mensagemDeErro = error.statusText;
          this.possuiErro = true;
        },
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
