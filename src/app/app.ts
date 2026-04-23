import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Cards } from './components/cards/cards';
import { Lista } from "./pages/lista/lista";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [Header, Cards, Lista, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {


}

