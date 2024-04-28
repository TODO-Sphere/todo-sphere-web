import * as Realm from "realm-web";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RealmClient {
  private static app: Realm.App;

  getAppInstance() {
    if (!RealmClient.app) {
      RealmClient.app = new Realm.App({ id: environment.atlasAppId });

      const credentials = Realm.Credentials.anonymous();
      RealmClient.app
        .logIn(credentials)
        .then(() => {
          return RealmClient.app;
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }

    return RealmClient.app;
  }
}
