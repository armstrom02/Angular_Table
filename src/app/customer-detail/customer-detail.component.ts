import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  public CustomerId;
  public firstname;
  public lastname;
  public email;
  public active;
  public datec;
  public dateu;
  public rating
  constructor(private route : ActivatedRoute ) {}

  ngOnInit() {

    this.CustomerId=this.route.snapshot.params['ID'];
    this.firstname=this.route.snapshot.params['firstname'];
    this.lastname=this.route.snapshot.params['lastname'];
    this.email=this.route.snapshot.params['email'];
    this.active=this.route.snapshot.params['active'];
    this.datec=this.route.snapshot.params['datec'];
    this.dateu=this.route.snapshot.params['dateu'];
    this.rating=this.route.snapshot.params['rating'];
  }

}