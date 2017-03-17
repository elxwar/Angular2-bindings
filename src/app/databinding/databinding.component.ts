import { Component } from '@angular/core';

@Component({
  selector: 'ta-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.less']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 666;

  onClicked(value: string): void {
    alert(value);
  }
}
