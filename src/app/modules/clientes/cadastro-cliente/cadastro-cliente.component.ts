import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, DialogDataTemplate } from 'src/app/components/alerts/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cadastroClienteForm: FormGroup = this.formBuild.group({
    nome : ['',[Validators.required]],
    rg : ['',[Validators.required]],
    cpf : ['',[Validators.required]],
    estadoCivil : ['',[Validators.required]],
    dataNascimento : ['',[Validators.required]],
    profissao : ['',[Validators.required]],
    nacionalidade : ['',[Validators.required]],
    endereco : ['',[Validators.required]],
    numero : ['',[Validators.required]],
    bairro : ['',[Validators.required]],
    complemento : ['',[Validators.required]],
    cep : ['',[Validators.required]],
    email : ['',[Validators.required, Validators.email]],
    telefone : ['',[Validators.required]],
  })

  constructor(
    private formBuild: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {

  }


  cadastraCliente(event: Event){
    event.preventDefault()

  }

  openDialog(data : DialogData) {
    this.dialog.open(DialogDataTemplate,{data})
  }

}
