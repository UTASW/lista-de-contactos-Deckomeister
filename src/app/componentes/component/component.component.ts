import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioService } from './../../services/servicio.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {

  constructor(public alertController: AlertController, public service:ServicioService) { }

  ngOnInit() {}

}
