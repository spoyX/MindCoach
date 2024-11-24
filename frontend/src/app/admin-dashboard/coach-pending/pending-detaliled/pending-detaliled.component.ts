import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-detaliled',
  templateUrl: './pending-detaliled.component.html',
  styleUrl: './pending-detaliled.component.css'
})
export class PendingDetaliledComponent {

  id:any
  pendingDetails: any;
  constructor(private userService: UserService,private act:ActivatedRoute){}


  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id')


    this.userService.pendingId(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.pendingDetails = data; 
      },
      error: (err) => {
        console.error('Error fetching coach details:', err);
      }
    });
  }
  processDecision(id: any, decision: string): void {
    this.userService.decision(id, decision).subscribe({
      next: (response) => {
        console.log(response);
         
      },
      error: (err) => console.error('Error processing decision:', err),
    });
  }


}
