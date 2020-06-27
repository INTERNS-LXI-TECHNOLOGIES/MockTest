import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/services/models';
import { UserResourceService, AccountResourceService } from 'src/app/services/services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  constructor(private userResource:UserResourceService,
    private accResource:AccountResourceService) {}

  user:UserDTO;

  ngOnInit() {
    this.accResource.getAccountUsingGET().subscribe(data => {
      console.log(data);
      this.user=data;
    });
  }

}
