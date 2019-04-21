import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-edit',
  templateUrl: './chamado-edit.component.html',
  styleUrls: ['./chamado-edit.component.css']
})
export class ChamadoEditComponent implements OnInit {

  chamadoForm: FormGroup;
  id:string = '';
  nome:string = '';
  descricao:string = '';
  situacao:string = '';
  atendente:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getChamado(this.route.snapshot.params['id']);
    this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  getChamado(id) {
    this.api.getChamado(id).subscribe(data => {
      this.id = data._id;
      this.chamadoForm.setValue({
        nome: data.nome,
        descricao: data.descricao,
        situacao: data.situacao,
        atendente: data.atendente
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateChamado(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/chamado-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  chamadoDetails() {
    this.router.navigate(['/chamado-details', this.id]);
  }
}
