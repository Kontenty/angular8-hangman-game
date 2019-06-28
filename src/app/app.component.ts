import { Component, OnInit, ViewChild } from "@angular/core";
import { WORDS } from "./word-list";
import { LettersComponent } from "./letters/letters.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild(LettersComponent, { static: true }) letters: LettersComponent;

  title = "Play the Hangman Game";
  imgNumber: number;
  attempt: number;
  right: number = 0;
  miss: number = 0;
  win: boolean = false;
  loose: boolean = false;
  blockLetters: boolean = false;
  password: string;
  hiddenPassword: string;
  showLettersList: string;

  startGame = () => {
    this.password = WORDS[
      Math.floor(Math.random() * WORDS.length)
    ].toUpperCase();
    this.imgNumber = 1;
    this.attempt = 6;
    this.right = 0;
    this.miss = 0;
    this.win = false;
    this.loose = false;
    this.showLettersList = "";
    this.letters.createLetters();
    this.blockLetters = false;
  };

  handleCheck(letter) {
    letter.selected = true;
    for (let l of this.password) {
      if (letter.name === l) {
        this.showLettersList += l;
        this.right += 1;
        letter.status = "ok";
        if (this.right === this.password.length) {
          this.win = true;
          this.blockLetters = true;
        }
      }
    }
    // letter is incorrect
    if (this.password.search(letter.name) === -1) {
      this.attempt -= 1;
      this.miss += 1;
      this.imgNumber += 1;
      letter.status = "wrong";
      if (this.miss === 6) {
        this.loose = true;
        this.blockLetters = true;
      }
    }
  }

  ngOnInit() {
    this.startGame();
  }
}
