import EventHub from '../src/index'

// 尝试运行有没有打印出来
const eventHub = new EventHub();
console.assert(eventHub instanceof Object, 'eventHub是一个对象');

// on emit
let called = false;
eventHub.on("xxx", ()=>{
  called = true;
  console.log('called:'+ called);
});
eventHub.emit("xxx");
