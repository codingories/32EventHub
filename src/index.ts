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
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName, data?){
    // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
    (this.cache[eventName] || []).forEach(fn => fn(data));
  }
  off(eventName, fn){
    // 把 fn 从 this.cache[eventName] 数组删除
    let index = indexOf(this.cache[eventName], fn);
    if(index === -1)return;
    this.cache[eventName].splice(index,1)
  }
}

export default EventHub;

function indexOf(array, item) {
  if(array === undefined) return -1;
  let index = -1;
  for (let i = 0; i < array.length; i++){
    if(array[i] === item){
      index = i;
      break;
    }
  }
  return index;
}
