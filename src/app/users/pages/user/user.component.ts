import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
ngOnInit(): void {
  if(!this.user){
    throw Error('User is required')
  }
}
@Input() user!:User
}
