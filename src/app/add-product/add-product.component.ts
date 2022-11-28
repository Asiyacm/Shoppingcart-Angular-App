import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  title=""
  image=""
  description=""
  price=""
  seller=""
  name=""
  quantity=""

productShop=()=>
{
  let product:any=
  {"title":this.title,"image":this.image,"description":this.description,"price":this.price,"seller":this.seller,
  "name":this.name,"quantity":this.quantity}
  console.log(product)

  }



}
