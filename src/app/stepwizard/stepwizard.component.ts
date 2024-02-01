import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepwizard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './stepwizard.component.html',
  styleUrl: './stepwizard.component.scss'
})
export class StepwizardComponent implements OnInit {

  public activeNodeIndex: number = 0;
  activeNode!: WizardNode;
  public nodes!: Array<WizardNode>;

  @Output() emitNode: EventEmitter<WizardNode> = new EventEmitter<WizardNode>();

  public ngOnInit(): void {

    this.nodes = [
      {
        idx: 0,
        image_url : 'https://img.icons8.com/?size=256&id=843&format=png',
        description: 'Folder ',
        isvisited : false
      },
      {
        idx: 1,
        image_url : 'https://img.icons8.com/?size=256&id=2025&format=png',
        description: 'Pen',
        isvisited: false
      },
      {
        idx: 2,
        image_url : 'https://img.icons8.com/?size=256&id=6552&format=png',
        description: 'Paper',
        isvisited: false
      },
      {
        idx: 3,
        image_url : 'https://img.icons8.com/?size=256&id=11697&format=png',
        description: 'Completed',
        isvisited: false,
      },
    ];
    this.__setActiveNode();
  }

  private __setActiveNode()
  {
    this.activeNode = this.nodes[this.activeNodeIndex];
    this.activeNode.isvisited = true;

    this.emitNode.emit(this.activeNode);
  }

  public selectNodeOnClick(idx: number)
  {
    if (idx > this.activeNodeIndex 
      && !this.nodes[idx].isvisited) return;

    this.activeNodeIndex = idx;
    this.__setActiveNode();
  }

  public onNext()
  {
    if (this.activeNodeIndex == (this.nodes.length - 1)) return;

    this.activeNodeIndex = (this.activeNodeIndex + 1) % this.nodes.length;
    this.__setActiveNode();
  }

  public onPrev()
  {
    if (this.activeNodeIndex == 0) return;

    this.activeNodeIndex = (this.activeNodeIndex - 1) % this.nodes.length;
    this.__setActiveNode();
  }

}

export interface WizardNode {
  idx: number,
  image_url: string,
  description: string,
  isvisited: boolean
}