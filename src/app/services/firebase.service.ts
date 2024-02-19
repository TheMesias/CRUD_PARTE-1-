import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        updateProfile,
        sendPasswordResetEmail
      } from 'firebase/auth';

import { User } from '../models/user.model';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth); 
  firestore = inject(AngularFirestore);

  //primera parte
  //para  que retorne los datos 
  getAuth(){
    return getAuth();
  }

  //para que retorne el contenido de la bd
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  SignUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  updateUser(displayName: any){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  setDocument(path: any, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: any){
    return (await getDoc(doc(getFirestore(), path))).data(); 
  }

}
