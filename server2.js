 class PanierItem {
    constructor(produit, quantite) {
        this.produit = produit; // Objet produit qui contient des propriétés telles que le nom, le prix, etc.
        this.quantite = quantite; // Quantité du produit
    }

    // Méthode pour calculer le prix total de l'article
    getTotalPrice() {
        return this.produit.prix * this.quantite;
    }

    // Autres méthodes...
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

// Exemple d'utilisation
const produit1 = { nom: "Produit A", prix: 10.0 };
const itemPanier = new PanierItem(produit1, 2);

itemPanier.afficherDetails(); // Produit: Produit A, Quantité: 2, Prix Total: 20
itemPanier.ajouterQuantite(3);
itemPanier.afficherDetails(); // Produit: Produit A, Quantité: 5, Prix Total: 50
itemPanier.retirerQuantite(1);
itemPanier.afficherDetails(); // Produit: Produit A, Quantité: 4, Prix Total: 40









