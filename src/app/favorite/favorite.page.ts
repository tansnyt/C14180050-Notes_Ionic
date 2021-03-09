import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalVarService } from "../global-var.service";
import { NoteService } from "../note.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  constructor(
    private router: Router,
    private varglobal: GlobalVarService
  ) { }

  notes: Array<NoteService> = [];

  ngOnInit() {
    let temp = this.varglobal.getNotes();
    for (let x of temp) {
      console.log(x.getJudul() + " " + x.getFav().toString());
      if (x.getFav() == true) {
        this.notes.push(x);
      }
    }
  }

  goToDetail(x) {
    this.router.navigate(["/detail/" + x]);
  }
}
