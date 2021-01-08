import { Component, OnInit } from '@angular/core';
import { ManageproductService } from '../appServices/manageproduct.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private manageService:ManageproductService) { }

  dataTitle = this.manageService.getDataTitle();
  fetching = false;
  products = [
    {
      id: 'p1',
      name: 'Laptop',
      price: '40000'
    },
    {
      id: 'p2',
      name: 'Mobile',
      price: '27000'
    },
    {
      id: 'p3',
      name: 'Mobile',
      price: '33000'
    },
    {
      id: 'p4',
      name: 'Laptop',
      price: '80000'
    }
  ]

  ngOnInit(): void {
    this.onFetchProduct()
  }

  onAddProduct(id, name, price){
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    })
  }

  onSaveProduct(){
    this.manageService.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  onFetchProduct(){
    this.fetching = true;
    this.manageService.fetchProducts().subscribe(
      (response) => {
        console.log(response)
        const data = JSON.stringify(response)
        console.log(data)
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      (error) => console.log(error)
    )
  }

  onDeleteProduct(id){
    this.products.splice(id,1);
    this.onSaveProduct();
  }

}
