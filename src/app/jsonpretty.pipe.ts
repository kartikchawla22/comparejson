import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonpretty',
  pure : false
})
export class JsonprettyPipe implements PipeTransform {
transform(value: any): string { 

	return JSON.stringify(value, null , 1); }
  

}
