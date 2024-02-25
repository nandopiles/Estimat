import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { EstimatService } from '../../services/estimat.service';


@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {
  public idUser: number | null = null;

  public constructor(private route: ActivatedRoute, public _estimatService: EstimatService) { }



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
