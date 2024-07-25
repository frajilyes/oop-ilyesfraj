// Classe ShoppingCartItem
class ShoppingCartItem {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  // Classe ShoppingCart
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Ajouter un article au panier
    addItem(item) {
      this.items.push(item);
    }
  
    // Supprimer un article du panier par son nom
    removeItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
    }
  
    // Obtenir le total des articles dans le panier
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Obtenir le total du prix des articles dans le panier
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Afficher les articles du panier
    displayItems() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        this.items.forEach(item => {
          console.log(`Nom: ${item.name}, Prix: ${item.price}, Quantité: ${item.quantity}, Prix Total: ${item.getTotalPrice()}`);
        });
      }
    }
  }
  
  // Exemple d'utilisation
  const cart = new ShoppingCart();
  const item1 = new ShoppingCartItem("Pomme", 0.5, 3);
  const item2 = new ShoppingCartItem("Banane", 0.3, 5);
  
  cart.addItem(item1);
  cart.addItem(item2);
  cart.displayItems();
  
  console.log(`Total des articles: ${cart.getTotalItems()}`);
  console.log(`Total du prix: ${cart.getTotalPrice()}`);
  
  cart.removeItem("Pomme");
  cart.displayItems();
  