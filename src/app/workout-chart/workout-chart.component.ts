import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType } from "chart.js";

import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit , OnChanges ,AfterViewInit{
  @Input() selectedUser: string | null = null;
  workTypesMinutes :any= [];
  wortkTyp :any=[]
  labels: any = [];
  chart: any = []
  title = 'ng-chart';
  data: any = [];
  @ViewChild('canvas')
  canvas!: ElementRef;
  constructor(private workoutService: WorkoutService) {}
  ngOnInit(): void {
   // this.showChart()
  }

  ngOnChanges() {
    if (this.selectedUser) {
      debugger
      if (this.chart.length != 0) {
        this.chart.destroy();
      }
      this.workTypesMinutes=[]
      this.wortkTyp=[]
      this.workoutService.getWorkouts().subscribe((workouts)=> {
        const userWorkouts = workouts.filter(workout => workout.userName === this.selectedUser);
        const workoutTypes = [...new Set(userWorkouts.map(workout => workout.workoutType))];
        if (this.chart.length != 0) {
          this.chart.destroy();
          this.workTypesMinutes=[]
          this.wortkTyp=[]
        }
        for(let i=0;i<userWorkouts[0].workoutType.length;i++){
          this.workTypesMinutes.push(userWorkouts[0].workoutType[i].workoutMinutes);
          this.wortkTyp.push(userWorkouts[0].workoutType[i].type);
        }
        console.log("workoutTypes", this.workTypesMinutes,this.wortkTyp)
       // this.chartData.datasets[0].data = workoutMinutesByType;
       this.showChart()
      });
    }
  }
  
  ngAfterViewInit() {
   //this.showChart()
  }
  showChart(){
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.wortkTyp,
        datasets: [
          {
            label: '# Type of Workout',
            data:this.workTypesMinutes,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
 
  
}
  
  

