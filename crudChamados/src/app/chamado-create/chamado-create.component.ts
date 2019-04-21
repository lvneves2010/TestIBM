import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamadoForm: FormGroup;
  nome:string='';
  descricao:string='';
  situacao:string='';
  atendente:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postChamado(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/chamado-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
