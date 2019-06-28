import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-hangman-img",
  templateUrl: "./hangman-img.component.html",
  styleUrls: ["./hangman-img.component.scss"]
})
export class HangmanImgComponent implements OnChanges {
  @Input() imgNumber: number;

  imgSrc = `assets/img/hangman${this.imgNumber}.jpg`;

  setImgSrc() {
    this.imgSrc = `assets/img/hangman${this.imgNumber}.jpg`;
  }

  ngOnChanges() {
    this.setImgSrc();
  }
}
