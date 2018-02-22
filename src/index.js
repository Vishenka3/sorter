class Sorter {
  constructor() {
    // your implementation
      this.array = [];
  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index];
  }

  get length() {
    // your implementation
      return this.array.length;
  }

  toArray() {
    // your implementation
      return this.array;
  }

  compare(a, b){
      return a-b;
  }

  sort(indices) {
    // your implementation

      let tempArray = [];

      for(let i=0;i<indices.length;i++) {
          let a = this.array.slice(indices[i], indices[i]+1);
          tempArray.push(a[0]);
      }
      tempArray.sort(this.compare);

      indices.sort((a,b) => a - b);
      for(let i=0;i<tempArray.length;i++) {
          this.array.splice(indices[i], 1, tempArray[i]);
      }
  }



  setComparator(compareFunction) {
    // your implementation
      this.compare = compareFunction;
  }




}

module.exports = Sorter;