class EventHub {
  private cache: {[key: string]: Array<(data:unknown)=> void>} = {}; // 表示只在代码内部可以访问
  on(eventName: string, fn: (data: unknown)=>void){
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName : string, data?: unknown){
    // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
    (this.cache[eventName] || []).forEach(fn => fn(data));
  }
  off(eventName : string, fn: (data: unknown)=>void){
    // 把 fn 从 this.cache[eventName] 数组删除
    let index = indexOf(this.cache[eventName], fn);
    if(index === -1)return;
    this.cache[eventName].splice(index,1)
  }
}

export default EventHub;

/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 */
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
