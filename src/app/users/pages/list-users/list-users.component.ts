import { Component, OnDestroy, OnInit } from '@angular/core';
import { FiltersForm, User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl} from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime, tap} from "rxjs/operators";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, OnDestroy{
  
  loading:boolean = false;

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
    this.loading = true;

    this.userService.getUsersFiltered(this.filters).subscribe(users => {
      this.users = users
    })

    this.loading = false

    this.filtersChanged()
  }

  filtersChanged(){
  
    this.formSubscription = this.filtersForm.valueChanges.
      pipe(              
        debounceTime(400),
      )
      .subscribe(
        form=>{
          this.loading = true;
          this.filters = {
            query: form.query,
            orderBy: form.orderBy,
            order: form.order
          }
          
          this.userService.getUsersFiltered(this.filters).subscribe(users => {
            this.users = users
          })
          
          this.loading = false;
          
        }
      )
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe()
  }



}
