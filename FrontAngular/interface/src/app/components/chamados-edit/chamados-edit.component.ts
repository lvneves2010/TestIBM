import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChamadosService } from '../../services/chamados.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ibm-chamado-edit',
  templateUrl: './chamados-edit.component.html',
  styleUrls: ['./chamados-edit.component.scss']
})
export class ChamadosEditComponent implements OnInit {
  
  changeChamado = new EventEmitter();
  chamadoForm: FormGroup;
  id:string = '';
  nome:string = '';
  descricao:string = '';
  situacao:string = '';
  atendente:string = '';

  constructor(public chamados: ChamadosService, private formBuilder: FormBuilder, public route: ActivatedRoute) { }

  ngOnInit() {
    this.chamados.getChamado(this.route.snapshot.params['id']);
    this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  getChamado(id) {
    this.chamados.getChamado(id).then(data => {
      this.id = data["_id"];
      this.chamadoForm.setValue({
        nome: data["nome"],
        descricao: data["descricao"],
        situacao: data["situacao"],
        atendente: data["atendente"]
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.chamados.updateChamado(this.id, form)
      .then(res => {
          let id = res['_id'];
          this.chamadoDetails();
        }, (err) => {
          console.log(err);
        }
      );
  }

  chamadoDetails() {
  	this.changeChamado.emit({chamadoId: this.id});
    // this.router.navigate(['/chamado-details', this.id]);
  }
}
