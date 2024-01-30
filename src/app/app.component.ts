import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepwizardComponent } from './stepwizard/stepwizard.component';
import { WizardNode } from './stepwizard/stepwizard.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StepwizardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4step-wizard';

  activeNode!: WizardNode; // Assuming you have a property to store the activeNode

  public setActiveNode(eventVal: WizardNode)
  {
    this.activeNode = eventVal;
  }

  // Method to handle the prevClicked event
  onPrevClicked(): void {
    // Logic to handle previous button click
  }

  // Method to handle the nextClicked event
  onNextClicked(): void {
    // Logic to handle next button click
  }
}
