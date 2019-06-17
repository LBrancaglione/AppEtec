import { Component, OnInit } from '@angular/core';
import { PassandoDadosService } from 'src/app/servicos/passando-dados.service';

@Component({
  selector: 'app-noticia01',
  templateUrl: './noticia01.page.html',
  styleUrls: ['./noticia01.page.scss'],
})
export class Noticia01Page implements OnInit {

  constructor( public Dados: PassandoDadosService) { }
 public noticia =[];
  ngOnInit() { 
    this.noticia = this.Dados.getDados("noticia");
  }

}
