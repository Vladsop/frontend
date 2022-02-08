import { Node } from './../../interface/node';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent {
  isParentVisible: boolean; isChildVisible: boolean; isAddNodeVisible: boolean; isAddChildNodeVisible: boolean; isEditNodeVisible: boolean;
  addparentvisibility; addchildvisibility; nodeformvisibility; childnodeformvisibility; updatenodeformvisibility;
  updateid: number; parentId: number;

  @Input() nodes: Node[];
  @Output() createNode: EventEmitter<string>;
  @Output() deleteNode: EventEmitter<number>;
  @Output() updateNode: EventEmitter<{id:number, name:string}>;
  @Output() createChildNode: EventEmitter<{parentId:number, name: string}>;
  @Output() deleteChildNode: EventEmitter<{id:number}>;
  constructor() { 
    this.nodes = {} as Node[];
    this.createNode = new EventEmitter<string>();
    this.deleteNode = new EventEmitter<number>();
    this.updateNode = new EventEmitter<{id:number, name:string}>();
    this.createChildNode = new EventEmitter<{parentId: number, name:string}>();
    this.deleteChildNode = new EventEmitter<{id:number}>();
    this.isParentVisible = this.isChildVisible = this.isAddNodeVisible = this.isAddChildNodeVisible=this.isEditNodeVisible = false;
    this.addparentvisibility = this.addchildvisibility = this.nodeformvisibility = this.childnodeformvisibility = this.updatenodeformvisibility = "hidden";
    this.updateid = this.parentId = 0;
  }

  toggleParentButtons() {
    this.isParentVisible = !this.isParentVisible;
    if(this.isParentVisible) {
      this.addparentvisibility = "visible";
    }
    if(!this.isParentVisible){
      this.addparentvisibility = "hidden";
    }
  }

  toggleChildButtons() {
    this.isChildVisible = !this.isChildVisible;
    if(this.isChildVisible) {
      this.addchildvisibility = "visible";
    }
    if(!this.isChildVisible){
      this.addchildvisibility = "hidden";
    }
  } 

  toggleAddNode() {
    this.isAddNodeVisible = !this.isAddNodeVisible;
    if(this.isAddNodeVisible) {
      this.nodeformvisibility = "visible";
    }
    if(!this.isAddNodeVisible){
      this.nodeformvisibility = "hidden";
    }
  }

  toggleAddChildNode(id:number) {
    this.isAddChildNodeVisible = !this.isAddChildNodeVisible;
    if(this.isAddChildNodeVisible) {
      this.childnodeformvisibility = "visible";
    }
    if(!this.isAddChildNodeVisible){
      this.childnodeformvisibility = "hidden";
    }
    this.parentId = id;
  }

  toggleEditNode(id:number) {
    this.isEditNodeVisible = !this.isEditNodeVisible;
    if(this.isEditNodeVisible) {
      this.updatenodeformvisibility = "visible";
    }
    if(!this.isEditNodeVisible){
      this.updatenodeformvisibility= "hidden";
    }
    this.updateid = id;
  }

  addParentNode(value: string): void {
    this.createNode.emit(value);
  }

  addChildNode(parentId:number, name: string): void {
    this.createChildNode.emit({parentId, name});
  }

  deleteChild(value: number): void {
    this.deleteNode.emit(value);
  }

  deleteParentNode(value: number): void {
    this.deleteNode.emit(value);
  }

  editParentNode(id:number, name:string): void { 
    this.updateNode.emit({id, name});
  }

 }
