import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../model/Categorie.model';
import { user } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit {
  categories! : Categorie[];
  updatedCatId! : number;
  currentUser = new user();
  
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private userService: UserService) { }

  ngOnInit(): void {
      this.userService.AllCategories().
      subscribe(cats => {this.categories = cats;
      console.log(cats);
      });

      this.userService.viewuser(this.activatedRoute.snapshot.params['id']).
      subscribe( u => { this.currentUser =  u; 
      this.updatedCatId =   this.currentUser.categorie.idCategorie;
    
    } ) 
    
    }

    Modifie() {
    this.currentUser.categorie = this.categories.find(cat => cat.idCategorie == this.updatedCatId)!;
         this.userService.UpdateUser(this.currentUser).subscribe(u => {
        
          this.router.navigate(['dashboard/clients']); }
      );
  }

}
