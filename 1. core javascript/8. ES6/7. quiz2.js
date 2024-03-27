const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 9700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

function min(list, compare) {
    let small = list[0];
    for(let i =1; i<list.length; i++){
        if(small[compare] > list[i][compare]){
            small = list[i];
        }
    }
    return small;
}

console.log("최소 salary를 가진 사용자:", min(userList, "salary"));
console.log("최소 age를 가진 사용자:", min(userList, "age"));
