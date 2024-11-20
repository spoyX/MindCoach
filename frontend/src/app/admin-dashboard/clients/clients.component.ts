import { Component, OnInit } from '@angular/core';
import { user } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit  {
  
  users? : user[];
  constructor(private userService : UserService ) {}
      
  ngOnInit(): void {
    this.UserList();
  }

UserList() {
  this.userService.AllUser().subscribe(u => {
    console.log(u); // Vérifiez les données reçues
    this.users = u;

    // Vérifiez que chaque utilisateur a une catégorie
    this.users.forEach(user => {
      console.log('Nom de la catégorie:', user.categorie?.nomCategorie);
    });
  });
}

  deleteUser(u: user)
  {
     let conf = confirm("vous vouillez supprimer ce compte de L'ID "+(u.id) +"?");
      if (conf)
      this.userService.DeleteUser(u.id).subscribe(() => {
         this.UserList;     
 });
 }


}


