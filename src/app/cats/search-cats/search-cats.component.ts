import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Router } from '@angular/router';
import { Cat } from 'src/app/shared/models/Cat.model';

@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent {
  displayedColumns: string[] = ['id', 'name', 'length', 'weight', 'breed', 'actions'];

  dataSource: Cat[] = [
    { id: 1, name: 'Cesar', length: 0.3, weight: 4.0, breed: 'Siamês'},
    { id: 2, name: 'Augusto', length: 0.5, weight: 2.0, breed: 'Persa'},
    { id: 3, name: 'Ronaldo', length: 0.1, weight: 5.0, breed: 'Burmês'},
    { id: 4, name: 'Gato', length: 0.2, weight: 6.0, breed: 'Bengal'},
    { id: 5, name: 'Farofa', length: 0.8, weight: 10.0, breed: 'Abissínio'},
  ];

  // dataSource: Cat[] = [];
  
  // constructor(private service: CatService, private router: Router) {}

  // ngOnInit(): void {
  //   this.service.getCats().subscribe((resp) => {
  //     console.log(resp);

  //     this.dataSource = resp;
  //   })
  // }

}
