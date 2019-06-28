import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-hidden-password",
  templateUrl: "./hidden-password.component.html",
  styleUrls: ["./hidden-password.component.scss"]
})
export class HiddenPasswordComponent implements OnChanges {
  localPassword: Array<any>;
  private prevPassword: string = "";

  constructor() {}

  @Input() password;
  @Input() showLettersList;

  createHidden() {
    this.localPassword = [...this.password].map(l => {
      return { name: l, show: false };
    });
  }
  showLetter() {
    if (this.localPassword && this.showLettersList) {
      for (const item in this.localPassword) {
        const { name } = this.localPassword[item];
        this.localPassword[item].show = this.showLettersList.includes(name)
          ? true
          : false;
      }
    }
  }

  ngOnChanges(changes) {
    if (this.password !== this.prevPassword) {
      this.createHidden();
      this.prevPassword = this.password;
    }
    this.showLetter();
  }
}
