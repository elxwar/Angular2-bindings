import { Component } from '@angular/core';

@Component({
  selector: 'test-app-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.less']
})
export class TestAppAppComponent {
  delete: boolean = false;
  test: string = 'Starting value';
  boundValue = 1000;
}
