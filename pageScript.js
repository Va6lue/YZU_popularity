// 人機互動 hw1 1071532

function sumOfPop() {
    let sum = 0;
    for (let i = 0; i < pop.length; i++)
        sum += pop[i];
    return sum;
}

var word = ['0', '一', '二', '三', '四', '五', '六', '七'];
var pop = [0, 600, 500, 300, 0, 400, 200, 600];
var total_pop = sumOfPop();

// get params
var params = (new URL(document.location)).searchParams;
var id = parseInt(params.get('id'));

// 更改大標題
document.getElementById('caption').innerHTML = '元智'+word[id]+'館人口數';

// 顯示人口數
var str1 = document.getElementById('li1').innerHTML;
var str2 = document.getElementById('li2').innerHTML;
str1 += String(pop[id]);
str2 += String(total_pop);
document.getElementById('li1').innerHTML = str1;
document.getElementById('li2').innerHTML = str2;

// 顯示火柴人人口圖
var state  = document.getElementById('state');
var people = document.getElementById('peopleIMG');
if (pop[id] < 200) {
    state.innerHTML = '人少';
    people.src = '人少.png';
}
else if (pop[id] < 500) {
    state.innerHTML = '人多';
    people.src = '人多.png';
}
else {
    state.innerHTML = '人超多';
    people.src = '人超多.png';
}

// 顯示圖片
var targetPic = document.getElementById('pic'+String(id));
targetPic.style.visibility = 'visible';
