import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  workoutForm!: FormGroup;
  submitted = false;
  workoutTypes = ['Cardio', 'Strength', 'Flexibility', 'Balance'];
  @Input() selectedUser: string | null = null;
  constructor(private formBuilder: FormBuilder,private workoutService:WorkoutService) { }
  @Output() userSelected = new EventEmitter<string>();
  ngOnInit() {
    this.workoutForm = this.formBuilder.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() { return this.workoutForm.controls; }

  onSubmit() {
    this.submitted = true;
   debugger
    if (this.workoutForm.invalid) {
      return;
    }
    
    if (this.workoutForm.valid) {
      this.workoutService.addWorkout(this.workoutForm.value);
      if(this.selectedUser){
        this.userSelected.emit(this.selectedUser);
      }
      this.workoutForm.reset();
    }

    // Add workout to the list (implementation depends on the overall app structure)
    // Reset form after submission
    this.workoutForm.reset();
    this.submitted = false;
  }
}
