import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewPageComponent } from './blog-overview-page.component';
import {
  Blog,
  BlogOverviewCardComponent,
} from '../../shared/blog-overview-card/blog-overview-card.component';
import { MockComponent, ngMocks } from 'ng-mocks';

describe('BlogOverviewPageComponent', () => {
  let component: BlogOverviewPageComponent;
  let fixture: ComponentFixture<BlogOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogOverviewPageComponent,
        MockComponent(BlogOverviewCardComponent),
      ],
    });
    fixture = TestBed.createComponent(BlogOverviewPageComponent);
    component = fixture.componentInstance;
    component.blogs = [{ id: 1 }, { id: 2 }] as Blog[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke the likeBlog function when the likeBlog event handler is triggered', () => {
    // TODO: implement
  });

  it('should render a BlogOverviewCardComponent for each blog', () => {
    // TODO: implement
  });
});
