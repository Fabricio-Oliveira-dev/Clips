import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  showAlert = false
  alertMsg = 'Please wait! We are logging you in.'
  alertColor = 'blue'
  inSubmission = false /*it will toggle the button's disable attribute */

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }


  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! We are logging you in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (e) {
      this.inSubmission = false /*enable the form again to the user try again if some error occur */
      this.alertMsg = 'An unexpected error occurred. Please try again later.'
      this.alertColor = 'red'
      return
    }
    this.alertMsg = 'Success! Your are now logged in.'
    this.alertColor = 'green'
  }

}
