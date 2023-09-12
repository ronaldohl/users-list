import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'userImage'
})
export class UserImagePipe implements PipeTransform {

  transform(user: User, ):string {
    if(!user.avatar){
      return 'assets/user.webp'
    }

    return user.avatar
  }

}
