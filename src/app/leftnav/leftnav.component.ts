import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements  OnInit{
  title:string="list of items!";
  constructor(){}
  ngOnInit(): void {
    
  }
}


