import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

  newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent = new EventEmitter<string>()

  createOnomatopia(form: NgForm) {

    this.newOnomatopia = form.value.creerInput;
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);

  }
}
