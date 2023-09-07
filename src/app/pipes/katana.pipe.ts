import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'katana'
})

export class KatanaPipe implements PipeTransform {

  transform(array: unknown[], startIndex: number, count: number): unknown[] {
    let rsArray = []
    if(startIndex + count <= array.length)
    {
      for (let i = startIndex; i < startIndex + count; i++) {
        rsArray.push(array[i]);
      }
    }
    else rsArray.push("ArgumentException");
    
    return rsArray;
  }

}
