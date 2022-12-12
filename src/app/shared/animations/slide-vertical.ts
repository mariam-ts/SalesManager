import {animate, style, transition, trigger} from '@angular/animations';

export const slideVertical = trigger('slideVertical', [
  transition(':enter', [
    style({
      overflow: 'hidden',
      height: 0,
      opacity: 0,
    }),
    animate('200ms ease-in-out', style({
      height: '*',
      opacity: '*',
    })),
  ]),
  transition(':leave', [
    style({
      overflow: 'hidden',
      height: '*',
      opacity: '*',
    }),
    animate('200ms ease-in-out', style({
      height: 0,
      opacity: 0,
    })),
  ])
]);
