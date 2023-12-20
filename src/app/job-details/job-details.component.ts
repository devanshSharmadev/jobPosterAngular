// src/app/job-details/job-details.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  @Input() job: any;
}
