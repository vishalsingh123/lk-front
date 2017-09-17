import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

	transform(value: any, n: number): any {
		if(value){
    	return this.chunk(value, n);
		}
  }

	chunk(arr, n) {
		let newArr = [];
		let nestedArr = [];
		for (let i = 1; i <= arr.length; i++) {
				nestedArr.push(arr[i - 1]);
				if (i % n === 0) {
						newArr.push(nestedArr);
						nestedArr = [];
				}
		}
		if (nestedArr.length > 0) {
				newArr.push(nestedArr);
		}
		return newArr;
  }

}
