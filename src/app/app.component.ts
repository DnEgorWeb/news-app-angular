import { Component } from '@angular/core';
import { FeedContainer } from './modules/feed/feed/feed.container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedContainer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
