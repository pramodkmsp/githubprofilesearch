import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
})
export class GithubReposComponent implements OnInit, OnChanges {
  @Input() githubReposData: any[];
  totalSize = 0;
  totalWatchersCount = 0;
  constructor() {}

  ngOnChanges(change: SimpleChanges) {
    if (change) {
      let simpleObject = [];
      simpleObject = change.githubReposData.currentValue;
      for (let value of simpleObject) {
        this.totalSize += value.size;
        this.totalWatchersCount += value.watchers_count;
      }
    }
  }

  ngOnInit(): void {}
}
