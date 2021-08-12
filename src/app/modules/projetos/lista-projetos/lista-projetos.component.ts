import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, DialogDataTemplate } from 'src/app/components/alerts/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {



  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  verDados(){
    this.openDialog({
      titulo: "Ver Dados",
      mensagem: `
      Projeto Residencial
      Tipo: Arquitetura e Interiores
      Descrição: Casa em terreno Limpo
      Viabilidade financeira inclusa: Sim
      Visitas inclusas: sim, três
      Alterações inclusas: duas
      Produção inclusa: Não`
    })
  }
  openDialog(data : DialogData) {
    this.dialog.open(DialogDataTemplate,{data})
  }


}


