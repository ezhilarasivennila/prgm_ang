import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbychild',
  templateUrl: './hobbychild.component.html',
  styleUrls: ['./hobbychild.component.css']
})
export class HobbychildComponent implements OnInit {
@Input()
hobbystring:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
