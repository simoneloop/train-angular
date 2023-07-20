import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../servicies/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username: string | undefined;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  login(data:object):void{
    this.userService.login(data);
  }

}
