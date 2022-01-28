import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {
  @Input() menu:any =1;

  cambiar(){
    this.menu = !this.menu
  }
  constructor() {
    
  }

  ngOnInit(): void {
  }
  menuchange(item:any){
    this.menu=item.number
    
  }
}
