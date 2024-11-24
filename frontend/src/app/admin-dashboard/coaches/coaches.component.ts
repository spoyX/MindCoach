import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent {
 coach:any = [];

  constructor(private signUp:UserService){
  }

  ngOnInit():void{
    this.signUp.allCoach().subscribe({
      next:(res)=>{
        console.log(res)
        this.coach=res
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }
}
