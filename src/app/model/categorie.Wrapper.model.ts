import { Categorie } from './Categorie.model';
export class CategorieWrapper{
_embedded!: { categories: Categorie[]};
}