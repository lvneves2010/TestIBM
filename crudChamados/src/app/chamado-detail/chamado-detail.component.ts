import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.css']
})
export class ChamadoDetailComponent implements OnInit {

  chamado = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getChamadoDetails(this.route.snapshot.params['id']);
  }

  getChamadoDetails(id) {
    this.api.getChamado(id)
      .subscribe(data => {
        console.log(data);
        this.chamado = data;
      });
  }

  deleteChamado(id) {
    this.api.deleteChamado(id)
      .subscribe(res => {
          this.router.navigate(['/chamados']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
