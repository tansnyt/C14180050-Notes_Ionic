import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalVarService } from "../global-var.service";
import { NoteService } from "../note.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private varglobal: GlobalVarService) { }

  judul = "";
  isi = "";
  tanggal: Date;
  notes: Array<NoteService>;

  ngOnInit() {
    let temp = this.varglobal.getNotes();
    this.notes = temp;
  }

  inputNote() {
    this.varglobal.addNote(this.judul, this.isi, this.tanggal);
    console.log(this.judul + " " + this.isi + " " + this.tanggal);
    this.judul = "";
    this.isi = "";
    this.tanggal = null;
    alert("note added!!");
  }

  goToDetail(x) {
    this.router.navigate(["/detail/" + x]);
  }

  detailNote() {
    if (this.judul != "") this.router.navigate(["/detail/" + this.judul]);
    else alert("isi judul!");
  }

}
