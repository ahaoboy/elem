let a = [...Array(20)].map((v, k) => k);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
console.log(a);
let b = a.filter(f);
console.log(b);

function f(x) {
  console.log("f", x);
  return x % 2;
}

function* gen(n) {
  for (let i of a) {
    if (f(i)) {
      yield i;
      n--;
    }
    if (n === 0) return;
  }
}

// 迭代器使用next获取值并且判断是否完成迭代
//{ value: 1, done: false }
// let g = gen(3);
// console.log(g.next());

console.log("gen");
// 使用解构运算符,将迭代器展开为数组
let g = gen(3);
console.log([...g]);
