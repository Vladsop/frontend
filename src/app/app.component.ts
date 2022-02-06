import { Children } from './interface/children';
import { Node } from './interface/node';
import { NodeService } from './service/node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frozenlogic Assignment';
  private node: Children = {
    "id": 3,
    "name":"Portable Devices",
    "parentId": 1
  }
    
  

  constructor(private nodeService: NodeService) {}

  ngOnInit(): void {
    this.onGetNodes();
    //this.onGetNode();
  }

   onGetNodes(): void {
    this.nodeService.getNodes().subscribe({
        next: (response) => console.table(response),
        error: (error) => console.error(error),
        complete: () => console.info('Nodes are loaded') 
    })
  }

  onGetNode(): void {
    this.nodeService.getNode().subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is loaded') 
    })
  }

  onCreateNode(): void {
    this.nodeService.createNode(this.node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is created') 
    })
  }

  onUpdateNode(): void {
    this.nodeService.updateNode(this.node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is updated') 
    })
  }

  onPatchNode(): void {
    this.nodeService.patchNode(this.node).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is patched') 
    })
  }

  onDeleteNode(): void {
    this.nodeService.deleteNode(1).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('Node is deleted') 
    })
  }
}
