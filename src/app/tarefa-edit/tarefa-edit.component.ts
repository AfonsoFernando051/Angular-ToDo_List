import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefa-edit',
  templateUrl: './tarefa-edit.component.html',
  styleUrls: ['./tarefa-edit.component.css']
})
export class TarefaEditComponent {

public tarefa: any = [] = [
  {
    id: '1',
    nome : 'dançar',
    categoria: 'entretenimento',
    prioridades: 'total'
  },
  {
    id: '2',
    nome : 'cantar',
    categoria: 'entretenimento',
    prioridades: 'total'
  },
  {
    id: '3',
    nome : 'brincar',
    categoria: 'entretenimento',
    prioridades: 'nenhuma'
  }
];

constructor(private rotaAtiva: ActivatedRoute){
  const id = this.rotaAtiva.snapshot.paramMap.get('id');
  console.log(id);
}

}
