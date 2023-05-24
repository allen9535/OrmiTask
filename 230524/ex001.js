// 23년 05월 24일
// 아래의 코드를 콘솔창에 입력해보면 데이터를 가져온다
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => console.log(data));

// 아래의 코드를 완성시켜 
// 1. 전체 product의 갯수와
// 2. 전체 가격의 평균을 구하라
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        // 여기에만 코딩할 것
        console.log(data.length)
        console.log(data.map(v => v.price).reduce((a, c) => a + c, 0) / data.length)
    })