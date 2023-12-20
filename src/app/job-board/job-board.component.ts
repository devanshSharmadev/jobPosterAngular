// src/app/job-board/job-board.component.ts
import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css'],
})
export class JobBoardComponent implements OnInit {
  jobPostings: any[] = [];
  jobPostingDisplay:any[]=[]
  currentIndex = 0;
  pageSize = 6;
  isLoading:boolean=false

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit(): void {
    this.loadJobPostings();
  }

  loadJobPostings(): void {
    this.isLoading=true
    this.hackerNewsService.getJobPostings().subscribe((postings) => {
      this.jobPostings = postings;
      this.loadMore();
    });
  }

  loadMore(): void {
    this.isLoading=true
    const endIndex = this.currentIndex + this.pageSize;
    for (let i = this.currentIndex; i < endIndex; i++) {
      const postId = this.jobPostings[i];
      if (postId) {
        this.hackerNewsService.getJobDetails(postId).subscribe((details) => {
          console.log(details)
          this.jobPostingDisplay.push(details);
        });
      }
    }
    this.currentIndex = endIndex;
    this.isLoading=false
  }
}
