import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-letters",
  templateUrl: "./letters.component.html",
  styleUrls: ["./letters.component.scss"]
})
export class LettersComponent {
  @Input() blockLetters: boolean;
  @Output() selectedLetter = new EventEmitter<string>();

  alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  letters: string;
  createLetters() {
    this.letters = Array.prototype.map.call(this.alphabet, letter => {
      return { name: letter, selected: false, status: null };
    });
  }

  onSelect = letter => {
    this.selectedLetter.emit(letter);
  };
}
