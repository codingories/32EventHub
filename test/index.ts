import EventHub from '../src/index'

// 尝试运行有没有打印出来
const eventHub = new EventHub();
console.assert(eventHub instanceof Object, 'eventHub是一个对象');
// let x=2
// console.assert(1===x, '错了')

// on emit

eventHub.on("xxx", ()=>{
  console.log("被调用")
});
eventHub.emit("xxx");
