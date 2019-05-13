import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';

import {Exercise} from './exercise.model';
import {UIService} from '../shared/ui.service';
import * as fromTraining from './training.reducer';
import * as UI from '../shared/actions/ui.actions';
import * as Training from './training.actions';

@Injectable()
export class TrainingService {
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromTraining.IState>
  ) {}

  fetchAvailableExercises() {
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((exercises: Exercise[]) => {
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.SetAvailableTrainings(exercises));
        console.log(this.store);
      }, (error) => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(
          `Fetching Exercises failed, please try again later.
                    Error log:
                    ${error.message}`,
          null,
          4000
        );
        this.store.dispatch(new Training.SetAvailableTrainings([]));
      }));
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.store.dispatch(new Training.SetFinishedTrainings(exercises));
      }));
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  startExercise(selectedID: string) {
    this.store.dispatch(new Training.StartActiveTraining(selectedID));
  }

  completeExercise(exercise: Exercise) {
    this.addDataToDatabase({
      ...exercise,
      date: new Date(),
      state: 'completed'
    });
    this.store.dispatch(new Training.StopActiveTraining());
  }

  cancelExercise(exercise: Exercise, progress: number) {
    this.addDataToDatabase({
      ...exercise,
      duration: exercise.duration * (progress / 100),
      calories: exercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.store.dispatch(new Training.StopActiveTraining());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }

}
