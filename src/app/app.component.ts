import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  editorOptions = {theme: 'vs-dark', language: 'sql'};
  code: string= 'select \'hello world\' from dual;';
  title = 'electron-app';
}
