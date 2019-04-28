import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadoService } from '../../services/chamado.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-edit',
  templateUrl: './chamado-edit.component.html',
  styleUrls: ['./chamado-edit.component.scss']
})
export class ChamadoEditComponent implements OnInit {

  chamado = {};
  chamadoForm: FormGroup;
  id:string = '';
  nome:string = '';
  descricao:string = '';
  situacao:string = '';
  atendente:string = '';
  constructor(private route: ActivatedRoute, private chamadoService: ChamadoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getChamadoDetails(this.route.snapshot.params['id']);
    this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  getChamadoDetails(id) {
    this.chamadoService.getChamado(id)
      .then(data => {
        console.log(data);
        this.chamado = data;
      });
  }

  onFormSubmit(form:NgForm) {
    console.log(form, this.chamado);
    this.chamadoService.updateChamado(this.chamado["_id"], form)
      .then(res => {
          let id = res['_id'];
          this.router.navigate(['/chamado']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  

}
