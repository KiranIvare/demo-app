import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.profileService.getProfile(id).subscribe((profile: any) => {
        this.profile = profile;
      });
    }
  }

  editProfile() {
    // Define logic to edit profile
  }
}
