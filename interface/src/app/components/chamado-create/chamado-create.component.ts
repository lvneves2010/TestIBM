import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { ChamadoService } from '../../services/chamado.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {
 
  chamadoForm: FormGroup;
  id:string = '';
  nome:string = '';
  descricao:string = '';
  situacao:string = '';
  atendente:string = '';
  constructor(private route: ActivatedRoute, private chamadoService: ChamadoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.chamadoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'situacao' : [null, Validators.required],
      'atendente' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.chamadoService.postChamado(form)
      .then(res => {
          let id = res['_id'];
          this.router.navigate(['/chamado']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
