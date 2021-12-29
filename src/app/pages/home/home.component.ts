import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

closeResult = '';
  public showPreLoader = true;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
  }

  openForm(){
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
