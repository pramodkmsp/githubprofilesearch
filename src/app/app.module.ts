import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubHeaderComponent } from './components/github-header/github-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent,
    GithubProfileComponent,
    GithubHeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
