import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  router = inject(Router);
  toasCtrl = inject(ToastController); //
  loadingCtrl = inject(LoadingController); ///

  routerLink(url: any){
    this.router.navigateByUrl(url);
  }

  //spining
  loading(){
    //cargar
    return this.loadingCtrl.create({spinner: 'crescent'} );
  }

  //para mandar un mensaje en pantalla
  async presentToast(opts?: ToastOptions){
    const toast = await this.toasCtrl.create(opts);
      toast.present();//
    
}
}
