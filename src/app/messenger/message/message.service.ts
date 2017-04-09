import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class MessageService implements Resolve<any> {
  constructor(private af: AngularFire) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const key = route.params.key;
    const messageRef = this.af.database.object(`/messages/${key}`);
    return new Promise(resolve => {
      messageRef.subscribe((message: FirebaseObjectObservable<any>) => {
        messageRef.remove();
        resolve(message['$value']);
      });
    })  ;
  }
}
