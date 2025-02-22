import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunctionService } from '../services/function.service';

@Component({
  standalone: true,
  selector: 'app-ai-function-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './ai-function-page.component.html',
  styleUrl: './ai-function-page.component.scss'
})
export class AiFunctionPageComponent implements OnInit {
  
  private functionService = inject(FunctionService);

  @Output()
  public fnSwitchEvent = new EventEmitter();

  private _items: any[] = [];

  public get items(): any[] {
    return this._items;
  }

  public set items(value: any[]) {
    this._items = value;
  }
  ngOnInit(): void {
    this._items = this.functionService.getFunctionById(1);
  }

  public onSwitch(item: any) {
    // todo 如果未在激活状态，则激活，有子菜单则发射数据激活子菜单
    // todo 如果在激活状态，则取消激活，有子菜单则关闭子菜单
    this.fnSwitchEvent.emit(item);
  }
}
