import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  mode = true;

  @Output()   menu = new EventEmitter<any>();
  mainMenu: Array<any> = [];
  toggle = 'fas fa-bars';

  cambiar(){
    this.mode = !this.mode
  }
  constructor() { }

  ngOnInit(): void {
    this.mainMenu = [
      {
        name: 'Inventory&Control',
        icon: 'fab fa-critical-role',
        router: ['']
      },
      {
        name: 'Inicio',
        icon: 'fas fa-store',
        router: 1
      },
      {
        name: 'Ventas',
        icon: 'far fa-money-bill-alt',
        router: 2
      },
      {
        name: 'Inventario',
        icon: 'far fa-list-alt',
        router: 3
      },
      {
        name: 'Compras',
        icon: 'fas fa-shopping-cart',
        router: 4
      },
      {
        name: 'Balance',
        icon: 'fas fa-chart-line',
        router: 5
      },
      {
        name: '+ Información',
        icon: 'fas fa-info',
        router: 6
      },
      {
        name: 'Cerrar Sesión',
        icon: 'fas fa-sign-out-alt',
        router: 7
      }
    ];
  }
  changeMenu(item:any){
    let number=item
    if(number==1){
      this.mode=true
    }else{
      this.mode=false
    }
    
    
    this.menu.emit({number});
  }
}
