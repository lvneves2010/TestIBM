import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadoService } from '../../services/chamado.service';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.scss']
})
export class ChamadoDetailComponent implements OnInit {

  chamado = {}

  constructor(private route: ActivatedRoute, private chamadoService: ChamadoService, private router: Router) { }

  ngOnInit() {
    this.getChamadoDetails(this.route.snapshot.params['id']);
  }

  getChamadoDetails(id) {
    this.chamadoService.getChamado(id)
      .then(data => {
        console.log(data);
        this.chamado = data;
      });
  }

  deleteChamado(id) {
    this.chamadoService.deleteChamado(id)
      .then(res => {
          this.router.navigate(['/chamado']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
