import {NgModule} from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {StoreModule} from '@ngrx/store';

import {TrainingComponent} from './training.component';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {StopTrainingComponent} from './current-training/stop-training/stop-training.component';
import {NewTrainingComponent} from './new-training/new-training.component';
import {PastTrainingsComponent} from './past-trainings/past-trainings.component';
import {SharedModule} from '../shared/shared.module';
import {TrainingRoutingModule} from './training-routing.module';
import {trainingReducer} from './training.reducer';

@NgModule({
  imports: [
    AngularFirestoreModule,
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  exports: [],
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    StopTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
  ],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {
}
