import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  constructor(private authService: AuthService) { }
  name: string = '';

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

}
