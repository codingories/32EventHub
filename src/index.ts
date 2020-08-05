class EventHub {
  cache = {};
  // {
  //  '楚天都市报': [fn1, fn2, fn3],
  //  '羊城晚报' : [fn1, fn2, fn3]
  // }
  on(eventName, fn){
    // 把 fn 推进 this.cache[eventName] 数组
    // eventName订报纸,fn报纸放到邮箱
    // eventName = 楚天, fn
    if(this.cache[eventName] === undefined){
      this.cache[eventName] = []
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  emit(eventName){
    // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
    let array = this.cache[eventName];
    if(array=== undefined){
      array = []
    }
    array.forEach(fn => {
      fn();
    });
  }
}

export default EventHub;
