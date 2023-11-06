import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HeaderContainer } from '../header/header.container';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [RouterOutlet, HeaderContainer],
  providers: [AuthService],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

}
