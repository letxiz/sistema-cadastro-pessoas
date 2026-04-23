import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Formulario } from '../formulario/formulario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule, Formulario],
  templateUrl: './lista.html',
  styleUrls: ['./lista.css'],
})
export class Lista implements OnInit {

  pessoas: any[] = [];
  pessoasFiltradas: any[] = [];
  busca: string = '';

  mostrarFormulario = false;
  pessoaSelecionada: any = null;
  pessoaParaEditar: any = null;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.http.get<any>('https://gbebca2c3091cae-internshipdb1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/estagio/pessoa/')
      .subscribe(res => {
        this.pessoas = res.items || res;
        this.pessoasFiltradas = this.pessoas.slice(0, 5);
        console.log("PESSOAS:", this.pessoas);
      });
  }

  filtrar() {
  const termo = this.busca.toLowerCase();

  this.pessoasFiltradas = this.pessoas
    .filter(p =>
      p.nome?.toLowerCase().includes(termo) ||
      p.cpf?.includes(termo) ||
      p.rg?.includes(termo) ||
      p.email?.toLowerCase().includes(termo) ||
      p.cidade?.toLowerCase().includes(termo) ||
      p.estado?.toLowerCase().includes(termo)
    )
    .slice(0, 5);
}

  //deletar
  mostrarConfirmacao = false;
  cpfParaDeletar: string | null = null;

  abrirConfirmacao(cpf: string) {
  this.cpfParaDeletar = cpf;
  this.mostrarConfirmacao = true;
  }

  //cancelar delete
  cancelarDelete() {
    this.mostrarConfirmacao = false;
    this.cpfParaDeletar = null;
  }

  //confirmar delete
  confirmarDelete() {
  if (!this.cpfParaDeletar) {
    this.cancelarDelete();
    return;
  }

  this.http.delete(
    `https://gbebca2c3091cae-internshipdb1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/estagio/pessoa/${this.cpfParaDeletar}`
  ).subscribe({
    next: () => {
      this.toastr.success("Pessoa deletada com sucesso!");
      this.carregarPessoas();
    },
    error: (err) => {
      console.log(err);
      this.toastr.error("Erro ao deletar pessoa!");
    }
  });

  //fechar modal
  this.cancelarDelete();
}

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.pessoaParaEditar = null;
  }

  fecharFormulario() {
     this.mostrarFormulario = false;
     this.pessoaParaEditar = null;
     this.carregarPessoas();
  }

  verDetalhes(pessoa: any) {
    this.pessoaSelecionada =
      this.pessoaSelecionada === pessoa ? null : pessoa;
  }

  fecharDetalhes() {
    this.pessoaSelecionada = null;
  }

  //editar
 editarPessoa(p: any) {
  this.pessoaParaEditar = p;
  this.mostrarFormulario = true;
}

}
