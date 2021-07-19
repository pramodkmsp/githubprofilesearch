import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GitHubProfileSearch';
  dataDisplay: any;
  loading: boolean = false;
  searchQuery: string;
  githubProfileData: string;
  githubReposData: any[];
  constructor(private githubService: GithubService) {}
  ngOnInit() {}

  getUser() {
    this.loading = true;
    this.githubService.getUserProfile(this.searchQuery).subscribe(
      (data) => {
        this.githubProfileData = data;
      },
      (err) => {
        alert('Username is invalid');
      }
    );
    this.getRepos();
  }

  getRepos() {
    this.githubService.getGithubRepos(this.searchQuery).subscribe((data) => {
      this.githubReposData = data;
      this.loading = false;
    });
  }
}
