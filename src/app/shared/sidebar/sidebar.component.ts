import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems:any[];
  user: any = {}
  constructor(
    private sideBarServices:SidebarService,
    private authService: AuthService
  )
  {
    this.menuItems = this.sideBarServices.menu
    this.user = this.authService.GetAuth()
  }

  ngOnInit(): void { }

  logout(){
    this.authService.destroyToken()
    this.authService.redirectBy('login')
  }

}
