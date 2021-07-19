import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.scss'],
})
export class GithubProfileCardComponent implements OnInit, OnChanges {
  @Input() githubProfileData: any;
  profileBio: any;
  constructor() {
    // this.profileBio = this.githubProfileData?.bio.split('.').shift();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profileBio = changes.githubProfileData.currentValue?.bio
      ?.split('.')
      .shift();
  }

  ngOnInit(): void {}
}
