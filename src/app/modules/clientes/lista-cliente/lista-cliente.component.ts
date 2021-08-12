import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, DialogDataTemplate } from 'src/app/components/alerts/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  verDados(){
    this.openDialog({
      titulo: "Ver Dados",
      mensagem: `
      Maria Julia de Carvalho 444.555.666-77
      Francisco Jose de Almeida 888.999.000-11
      (85) 99999.0000
      (85) 99999.0000 Ver dados Editar
      (85) 99999.0000 Ver dados Editar
      Contato
      CPF: 033.444.666-05
      RG:2005009171659
      Data. Nas: 24/10/1988
      Endereço: Rua 830 , número 151
      Bairro: Conjunto Ceará
      Cidade: Fortaleza - CE
      CEP: 60.000-00
      Profissão: Enfermeira
      Nacionalidade: Brasileira
      Estado Civil: Casada
      Email: nathiaraandrade@hotmail.com
      Telefone: (85) 98673-6173`
    })
  }
  openDialog(data : DialogData) {
    this.dialog.open(DialogDataTemplate,{data})
  }

}
