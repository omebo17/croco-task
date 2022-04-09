import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'home-buttons',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public data: User[] = [];
  private userSubscription?: Subscription;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.userSubscription = this.configService.fetchClients().subscribe((data: User[]) => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
