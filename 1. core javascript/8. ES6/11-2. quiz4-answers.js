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
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 1500000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 2500000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 500000,
    },
  ];
  function makeLine() {
    console.log(`\n================================= \n`);
  }

// 5.
const trsOver700kByYear =traders
    .filter(trs => trs.value >= 700000)
    .reduce((transactions, trs)=> {
        const yearString = trs.year.toString();
        if(!transactions[yearString]) transactions[yearString] = [trs];
        else transactions[yearString].push(trs);
        return transactions;
    }, {});

console.log(`Q5. `,JSON.stringify(trsOver700kByYear, null, 2));
makeLine();


// 6.
const trsDataByName = traders.reduce((averageList, trs)=>{
    const name = trs.trader.name;
    // 평균을 구하려면 각자의 거래액 총합과 거래 횟수를 구해야한다
    if(!averageList[name]){
        averageList[name] = {total: trs.value, count : 1}
    }else{
        averageList[name].total +=trs.value;
        averageList[name].count++;;
    }
    return averageList;
},{});

// 평균 구하기
for(const key in trsDataByName){
    trsDataByName[key].average = trsDataByName[key].total / trsDataByName[key].count;
}

console.log(`Q6. `,trsDataByName);
makeLine();

// 7.
const x = traders.reduce((acc, trs)=>{
    // 연도별 거래자 거래 횟수 집계
    const key = `${trs.year}_${trs.trader.name}`;

    if(!acc[key]){
        acc[key] = 1;
    }else{
        acc[key]++;
    }

    // 연도별 최대 거래 횟수 찾기
    const yearMaxKey = `max_${trs.year}`;
    if(!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count){
        acc[yearMaxKey] = {name: trs.trader.name, count: acc[key]}
    }
    return acc;
},{});

console.log(`q7: `, x);
makeLine();

// 8.
// 거래액 오름차로 정렬
// 정렬은 원본을 손상시킴 - 안전하게 하려면 복사 후 정렬
const sortedTraders = traders.slice().sort((a,b)=> a.value - b.value);
// console.log(`q8: `,sortedTraders);
// 중간값 거래 정보 찾기
// 배열의 요소 수가 홀수면 정확한 중간 인덱스값이 나오는데, 짝수면 중앙 두값의 평균을 중앙값으로 지정함.
let middleInfo;
const middleIndex = Math.floor(sortedTraders.length/2);
if(sortedTraders.length%2 ===1){
    middleInfo = sortedTraders[middleIndex];
}else{
    middleInfo = [sortedTraders[middleIndex], sortedTraders[middleIndex-1]];
}

console.log(middleInfo);

makeLine();


// 9. 
const trsCntByCity = traders.reduce((acc, trs)=>{
    const city = trs.trader.city
    if(!acc[city]){
        acc[city] =1;
    }else{
        acc[city]++;
    }
    return acc;
},{})

console.log(trsCntByCity);
makeLine();

// 10.
const sortedTransictions = traders.slice().sort((a,b)=>a.value-b.value);
console.log(sortedTransictions);