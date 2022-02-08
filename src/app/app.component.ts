import { Children } from './interface/children';
import { ChildService } from './service/child.service';
import { Node } from './interface/node';
import { ParentNodeService } from './service/node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frozenlogic Assignment';
  receivednodes: any[] = [];
  node;
  child;
    
  constructor(private parentNodeService: ParentNodeService, private childNodeService: ChildService) {
    this.node = {} as Node;
    this.child = {} as Children;
  }

  ngOnInit(): void {
    this.onGetNodes();
  }

  addNode(addNewNode: string) {
    this.node.name = addNewNode.toUpperCase();
    this.onCreateNode();
    this.onGetNodes();
  }

  addChildNode(parentId:number, name: string) {
    this.onCreateChildNode({parentId, name});
  }

  deleteChildNode(id: number) {
    this.onDeleteChildNode(id);
  }

  deleteNode(id: number) {
    this.onDeleteNode(id);
  }

  updateNode(id: number, name:string){
    this.onUpdateNode({id, name})
  }

   onGetNodes(): void {
    this.parentNodeService.getNodes().subscribe({
        next: (response) => this.receivednodes = response,
        error: (error) => console.error(error),
        complete: () => console.info('Nodes are loaded') 
    })
  }

  onGetNode(id:number): void {
    this.parentNodeService.getNode(id).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is loaded') 
    })
  }

  onCreateNode(): void {
    this.parentNodeService.createNode(this.node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is created') 
    })
  }

  onCreateChildNode(children :Children): void {
    this.childNodeService.createNode(children).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.info('ChildNode is created')
    })
  }

  onUpdateNode(node: Node): void {
    this.parentNodeService.updateNode(node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is updated') 
    })
  }

  onPatchNode(node: Node): void {
    this.parentNodeService.patchNode(node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is patched') 
    })
  }

  onDeleteNode(id: number): void {
    this.parentNodeService.deleteNode(id).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is deleted') 
    })
  }

  onDeleteChildNode(id: number): void {
    this.childNodeService.deleteNode(id).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Child is deleted') 
    })
  }
}
