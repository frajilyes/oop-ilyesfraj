// Définition de la classe PanierItem
class PanierItem {
    constructor(produit, quantite) {
        this.produit = produit; // Objet produit qui contient des propriétés telles que le nom, le prix, etc.
        this.quantite = quantite; // Quantité du produit
    }

    // Méthode pour obtenir le prix total pour cet élément du panier
    getTotalPrice() {
        return this.produit.prix * this.quantite;
    }

    // Méthode pour ajouter une quantité à l'élément du panier
    ajouterQuantite(n) {
        this.quantite += n;
    }

    // Méthode pour retirer une quantité de l'élément du panier
    retirerQuantite(n) {
        if (this.quantite - n >= 0) {
            this.quantite -= n;
        } else {
            console.log("Quantité insuffisante pour retirer cette quantité.");
        }
    }

    // Méthode pour afficher les détails de l'élément du panier
    afficherDetails() {
        console.log(`Produit: ${this.produit.nom}, Quantité: ${this.quantite}, Prix Total: ${this.getTotalPrice()}`);
    }
}

// Définition de la classe Panier
class Panier {
    constructor() {
        this.items = []; // Tableau pour stocker les instances de PanierItem
    }

    // Méthode pour obtenir le nombre total d'articles dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantite, 0);
    }

    // Méthode pour ajouter un élément au panier
    ajouterItem(produit, quantite) {
        // Vérifiez si l'article existe déjà dans le panier
        const itemExist = this.items.find(item => item.produit.nom === produit.nom);
        if (itemExist) {
            itemExist.ajouterQuantite(quantite);
        } else {
            const item = new PanierItem(produit, quantite);
            this.items.push(item);
        }
    }

    // Méthode pour supprimer un élément du panier par produit
    supprimerItem(produit) {
        this.items = this.items.filter(item => item.produit.nom !== produit.nom);
    }

    // Méthode pour afficher les articles du panier
    afficherItems() {
        this.items.forEach(item => item.afficherDetails());
        console.log(`Nombre total d'articles dans le panier: ${this.getTotalItems()}`);
    }

    // Méthode pour obtenir le prix total de tous les éléments du panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Méthode pour afficher les détails de tous les éléments du panier
    afficherDetails() {
        this.afficherItems();
        console.log(`Prix total du panier: ${this.getTotalPrice()}`);
    }
}

// Exemple d'utilisation
// Créer des produits
const produit1 = { nom: "Produit A", prix: 10.0 };
const produit2 = { nom: "Produit B", prix: 15.0 };

// Créer un panier d'achat
const panier = new Panier();

// Ajouter des articles au panier
panier.ajouterItem(produit1, 2);
panier.ajouterItem(produit2, 3);

// Afficher le panier
console.log("Affichage du panier après ajout des articles:");
panier.afficherDetails();
// Produit: Produit A, Quantité: 2, Prix Total: 20
// Produit: Produit B, Quantité: 3, Prix Total: 45
// Nombre total d'articles dans le panier: 5
// Prix total du panier: 65

// Supprimer un article du panier
panier.supprimerItem(produit1);

// Afficher le panier après suppression d'un article
console.log("Affichage du panier après suppression d'un article:");
panier.afficherDetails();
// Produit: Produit B, Quantité: 3, Prix Total: 45
// Nombre total d'articles dans le panier: 3
// Prix total du panier: 45
