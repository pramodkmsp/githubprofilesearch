import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
})
export class GithubProfileComponent implements OnInit {
  @Input() githubProfileData: string;
  constructor() {}

  ngOnInit(): void {}
}
