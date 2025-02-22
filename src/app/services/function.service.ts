import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  private functionList = [
    {id: 1, name: 'Function 1', icon: 'icon1', link: 'url1'},
    {id: 2, name: 'Function 2', icon: 'icon2', link: 'url2'},
    {id: 3, name: 'Function 3', icon: 'icon3', link: 'url3'},
  ];
  constructor() { }

  getFunctionById(id: number) {
    return this.functionList;
  }
}
