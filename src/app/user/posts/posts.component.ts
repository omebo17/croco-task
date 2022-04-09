import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.subscriptions.push(
          this.configService.fetchClientPosts(Number(params['id'] || 0)).subscribe((posts: Post[]) => this.posts = posts)
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
