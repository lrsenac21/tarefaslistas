import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Tarefas } from './home.mode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefas: Tarefas[] = [];

  constructor(private alerta: AlertController) { }

  async showAdd() {
    const screen = await this.alerta.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'O que deseja fazer ?'
        }
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{console.log('Excluido')}
        },
        {
          text: 'Adicionar',
          handler: ()=> {console.log('Incluir a tarefa')}
        }

      ]
    });
    screen.present();
  }

}
