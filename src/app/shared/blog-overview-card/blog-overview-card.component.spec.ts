import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Blog,
  BlogOverviewCardComponent,
} from './blog-overview-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ShareDirective } from '../share/share.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDirective } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BlogDetailPageComponent } from '../../features/blog-detail-page/blog-detail-page.component';
import { CommonModule } from '@angular/common';

describe('BlogOverviewCardComponent', () => {
  let component: BlogOverviewCardComponent;
  let fixture: ComponentFixture<BlogOverviewCardComponent>;
  let routerMock: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogOverviewCardComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'path', pathMatch: 'full' },
          { path: 'path', component: BlogDetailPageComponent },
          { path: '**', redirectTo: 'path', pathMatch: 'full' },
        ]),
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MockDirective(ShareDirective),
      ],
    });
    fixture = TestBed.createComponent(BlogOverviewCardComponent);
    component = fixture.componentInstance;
    routerMock = TestBed.inject(Router);
    routerMock.initialNavigation();
  });

  it('should create', () => {
    component.model = {
      id: 1,
      author: 'a author',
      likedByMe: false,
      title: 'A title',
    } as Blog;

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    // TODO: implement
  });

  it('should show the like button in black when likedByMe is false', () => {
    // TODO: implement
  });

  it('should show the like button in red when likedByMe is true', () => {
    // TODO: implement
  });

  it('should navigate to a certain blog when the image or header is clicked', () => {
    // TODO: implement
  });
});
