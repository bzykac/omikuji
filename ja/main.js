'use strict';

{
  const btn = document.getElementById('btn')

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '吉', '小吉', '末吉', '凶', '大凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 5%
    } else if (n < 0.1) {
      btn.textContent = '大凶'; // 5%
    } else if (n < 0.25) {
      btn.textContent = '中吉'; // 15%
    } else if (n < 0.4) {
      btn.textContent = '凶';   // 15%
    } else if (n < 0.6) {
      btn.textContent = '吉';   // 20%
    } else if (n < 0.8) {
      btn.textContent = '小吉'; // 20%
    } else {
      btn.textContent = '末吉'; // 20%
    }

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉'
    //     break;
    //   case 1:
    //     btn.textContent = '中吉'
    //     break;
    //   case 2:
    //     btn.textContent = '吉'
    //     break;
    //   case 3:
    //     btn.textContent = '小吉'
    //     break;
    //   case 4:
    //     btn.textContent = '末吉'
    //     break;
    //   case 5:
    //     btn.textContent = '凶'
    //     break;
    //   case 6:
    //     btn.textContent = '大凶'
    //     break;
    // }
  });
}

