// 人機互動 hw1 1071532

function sumOfPop() {
    let sum = 0;
    for (const e in pop)
        sum += e;
    return sum;
}

var idx = [1, 2, 3, 5, 6, 7];
var pop = [600, 500, 300, 400, 200, 600];
var total_pop = sumOfPop();

// buildings area
var b1_area = document.getElementById('b1_area');
var b2_area = document.getElementById('b2_area');
var b3_area = document.getElementById('b3_area');
var b5_area = document.getElementById('b5_area');
var b6_area = document.getElementById('b6_area');
var b7_area = document.getElementById('b7_area');
var b_areas = [b1_area, b2_area, b3_area, b5_area, b6_area, b7_area];

// triangles
var tr1 = document.getElementById('triangle1');
var tr2 = document.getElementById('triangle2');
var tr3 = document.getElementById('triangle3');
var tr5 = document.getElementById('triangle5');
var tr6 = document.getElementById('triangle6');
var tr7 = document.getElementById('triangle7');
var triangles = [tr1, tr2, tr3, tr5, tr6, tr7];


function mouseOver(ele) {
    ele.style.borderTopColor = "dodgerBlue";
}

function mouseOut(ele) {
    ele.style.borderTopColor = "red";
}

function show(id) {
    window.open('page.html?id='+String(id))
}

for (let i = 0; i < b_areas.length; i++) {
    const e = b_areas[i];
    e.onmouseover = function () { mouseOver(triangles[i]); }
    e.onmouseout = function () { mouseOut(triangles[i]); }
    e.onclick = function () { show(idx[i]); }
}


/* 火柴人數 */
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p_arr = [p1, p2, p3, p5, p6, p7];

function clonePerson(id, i) {
    let containerID = 'containP'+String(id);
    let container = document.getElementById(containerID);

    let newImg = document.createElement('img');
    let att = document.createAttribute('class');
    newImg.src = '一個人.png';
    att.value = 'person_clone'+String(i);
    newImg.setAttributeNode(att);
    container.appendChild(newImg);
}

for (let i = 0; i < pop.length; i++) {
    const e = pop[i];
    if (e >= 200) clonePerson(idx[i], 1);
    if (e >= 500) clonePerson(idx[i], 2);
}
