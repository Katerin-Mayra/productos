import{Products,ProductsManagement} from "./products.js";
let p1=new Products("Pollo","Pollo Sofia", 20);
let p2=new Products("Galletas","Galletas Mabel", 50);
let p3=new Products("Galletas","Galletas Imba", 50);
let manager =new ProductsManagement();
manager.addProducts(p1);
manager.addProducts(p2);
//manager.removeProducts(p1); //borrar
manager.updateProducts(p1, p3); //actualizar el p1 por el p3
console.log(manager.showProducts());