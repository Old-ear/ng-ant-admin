import { Injectable } from '@angular/core';
import {ModalWrapService} from "@widget/base-modal";
import {NzSafeAny} from "ng-zorro-antd/core/types";
import {ModalOptions} from "ng-zorro-antd/modal";
import {Observable} from "rxjs";
import {DeptManageModalComponent} from "@widget/biz-widget/system/dept-manage-modal/dept-manage-modal.component";

@Injectable({
  providedIn: 'root'
})
export class DeptManageModalService {

  constructor(private modalWrapService: ModalWrapService) {}
  protected getContentComponent(): NzSafeAny {
    return DeptManageModalComponent;
  }

  public show(modalOptions: ModalOptions = {}, params?: object): Observable<NzSafeAny> {
    return this.modalWrapService.show(this.getContentComponent(), modalOptions, params)
  }
}
