const traders = [
    {
      trader: {
        name: "김철수", 
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022, 
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2023,
      value: 1500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 2500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 500000,
    },
  ];
function makeLine() {
  console.log(`\n================================= \n`);
}

function sortArr(arr){
    arr.sort((a,b)=> a-b);
}
function removeDupli(arr){
    return newArr = [...new Set(arr)];
}

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const twentytwoTraders = traders
  .filter((t) => t.year === 2022)
  .map((t) => ({ name: t.trader.name, city: t.trader.city }));
console.log(twentytwoTraders);

makeLine();

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const workingArea = traders.map(ppl => ppl.trader.city);
console.log(removeDupli(workingArea));
makeLine();

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const DaeJeon = traders.filter(workers => workers.trader.city === `대전`).map(workers => ({name: workers.trader.name, city: workers.trader.city}));
console.log(DaeJeon);
makeLine();

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
let index =0;
const allTraders = traders.map(t => t.trader.name);
console.log(removeDupli(allTraders));
makeLine();

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
let sum = 0;
const seoulValue = traders.filter(t => t.trader.city === `서울`).forEach(sumOfSeoul => sum += sumOfSeoul.value);
console.log(sum);
makeLine();

const total = traders.filter(trs => trs.trader.city === `서울`).reduce((total, trs)=> {return total + trs.value ;},0);
console.log(`total is ${total}`);
/*

1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

*/

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

const DaeJeonValue = traders
                        .filter(t => t.trader.city === `대전` && t.year === 2023)
                        .reduce((accumlator, trs)=>  accumlator+ trs.value , 0);
console.log(DaeJeonValue);
makeLine();


// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const BusanTraders = traders
                        .filter(t => t.trader.city ===`부산`)
                        .map(ppl => ppl.trader.name);
console.log(BusanTraders);
makeLine();


// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

const MaxTrader = traders
                    .reduce((max, n) => max.value< n.value? n: max);

console.log(MaxTrader);
makeLine();
// const maxVaule = nums.reduce( (max, n) => max < n? n: max);
// .sort((a,b)=>a-b)[MaxTrader.length-1];


// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const EachValue = traders.reduce((count, cities) => {
    if(cities.trader.city in count){
        count[cities.trader.city] += cities.value;
    }else{
        count[cities.trader.city]= cities.value;
    }
    return count;
},{});


const totalByCity = traders.reduce((totalByCity, trs) => {
    const city = trs.trader.city;
    totalByCity[city] = (totalByCity[city] || 0) + trs.value;
    return totalByCity;
  }, {});

console.log('each:', EachValue);
makeLine();

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
const overSeven = traders.filter(t => t.value >= 700000).reduce((count, trs)=>{
    if(trs.year in count){
        //count.[trs.year] = [];
        (count[trs.year]).push(trs);
    }else{
        count[trs.year] = trs;
    }
    return count;
},{});
console.log(overSeven);
makeLine();

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
// const meanTransfer = traders.reduce((count, trs) => {
//     if(trs.trader.name in count){
//         count[trs.trader.name].
//     }else{
//         count[trs.trader.name];
//     }
//     return count;
// }, {});

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

