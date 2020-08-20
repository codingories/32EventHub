import EventHub from '../src/index'

type TestCase = (message: string)=> void;

const test1:TestCase = message=>{
  const eventHub = new EventHub();
  console.assert(eventHub instanceof Object, 'eventHub是一个对象');
  console.log(message)
};

const test2:TestCase = message=>{
  const eventHub = new EventHub();
  // on emit
  let called = false;
  eventHub.on("xxx", (y)=>{
    called = true;
    console.assert(y === "今天天气不错");
  });
  eventHub.emit("xxx", "今天天气不错");
  setTimeout(()=>{
    console.assert(called === true)
    console.log(message)
  },1000)
};


const test3:TestCase = message=>{
  const eventHub = new EventHub();
  // 另一个完全不同的送报纸公司
  let called = false;
  const fn1 = () => {
    called = true;
  };
  eventHub.on("yyy", fn1);
  eventHub.off("yyy", fn1);
  eventHub.emit("yyy");
  setTimeout(()=>{
    console.assert(called === false);
    console.log(message)
  },1000);
};


test1("EventHub 可以创建对象");
test2(".on 了之后 .emit, 会触发 .on的函数");
test3(".off 有用");
