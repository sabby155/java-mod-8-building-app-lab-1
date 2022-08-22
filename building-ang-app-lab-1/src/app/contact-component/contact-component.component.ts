import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  // We need to use property binding and the @input annotation in order to let the parent component pass information to the child component.
  // We decorate the user variable with the @Input annotation to indicate that a parent component can set this property through property binding.
  @Input() user: User = {
    firstName: "default",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
