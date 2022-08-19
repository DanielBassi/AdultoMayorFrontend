import { Component, OnInit, OnDestroy} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private userService: UsersService) { }
  
  dataSource: any;

  ngOnInit(): void {
    this.usuarios();
  }

 
  usuarios(){
    this.userService
      .usuarios()
      .subscribe((response: any) => {
        this.dataSource = response;
      });
  }

  rowValidating(event: any){
    
  }

  editorPreparing(event: any){
    
  }

  ngOnDestroy(): void {
    
  }
}
