import { NgModule } from "@angular/core";
import { TaskReducer } from "./task.reducers";
import { TaskEffect } from "./task.effects";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment.prod";
import { StoreModule } from "@ngrx/store";

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({ taskState: TaskReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([TaskEffect])
    ],
    exports: [],
    bootstrap: []
})
export class TaskStoreModule { }
