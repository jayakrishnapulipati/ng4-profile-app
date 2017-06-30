import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./shared/profile.service";

@Component({
  selector: 'profile-comp',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  title = 'app';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getNames().subscribe(data => {
      console.log(data, 'jk');
    })
  }
}
