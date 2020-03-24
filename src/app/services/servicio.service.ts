import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  arrPersonas: Array<any> = [] as Array<JSON>;
  // tslint:disable-next-line: ban-types
  blnNext: boolean;
  strMessage: string;
  public pepperoni: boolean;
  nom = '';
  t = '';
  c = '';
  not = '';
  sexo: string;

  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public alertController: AlertController) {
    this.sexo="h";
  }

  addPerson(strNombre: string, intTelefono: number , strCorreo: string, strNotas: string) {
    this.strMessage = '';
    this.blnNext = false;
    (strNombre) ? this.fnError() : this.fnError('Error: Error favor de llenar el campo nombre.');
    (intTelefono) ? this.fnError() : this.fnError('Error: Error favor de llenar el campo telefono.');
    // tslint:disable-next-line: max-line-length
    (strCorreo) ? (this.regexp.test(strCorreo)) ? this.fnError() : this.fnError('Error: Error Correo no valido.') : this.fnError('Error: Error favor de llenar el campo correo.');
    (strNotas) ? this.fnError() : this.fnError('Error: Error favor de llenar el campo notas.');

    if (!this.blnNext) {
      let strSexo: string;
      strSexo = this.sexo;
      const jsnPersona: any = {
        strNombre,
        intTelefono,
        strCorreo,
        strNotas,
        strSexo
      };
      this.exito();
      this.arrPersonas.push(jsnPersona);
      // console.log(this.arrPersonas);
    } else {
      this.presentAlert();
    }
  }

  fnError(msg?: string) {
    if (msg) {
      // console.log(msg);
      this.strMessage += '<br>' + msg + '<br>';
      this.blnNext = true;
    } else if (this.blnNext) {
      this.blnNext = true;
    } else {
      this.blnNext = false;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: this.strMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm(a) {
    const alert = await this.alertController.create({
      header: 'Eliminar Contacto',
      message: 'Desea eliminar <strong>' + this.arrPersonas[a].strNombre + '? </strong>',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'OK',
          handler: () => {
            // tslint:disable-next-line: prefer-const
            this.arrPersonas.splice(a, 1);
          }
        }
      ]
    });

    await alert.present();
  }

  async exito() {
    const alert = await this.alertController.create({
       header: 'Exito',
      message: 'Se añadio el contacto',
      buttons: [{
          text: 'OK',
          handler: () => {
            this.nom = '';
            this.t = '';
            this.c = '';
            this.not = '';
          }
        }
      ]
    });

    await alert.present();
  }

  

  event1(event) {
    this.sexo = event.target.value;
  }

}
