const bar1 = document.querySelector('.fill1'),
val1  = 50;
const bar2 = document.querySelector('.fill2'),
val2 = 80;
const bar3 = document.querySelector('.fill3'),
val3 = 30;
const bar4 = document.querySelector('.fill4'),
val4 = 100;
const bar5 = document.querySelector('.fill5'),
val5 = 150;
window.onload=()=>{
        bar1.style.height=`calc(${val1}*15vh/100)`;
        document.querySelector('.per1').innerHTML = val1;
        bar2.style.height=`calc(${val2}*15vh/100)`;
        document.querySelector('.per2').innerHTML = val2;
        bar3.style.height=`calc(${val3}*15vh/100)`;
        document.querySelector('.per3').innerHTML = val3;
        bar4.style.height=`calc(${val4}*15vh/100)`;
        document.querySelector('.per4').innerHTML = val4;
        bar5.style.height=`calc(${val5}*15vh/100)`;
        document.querySelector('.per5').innerHTML = val5;
    }
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Incomes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});