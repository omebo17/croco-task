import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  public user?: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.subscriptions.push(
          this.configService.fetchClient(Number(params['id'] || 0)).subscribe((user: User) => this.user = user)
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
