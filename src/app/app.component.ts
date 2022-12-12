import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component } from '@angular/core';
import { slideVertical } from './shared/animations/slide-vertical';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideVertical],
})
export class AppComponent implements AfterViewInit {

  constructor(private overlayContainer: OverlayContainer){
  }

  ngAfterViewInit(): void {
    this.overlayContainer.getContainerElement().classList.add('theme-light');
  }

  title = 'SalesManager';
  showSideNav = true;
}
