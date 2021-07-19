import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.scss'],
})
export class GithubProfileDataComponent implements OnInit {
  @Input() githubProfileData: any;
  constructor() {}

  ngOnInit(): void {}
}
