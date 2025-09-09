import {AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form =
    viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, text: string}>();

  ngOnInit() {
    console.log("NG ON INIT")
    console.log(this.form);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.form);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});
    this.form().nativeElement.reset();
  }

}
