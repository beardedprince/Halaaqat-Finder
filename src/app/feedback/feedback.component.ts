import { Component, OnInit } from '@angular/core';
import { HalqahService } from '../halqah.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackList: object;
  constructor(private data: HalqahService) { }

  ngOnInit() {
    this.data.getFeedBack().subscribe( data => {
      this.feedbackList = data;
    });
  }

}
