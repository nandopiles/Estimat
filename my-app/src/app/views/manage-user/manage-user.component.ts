import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFormComponent } from '../../components/user-form/user-form.component';


@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {
  public idUser: number = 0;

  public constructor(private route: ActivatedRoute) { }

  /**
   * Gets the id of the user that has to be modified.
   * 
   * Or you can not pass an id to insert a new User.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id'])
        this.idUser = params['id'];
    })
  }
}
