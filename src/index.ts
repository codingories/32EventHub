class EventHub {
  cache = {};
  // {
  //  '楚天都市报': [fn1, fn2, fn3],
  //  '羊城晚报' : [fn1, fn2, fn3]
  // }
  on(eventName, fn){
    // eventName订报纸,fn报纸放到邮箱
    // eventName = 楚天, fn
    if(this.cache[eventName] === undefined){
      this.cache[eventName] = []
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  emit(eventName){}
}

export default EventHub;
