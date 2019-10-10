import { Component, OnInit } from '@angular/core';
import { User, Map } from '@/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  testUser: User = {
    id: 'hoge',
    name: 'Hoge',
    email: 'hoge@example.com'
  };

  testMaps: Map[] = [
    { id: 'map1', name: 'Map 1' },
    { id: 'map2', name: 'Map 2' },
    { id: 'map3', name: 'Map 3' },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.testUser);
    console.log(this.testMaps);
  }
}
