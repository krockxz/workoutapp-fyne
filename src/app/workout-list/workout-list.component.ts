import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Workout } from '../models/workout.model';
import { WorkoutService } from '../workout.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  workouts: any = [];
  searchForm: FormGroup;
  filterForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  pageSize = 5;
  pageIndex = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @Output() userSelected = new EventEmitter<string>();
  workoutTypes: string[] = ['All', 'Cardio', 'Strength', 'Flexibility', 'Balance'];

  constructor(private workoutService: WorkoutService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      userName: ['']
    });

    this.filterForm = this.fb.group({
      workoutType: ['']
    });
  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(data => {
      debugger
      this.workouts = data;
      if(this.dataSource!=null){
        this.dataSource.data = this.workouts;
        this.dataSource.paginator = this.paginator;
      }
 
    });

    this.searchForm.get('userName')?.valueChanges.subscribe(name => {
      this.workoutService.searchWorkoutsByName(name).subscribe(data => {
        this.dataSource.data = data;
      });
    });

    this.filterForm.get('workoutType')?.valueChanges.subscribe(type => {
      if (type === 'All') {
        this.dataSource.data = this.workouts;
      } else {
        this.workoutService.filterWorkoutsByType(type).subscribe(data => {
          this.dataSource.data = data;
        });
      }
    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
  onUserClick(userName: string) {
    debugger
    this.userSelected.emit(userName);
  }
}
