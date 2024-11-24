import { user } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'] 
})
export class ClientsComponent implements OnInit {
  users?: user[]; // Liste des utilisateurs
  user?: user | null; // Utilisateur recherché (ou null si non trouvé)
  searchEmail: string = ''; // Email pour la recherche

  constructor(private userService: UserService) {}

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

  deleteUser(u: user) {
    // Confirmation avant de supprimer l'utilisateur
    const conf = confirm(
      "Vous voulez supprimer ce compte de l'ID " + u.id + " ?"
    );
  
    if (conf) {
      this.userService.DeleteUser(u.id).subscribe({
        next: () => {
          console.log("Utilisateur supprimé avec succès.");
          this.UserList(); // Rafraîchit la liste des utilisateurs
        },
        error: (err) => {
          console.error("Erreur lors de la suppression :", err);
        }
      });
    }
  }
  onSearchByEmail() {
    this.userService.findByEmail(this.searchEmail).subscribe({
      next: (data) => {
        console.log('Utilisateur trouvé :', data);
        this.users = [data]; // Affecte uniquement l'utilisateur trouvé à la liste des utilisateurs
      },
      error: (err) => {
        console.error('Erreur lors de la recherche de l\'utilisateur :', err);
        this.users = []; // Vide la liste en cas d'erreur
      },
    });
  }
}
