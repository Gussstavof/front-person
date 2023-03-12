import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../../services/person/person.service";
import {Person} from "../../../services/person/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit{

  ngOnInit(): void {
  }
  constructor(
    private service: PersonService,
    private router: Router
  ) {

  }

  person: Person = {
    name: '',
    birthdate: '',
    address: [
        {
          cep: '',
          numero: ''
        }
      ]
  }

  save(){
    this.service.create(this.person).subscribe(
      data => console.log(data), error => console.log(error))
    console.log(this.person)
  }

}
