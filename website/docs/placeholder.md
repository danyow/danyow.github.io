---
id: placeholder
title: 占位符
slug: /
---

# v1

尝试预览, 为版本做准备
尝试预览, 为Lua@5.3做准备


<!-- truncate -->

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  var count = Random.getRandomInt(0, 100);
  var numbers = [];
  var listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  
  
  return (
    <div>
      <h1>Hello, world!</h1>
      <h1>{listItems}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```