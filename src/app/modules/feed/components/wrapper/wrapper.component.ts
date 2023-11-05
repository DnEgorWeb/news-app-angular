import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  providers: [AuthService],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

}
