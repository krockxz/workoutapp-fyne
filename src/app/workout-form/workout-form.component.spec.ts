import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  @Input() selectedUser: any;
  @Output() userSelected = new EventEmitter<any>();

  workoutForm: FormGroup;
  submitted = false;
  workoutTypes = ['Cardio', 'Strength', 'Flexibility', 'Balance'];

  constructor(private fb: FormBuilder) {
    this.workoutForm = this.fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() {
    return this.workoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.workoutForm.invalid) {
      return;
    }

    // Perform your logic here
    this.userSelected.emit(this.selectedUser);
  }
}
