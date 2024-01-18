import { Component, Input } from '@angular/core';
import { LearnServiceService } from '../learn-service.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.css',
})
export class AddCartComponent {
  cartDetails:any;
  addCartDetail:any;
  constructor(private sharedService: LearnServiceService) {}
  ngOnInit() {
    console.log('childata')
    this.getData();
  }

  getData() {
    console.log(this.sharedService.AddCartData)
   this.sharedService.AddCartData.subscribe((res:any)=>{
    if(res){
      this.addCartDetail = res
    }
    else{
      console.log('Child Error')
    }
   })
  }
}
