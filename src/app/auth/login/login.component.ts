import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  public onLogin(form): void {
    this.authService.login(form.value).subscribe((res: any) => {
      this.authService.SetAuth(res)
      this.authService.redirectBy('dashboard')
    })
  }
}
