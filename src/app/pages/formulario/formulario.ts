import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class Formulario implements OnInit {

  @Input() pessoaEditar: any;
  @Output() fechar = new EventEmitter<void>();

  pessoa: any = {
    cpf: '',
    rg: '',
    nome: '',
    data_nasc: '',
    idade: '',
    sexo: '',
    signo: '',
    mae: '',
    pai: '',
    email: '',
    senha: '',
    telefone_fixo: '',
    celular: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    altura: '',
    peso: '',
    tipo_sanguineo: '',
    cor: ''
  };

  mostrarSenha = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  //editar
  ngOnInit() {
    if (this.pessoaEditar) {
      this.pessoa = { ...this.pessoaEditar };
    }
  }

  //senha
  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  fecharFormulario() {
    this.fechar.emit();
  }

  //salvar
  salvar() {
    this.http.post(
      'https://gbebca2c3091cae-internshipdb1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/estagio/pessoa/',
      this.pessoa
    ).subscribe({
      next: () => {
        this.toastr.success("Pessoa cadastrada com sucesso!");
        this.fechar.emit();
      },
      error: () => {
        this.toastr.error("Erro ao cadastrar pessoa!");
      }
    });
  }

}
