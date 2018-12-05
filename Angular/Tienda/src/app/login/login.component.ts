import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private data: DataService, private router: Router) { }

  respuesta = {};
  login = true;

  ngOnInit() {
  }

  onSubmit(form) {
    // tslint:disable-next-line:prefer-const
    let formLogin = form.value;
    // tslint:disable-next-line:prefer-const
    let userLogin = formLogin.email;
    // tslint:disable-next-line:prefer-const
    let pswLogin = formLogin.password;

    this.respuesta = this.data.getData().subscribe(datos => {
      // tslint:disable-next-line:prefer-const
      let user = datos.usuarios;
      for (let i = 0; i < user.length; i++) {
        const userServer = user[i];
        if (userLogin === userServer.email) {
          console.log('Usuario Correcto');
          if (pswLogin === userServer.password) {
            console.log('Password Correcto');
            this.router.navigate(['/home']);
          } else {
            console.log('Password Incorrecto');
          }
        } else {
          console.log('Usuario Incorrecto');
        }
      }
    });
  }

}
