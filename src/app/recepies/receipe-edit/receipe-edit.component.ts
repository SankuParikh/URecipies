import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css'],
})
export class ReceipeEditComponent implements OnInit {
  id!: number;
  editMode=false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.editMode=parms['id']!=null;
    });
  }
}
