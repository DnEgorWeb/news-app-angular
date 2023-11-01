import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { FeedItem } from './feed-item.model'
import { LoadingIndicator } from 'src/app/common/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-feed-item-component',
  standalone: true,
  imports: [CommonModule, NgFor, LoadingIndicator],
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent {
  @Input() feedItem: FeedItem | null = null
  @Input() loading: boolean = false
  @Input() loadError: string | null = null
}
