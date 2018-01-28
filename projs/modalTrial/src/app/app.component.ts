import { Component, OnInit } from '@angular/core';
import {BaseModalConfig} from 'angular-basic-modal/base-modal-config'
import { BasicModalService, BaseModal } from 'angular-basic-modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'app';
  bmc = new BaseModalConfig();
  ngOnInit():void{
this.bmc.title = "are you sure you want to click this?"
this.bmc.message = "this one?"
this.modal.show(this.bmc,BaseModal)
}
/**
 *
 */
  constructor(private modal:BasicModalService) {
  
  }
}
