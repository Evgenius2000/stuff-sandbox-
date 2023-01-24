import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label: 'All products',
            
        },
        {
            label: 'Selected products',

        }
    ];
  }
}
