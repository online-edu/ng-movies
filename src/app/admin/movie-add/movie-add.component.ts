import { Component } from '@angular/core';

@Component({
  selector: 'movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent {

  canDeactivate() {
    return confirm("Are you sure want to leave unsaved?");
  }

}
