import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ApiService } from '../api.service';
import { ChamadosService } from '../../services/chamados.service';

@Component({
  selector: 'ibm-chamado-detail',
  templateUrl: './chamados-detail.component.html',
  styleUrls: ['./chamados-detail.component.scss']
})
export class ChamadosDetailComponent implements OnInit {

  chamado = {};

  constructor(private route: ActivatedRoute, private chamadosService: ChamadosService, private router: Router) { }

  ngOnInit() {
    this.getChamadoDetails(this.route.snapshot.params['id']);
  }

  getChamadoDetails(id) {
    this.chamadosService.getChamado(id)
      .then(data => {
        console.log(data);
        this.chamado = data;
      });
  }

  deleteChamado(id) {
    this.chamadosService.deleteChamado(id)
      .then(res => {
          this.router.navigate(['/chamados']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
