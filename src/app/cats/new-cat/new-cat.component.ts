import { Cat } from './../../shared/Cat.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit{

  dataSource: Cat[] = [
    { id: 1, name: 'Cesar', length: 0.3, weight: 4.0, breed: 'Siamês'},
    { id: 2, name: 'Augusto', length: 0.5, weight: 2.0, breed: 'Persa'},
    { id: 3, name: 'Ronaldo', length: 0.1, weight: 5.0, breed: 'Burmês'},
    { id: 4, name: 'Gato', length: 0.2, weight: 6.0, breed: 'Bengal'},
    { id: 5, name: 'Farofa', length: 0.8, weight: 10.0, breed: 'Abissínio' },
  ];

  formCat = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    length: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(0)]),
    weight: new FormControl<number | undefined>(undefined),
    breed: new FormControl<string>(''),
  })

  editMode = false;
  // showPassword = false;
  selectedCat: Cat | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log(this.route); //para ver todos os parâmetros
      
      if (this.route.routeConfig?.path?.includes("edit")) {
        this.editMode = true;
        let catId: number = this.route.snapshot.params['id'];
        this.selectedCat = this.dataSource.find((item) => item.id == catId);
        // console.log(cat);
        
        this.formCat.patchValue({

        name: this.selectedCat?.name,
        length: this.selectedCat?.length,
        weight: this.selectedCat?.weight,
        breed: this.selectedCat?.breed
        //  ...cat
        // MODO ALTERNATIVO 
        })
      }
  }

  logInfo() {
    console.log(this.formCat)
  }

  createCat(): void {

  }

  updateCat(): void {
      console.log(this.dataSource);
      if (this.selectedCat) {
    const index = this.dataSource.findIndex((value) => value.id === this.selectedCat!.id);

    if (index !== -1) {
      this.dataSource[index] = {
        id: this.selectedCat!.id,
        ...this.formCat.getRawValue(),
      } as Cat;
      console.log(this.dataSource);
      }
    }
  }
}