import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FeedItem } from './feed.model';
import { LoadingIndicator } from 'src/app/common/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-feed-component',
  standalone: true,
  imports: [CommonModule, NgFor, LoadingIndicator],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  @Input() list: FeedItem[] = []
  @Input() loading: boolean = false
  @Input() loadError: string | null = null
}
