import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChamadosService } from '../../services/chamados.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ibm-chamado-create',
  templateUrl: './chamados-create.component.html',
  styleUrls: ['./chamados-create.component.scss']
})
export class ChamadosCreateComponent implements OnInit {

  chamadoForm: FormGroup;
  nome:string='';
  descricao:string='';
  situacao:string='';
  atendente:string='';

  constructor(private router: Router, private chamadosService: ChamadosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.chamadosService.postChamado(form)
      .then(res => {
          let id = res['_id'];
          this.router.navigate(['/chamado-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
