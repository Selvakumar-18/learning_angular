import { Component } from '@angular/core';
import { LearnServiceService } from '../learn-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-card',
  templateUrl: './crud-card.component.html',
  styleUrl: './crud-card.component.css',
})
export class CrudCardComponent {

  constructor(
    private api: LearnServiceService,
    private router: Router,
    private sharedService: LearnServiceService
  ) {}
  apiData: any;
  productData: any;
  proImages: any;
  coverImages: any;
  searchResults: string[] = [];
  searchTerm = '';
  addCartArr: any;
  arrLen: any;
  temp: any[] = [];
  cartLeng: any;
  addData: any[] = [];
  parentData: any;
  filteredProducts!: any[];
  filterValue: any;

  ngOnInit() {
    this.getApiData();
    this.parentData = 'Data from parent component';
  }

  getApiData() {
    this.api.getData().subscribe((res) => {
      this.apiData = res;
      this.productData = this.apiData.products;
      console.log(this.productData);
      this.filteredProducts = [...this.productData];
      this.proImages = this.apiData.products;

      for (let i = 0; i < this.proImages.length; i++) {
        this.coverImages = this.proImages[i];
        // console.log(this.coverImages.images)
      }
    });
  }
  addCart(i: any) {
    this.temp.push(i);
    this.addCartArr = [...this.temp];
    this.cartLeng = this.addCartArr.length;
    this.sendAddCart(this.addCartArr);
  }

  navigateToAnotherPage() {
    this.router.navigate(['/addCart']);
  }

  sendAddCart(data: any) {
    this.addData = data;
    console.log('parent', this.addData);
    this.sharedService.sendData(this.addData);
  }

  filterByTitle(title: string): void {
    this.filteredProducts = this.productData.filter((product:any) =>{
     if( product.title.toLowerCase().includes(title.toLowerCase())){
      console.log('hey')
     }
    else{
      console.log('error')
    }}
    );
  }
}
