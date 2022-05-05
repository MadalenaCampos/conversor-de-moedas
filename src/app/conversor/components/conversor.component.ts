import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.less'],
})
export class ConversorComponent implements OnInit {
  public isVisible = false;

  public moedas = [
    { codigo: 'USD', nome: 'Dólar', sigla: 'US$' },
    { codigo: 'BRL', nome: 'Real', sigla: 'R$' },
    { codigo: 'EUR', nome: 'Euro', sigla: '€' },
    { codigo: 'GBP', nome: 'Libra', sigla: '£' },
    { codigo: 'JPY', nome: 'Iene', sigla: '¥' },
    { codigo: 'CAD', nome: 'Dólar Canadense', sigla: 'C$' },
  ];

  constructor() {}

  public abrirModal() {
    this.isVisible = true;
  }

  public sairOutraConsulta(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {}
}
