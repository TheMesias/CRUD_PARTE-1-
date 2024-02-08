import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  //primera parte 
  //importar firebase 
  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })
  constructor() { }

  ngOnInit() {
  }

  async submit() {
    if(this.form.valid){

      const loading = await this.utilsService.loading(); ///
      await loading.present(); ///

      this.firebaseService.signIn(this.form.value as User)

      .then(resp => {
        this.utilsService.routerLink('/main/home'); //redireccionar a home luego de ingresar credenciales
        this.utilsService.presentToast({message: 'Bienvenido', 
        duration: 2000, color: 'success', position: 'top', animated: true, icon: 'checkmark-circle-outline'});
      ///
      }).catch(err => {
        console.log(err);
        this.utilsService.presentToast({message: err.message, 
        duration: 2000, color: 'danger', position: 'top', animated: true, icon: 'alert-circle-outline'});
      }).finally(() => {
        loading.dismiss();
      });
      

    }    
  }

}
