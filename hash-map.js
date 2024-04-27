class HashMap {
    constructor(size) {
      this.map = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.map[index];
      if (!bucket) {
        this.map[index] = [[key, value]];
      } else {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          sameKeyItem[1] = value;
        } else {
          bucket.push([key, value]);
        }
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.map[index];
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          return sameKeyItem[1];
        }
      }
      return undefined;
    }
  
    remove(key) {
      let index = this.hash(key);
      const bucket = this.map[index];
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
      }
    }
  
    display() {
      for (let i = 0; i < this.map.length; i++) {
        if (this.map[i]) {
          console.log(i, this.map[i]);
        }
      }
    }
  }
  
  const map = new HashMap(10);
  map.set("name", "Bruce");
  map.set("age", 25);
  map.display();
  console.log(map.get("name"));
  map.set("mane", "Clark");
  map.set("name", "Diana");
  console.log(map.get("mane"));
  map.remove("name");
  map.display();
  