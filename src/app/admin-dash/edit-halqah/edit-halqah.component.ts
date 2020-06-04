import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HalqahService } from '../../halqah.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-halqah',
  templateUrl: './edit-halqah.component.html',
  styleUrls: ['./edit-halqah.component.css']
})
export class EditHalqahComponent implements OnInit {

  editHalaqaatForm: FormGroup;
  id: any;
  update: any;
  constructor( private fb: FormBuilder, private data: HalqahService, private router: Router, private route: ActivatedRoute) {
    this.editHalaqaatForm = this.fb.group({
      state: ['', Validators.required],
      teacher: ['', Validators.required],
      book: ['', Validators.required],
      days: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log('ac', this.id);
    this.getHalqahbyId();
    // this.edithalaqahForm();
  }


  getHalqahbyId() {
    this.data.getSingleHalaqahByID(this.id).subscribe( result => {
      this.fillHalqahDetails(result);
      console.log(result);
    }, err => {
      console.log('Err occured here', err);
    });
  }

  fillHalqahDetails(result: any) {
    this.editHalaqaatForm = this.fb.group({
      state: result.state,
      teacher: result.teacher,
      book: result.book,
      days: result.days,
      time: result.time,
      venue: result.venue

    });
  }


  submitEdit() {
  this.data.editHalqah(this.id, this.editHalaqaatForm.value).subscribe( result => {
      console.log('this.update', result);
      this.router.navigate(['/', 'admin', 'dashboard']);
  }, err => {
    console.log('error updating', err);
  });
  }


}
