import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'money-track';
  constructor(
    private firestrore: AngularFirestore
  ) { }

  get_transactions() {
    return this.firestrore.collection(this.collectionName).snapshotChanges();
  }

  add_transaction(data) {
    return this.firestrore.collection(this.collectionName).add(data);
  }
}
