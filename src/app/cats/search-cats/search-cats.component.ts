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

  dataSource: Cat[] = [];
  
  constructor(private service: CatService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCats().subscribe((resp) => {
      this.dataSource = resp;
    })
  }
}
