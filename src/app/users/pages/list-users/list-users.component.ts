import { Component, OnDestroy, OnInit } from '@angular/core';
import { FiltersForm, User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl} from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, OnDestroy{
  public users:User[] = [];
  
  filters:FiltersForm = {
    query: '',
    orderBy: 'name',
    order: 'ASC'
  }

  filtersForm:FormGroup = new FormGroup({
    query: new FormControl(''),
    orderBy: new FormControl(this.filters.orderBy),
    order: new FormControl(this.filters.order)
  })

  formSubscription!:Subscription;

  constructor(private userService:UserService) {
    
  }
  ngOnInit(): void {
    //this.userService.getUsers().subscribe(users => this.users = users)

    // this.userService.searchUsers('jane@').subscribe(users=>{
    //   // console.log(users)
    // })

    this.userService.getUsersFiltered(this.filters).subscribe(users => {
      this.users = users
    })

    this.filtersChanged()
  }

  filtersChanged(){
    this.formSubscription = this.filtersForm.valueChanges.subscribe(
      form=>{
        this.filters = {
          query: form.query,
          orderBy: form.orderBy,
          order: form.order
        }
        
        this.userService.getUsersFiltered(this.filters).subscribe(users => {
          this.users = users
        })
        
      }
    )
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe()
  }



}
