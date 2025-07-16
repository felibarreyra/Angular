import { Component } from '@angular/core';
import { Boot } from './boot';
import { Bootcart } from '../bootcart';
import { BootData } from '../boot-data';

@Component({
  selector: 'app-boots-list',
  standalone: false,
  templateUrl: './boots-list.html',
  styleUrls: ['./boots-list.scss']
})
export class BootsList {

  constructor(private cart: Bootcart,private bootService: BootData) {
    this.cart = cart;
    this.bootService = bootService;
  }
addToCart(boot: Boot):void {
  this.cart.addToCart(boot);
  boot.stock -= boot.quantity;
  boot.quantity =0;
}
maxReached(m: string) {
  alert(m);
}
changeQuantity(event: { target: any; },boot: Boot) {
  console.log(event.target);
}
downQuaintity(boot:Boot) : void {
  if (boot.quantity > 0) {
  boot.quantity--;
  }
}
upQuantity(boot: Boot) {
  if(boot.quantity< boot.stock) {
  boot.quantity++;
  }
}
  boots: Boot[] = [];

  ngOnInit (): void {
    this.bootService.getAll()
      .subscribe(boots=>this.boots = boots);
       this.loadBoots();
  }

  loadBoots(): void {
    this.bootService.getAll().subscribe(boots => this.boots = boots);
}
}