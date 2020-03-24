import { ComponentesModule } from './../componentes/componentes.module';

import { ServicioService } from './../services/servicio.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public service:ServicioService) {
    
  }

}
