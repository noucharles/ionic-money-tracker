import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {

  isEdit: boolean;
  type: string;
  title: string;
  subTitle: string;
  amount: string;
  id: any;
  private loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    this.route.params.subscribe((data: any) => {
      console.log(data.type);
      // tslint:disable-next-line:triple-equals
      if (data.type == 'add'){
        this.isEdit = false;
      }else {
        this.isEdit = true;
      }
    });
  }

  ngOnInit() {
  }

  addTransaction() {
    this.loading = true;
    const data = {
      type: this.type,
      title: this.title,
      subTitle: this.subTitle,
      amount: this.amount,
    };
    this.firebaseService.add_transaction(data).then((res: any) => {
      console.log(res);
      this.loading = false;
      this.router.navigateByUrl('/home');
    });
  }

}
