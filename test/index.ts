import EventHub from '../src/index'

// 尝试运行有没有打印出来
const eventHub = new EventHub();
console.assert(eventHub instanceof Object, 'eventHub是一个对象');

// on emit
let called = false;
eventHub.on("xxx", (y)=>{
  called = true;
  console.log('called:'+ called);
  console.log(y);
  console.assert(y === "今天天气不错");
});
eventHub.emit("xxx", "今天天气不错");
