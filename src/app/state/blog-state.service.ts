import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { BlogDataService, CreateBlog } from '../core/blog-data.service';
import { Router } from '@angular/router';
import { LoadingService } from '../core/loading-service';

type BlogState = {
  error?: string;
};
@Injectable({
  providedIn: 'root',
})
export class BlogStateService {
  #state = new BehaviorSubject<BlogState>({ error: undefined });
  state$ = this.#state.asObservable();
  constructor(
    public blogDataService: BlogDataService,
    private router: Router,
    private loadingState: LoadingService
  ) {}
  async addBlog(entry: CreateBlog) {
    // Set state to loading
    this.#state.next({ error: undefined });
    this.loadingState.setLoadingState(true);

    try {
      // Add entry
      await lastValueFrom(this.blogDataService.addBlog(entry));
      // Move to overview
      this.router.navigate(['/overview']);
    } catch (error) {
      // On error return error message to component
      this.#state.next({
        error: (error as Error).message,
      });
    } finally {
      // Disable loading state in all cases
      this.loadingState.setLoadingState(false);
    }
  }
}
