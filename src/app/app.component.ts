import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JsonInput1;
  JsonInput2;
  showjson = false;
  fullJsonObjectLeft = {};
  fullJsonObjectRight = {};
  rightJsonContains = {};
  leftJsonContains = {};
  error = false;
  errorblock = [];
  KeyColor = 'red';
  ValueColor = 'blue';
  ShowJson() {
    try {
      // JSON.parse(this.JsonInput1) && JSON.parse(this.JsonInput2);
      this.JsonInput1 = JSON.parse(this.JsonInput1);
      this.JsonInput2 = JSON.parse(this.JsonInput2);
      this.showjson = true;
      const equalityCheckOfObjects = _.isEqual(this.JsonInput1, this.JsonInput2);
      if (equalityCheckOfObjects === false) {
        this.error = true;
        this.recurse(this.JsonInput1, 'JsonObject');
        this.recurse2(this.JsonInput2, 'JsonObject');
        this.compareJson(this.fullJsonObjectLeft, this.fullJsonObjectRight);
        const checkRight = _.difference(Object.keys(this.fullJsonObjectLeft), Object.keys(this.fullJsonObjectRight));
        if (checkRight.length > 0) {
          this.errorblock.push('following keys are not present in right array' + checkRight);
        }
        const checkLeft = _.difference(Object.keys(this.fullJsonObjectRight), Object.keys(this.fullJsonObjectLeft));
        if (checkLeft.length > 0) {
          this.errorblock.push('following keys are not present in left array' + checkLeft);
        } else {
          for (const i of this.rightJsonContains) {
            const a = this.index(i);
            this.errorblock.push('Right Json Contains  ' + a + ':' + this.rightJsonContains[i]);
          }
          this.compareJson2(this.fullJsonObjectRight, this.fullJsonObjectLeft);
          // console.log("this is in the left", this.leftJsonContains)
          for (const i of this.rightJsonContains) {
            const a = this.index(i);
            this.errorblock.push('Left Json Contains  ' + a + ':' + this.leftJsonContains[i]);
          }
        }
      } else {
        alert('Both Json are the Same!!!');
        this.showjson = true;
      }
    } catch (e) {
      alert('Check Json Formats');
    }
  }
  index(key): any {
    let finalKey = '';
    const a = key.split('.');
    for (let i = 1; i < a.length; i++) {
      if (a[i] !== parseInt('', a[i])) {
        finalKey = finalKey + '.' + a[i];
      } else {
        finalKey = finalKey + '[' + a[i] + ']';
      }
    }
    finalKey = finalKey.substring(1, finalKey.length);
    return finalKey;
  }
  compareJson(obj1, obj2): any {
    for (const i in obj2) {
      if (!obj1.hasOwnProperty(i) || (obj2[i] !== obj1[i])) {
        this.rightJsonContains[i] = obj2[i];
      }
    }
  }

  compareJson2(obj1, obj2): any {
    for (const i in obj2) {
      if (!obj1.hasOwnProperty(i) || (obj2[i] !== obj1[i])) {
        this.leftJsonContains[i] = obj2[i];
      }
    }
  }
  recurse(obj, current) {
    for (const key of obj) {
      const value = obj[key];
      const newKey = (current ? current + '.' + key : key); // joined key with dot
      if (value && typeof value === 'object') {
        this.recurse(value, newKey); // it's a nested object, so do it again
      } else {
        this.fullJsonObjectLeft[newKey] = value; // it's not an object, so set the property
      }
    }
  }

  recurse2(obj, current) {
    for (const key of obj) {
      const value = obj[key];
      const newKey = (current ? current + '.' + key : key); // joined key with dot
      if (value && typeof value === 'object') {
        this.recurse2(value, newKey); // it's a nested object, so do it again
      } else {
        this.fullJsonObjectRight[newKey] = value; // it's not an object, so set the property
      }
    }
  }

  newInputs() {
    this.error = false;
    this.showjson = false;
    this.JsonInput1 = '';
    this.JsonInput2 = '';
    this.fullJsonObjectLeft = {};
    this.fullJsonObjectRight = {};
    this.rightJsonContains = {};
    this.leftJsonContains = {};
  }
}

