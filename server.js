class Produit {
    constructor(id, nom, prix) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
    }
  
    // Méthode pour afficher les détails du produit
    afficherDetails() {
      return `ID: ${this.id}, Nom: ${this.nom}, Prix: ${this.prix}€`;
    }
  }
  
  // Exemple d'utilisation
  const produit1 = new Produit(1, 'Chaise', 49.99);
  console.log(produit1.afficherDetails());
  
  const produit2 = new Produit(2, 'Table', 149.99);
  console.log(produit2.afficherDetails());
  








 