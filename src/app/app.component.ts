import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
//  import google-libphonenumber = require('google-libphonenumber');
// https://www.npmjs.com/package/google-libphonenumber
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
declare var require: any;
// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Parse number with country code and keep raw input.
// const number = phoneUtil.parseAndKeepRawInput('202-456-1414', 'US');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) {}
  isOn = true;
  mobileInput = '';
  showStep2 = false;
  selectedFriend = 'null';
  url = 'https://8080red.pythonanywhere.com/send-api/';
  // Help Otw
  showHelpOtw = true;
  sendTime: any = 'null';
  private validInput: string;
  private messageBody: any;
  phoneNumberValid = true;
  progressPercent = '33%';
  private timeDivBy60: string;
  showSpinner = true;

  // Functions
  // Send SMS to API
  sendSms(smsUrl, phoneInput) {
    this.showSpinner = false;
    //  validatePhone(phoneInput);
    console.log(smsUrl);
    fetch(smsUrl)
      .then(response => response.json())
      .then(json => this.helpOtw(json));
      //  .then(json => console.log(json));
  }
  // Rotate to helpOtw page
  helpOtw(json) {
    console.log(json.message_id);
    this.messageBody = json.message_id;
    console.log(json);
    //  setTimeout('window.location.reload()', 8000);
    //  window.location.href = '/help-otw';
    this.showHelpOtw = false;

  }

  reload_page(seconds) {
    setTimeout('window.location.reload()', seconds);
  }

  function($scope) {
    $scope.name = 'John Doe';
  }

  validatePhone(mobileInput: string) {
    try {
      const number = phoneUtil.parseAndKeepRawInput(mobileInput, 'US');
      // console.log(phoneUtil.isValidNumber(number));
      this.phoneNumberValid = phoneUtil.isValidNumber(number);
    } catch (err) {
      // console.log(phoneUtil.isValidNumber(number));
      this.phoneNumberValid = false;
    }
  }

  friendlySendTime(sendTime: any) {
    if (sendTime === '0') {
      return 'now';
    } else {
      this.timeDivBy60 = (sendTime / 60).toString();
      return 'in ' + this.timeDivBy60 + ' minutes';
    }
  }
}



