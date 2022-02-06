import { Node } from './../../interface/node';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  @Input() nodes: Node[];
  constructor() { 
    this.nodes = {} as Node[];
  }

  ngOnInit(): void {
  }

}
