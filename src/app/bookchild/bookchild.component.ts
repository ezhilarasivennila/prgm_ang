import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bookchild',
  templateUrl: './bookchild.component.html',
  styleUrls: ['./bookchild.component.css']
})
export class BookchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output()
public newBookevent=new EventEmitter();
addbook(value:string)
{
this.newBookevent.emit(value);
}
}
