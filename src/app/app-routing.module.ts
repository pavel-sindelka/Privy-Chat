import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Error404Component} from "./error/error404/error404.component";
import {MessengerComponent} from "./messenger/messenger.component";
import {SenderComponent} from "./messenger/sender/sender.component";
import {LinkComponent} from "./messenger/link/link.component";
import {MessageComponent} from "./messenger/message/message.component";
import {MessageService} from "./messenger/message/message.service";

export const routes: Routes = [
  {
    path: '', component: MessengerComponent, children: [
    {path: '', component: SenderComponent},
    {path: 'link/:key', component: LinkComponent},
    {
      path: 'message/:key', component: MessageComponent, resolve: {
      message: MessageService
    }
    },
    {path: '404', component: Error404Component}
  ]
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MessageService
  ]
})
export class AppRoutingModule {
}
