import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private workoutsSubject = new BehaviorSubject<any[]>([]);
  workouts$ = this.workoutsSubject.asObservable();

  private workoutss:any = [];

  addWorkout(workout: any) {
    let flag = false;
    for(let i=0;i<this.workoutss.length;i++){
      if(workout.userName==this.workoutss[i].userName){
        flag=true;
        this.workoutss[i].count = ++this.workoutss[i].count;
        this.workoutss[i].workoutType.push({
          type: workout.workoutType,
           workoutMinutes: workout.workoutMinutes
        })
        let mint =0;
        for(let j=0;j<this.workoutss[i].workoutType.length;j++){
          mint = mint+this.workoutss[i].workoutType[j].workoutMinutes;
        }
        this.workoutss[i].workoutMinutes =mint
      }
    }
    if(!flag){
      this.workoutss.push({
        'userName': workout.userName,
        workoutType: [{
          type: workout.workoutType,
          workoutMinutes: workout.workoutMinutes
        }],
        workoutMinutes:  workout.workoutMinutes,
        count: 1
      });
    }
    this.workoutsSubject.next(this.workoutss);
    console.log("this.work",this.workoutss)
  }

  getWorkouts(): Observable<any[]> {
    return this.workouts$;
  }

  filterWorkoutsByType(type: string): Observable<any[]> {
    const filtered = this.workoutss.filter((workout: { workoutType: any  }) => {
     return this.checkTypeExist(workout.workoutType, type)
  });
  debugger
    return new BehaviorSubject<any[]>(filtered).asObservable();
  }

  checkTypeExist(workoutType:any,type:any){
    let found = false;
    for(let i=0;i<workoutType.length;i++){
      if(workoutType[i].type==type){
        found =true;
      }
    }

    return (found) ? true:false;
  }
  searchWorkoutsByName(name: string): Observable<any[]> {
    const filtered = this.workoutss.filter((workout: { userName: string | string[]; }) => workout.userName.includes(name));
    return new BehaviorSubject<any[]>(filtered).asObservable();
  }
}
