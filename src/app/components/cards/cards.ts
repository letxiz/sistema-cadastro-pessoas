import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrls: ['./cards.css'],
})
export class Cards {

  //cards
  totalPessoas = 0;
  totalCidades = 0;
  totalEstados = 0;

  constructor(private http: HttpClient) {}

  //carregar dados
  ngOnInit() {
    this.http.get<any>('https://gbebca2c3091cae-internshipdb1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/estagio/pessoa/')
      .subscribe(res => {

        const pessoas = res.items;

        this.totalPessoas = pessoas.length;

        const cidades = new Set(pessoas.map((p: any) => p.cidade));
        this.totalCidades = cidades.size;

        const estados = new Set(pessoas.map((p: any) => p.estado));
        this.totalEstados = estados.size;

      });
  }
}
