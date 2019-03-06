import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  name;
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    this._http.post('https://usebasin.com/f/84bb7fc19410.json', this.contact.value)
    .subscribe(res => {
      if(res['success']) {
        $('#success').modal('toggle')
        this.name = this.contact.value.name;
        this.contact = new FormGroup({
          name: new FormControl('', Validators.required),
          email: new FormControl('', [ Validators.required, Validators.email ]),
          subject: new FormControl('', Validators.required),
          message: new FormControl('', Validators.required),
        });
  
      }
      else 
        $('#retry').modal('toggle')

    })
  }

}
