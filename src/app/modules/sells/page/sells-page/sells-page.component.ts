import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sells-page',
  templateUrl: './sells-page.component.html',
  styleUrls: ['./sells-page.component.scss']
})
export class SellsPageComponent implements OnInit {
  mode: String = 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
