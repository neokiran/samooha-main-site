import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

  public showPreLoader = true;
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_8vg570b', 'template_yj0lqig', e.target as HTMLFormElement, 'user_9YWkWRxYx2ypGfmYeTbQQ')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        setTimeout(() => {
          this.modalService.dismissAll();
        }, 5000);
      }, (error) => {
        console.log(error.text);
      });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
