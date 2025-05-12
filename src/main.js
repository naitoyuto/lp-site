// カウンターのセットアップ（後述のJS版で定義）
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + JavaScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
document.getElementById('news-list').innerHTML = `
  <li class="border p-4 rounded shadow">
    <h3 class="font-bold text-lg">チケット販売開始！</h3>
    <p class="text-sm text-gray-500">2024年10月1日</p>
    <p>オンライン予約受付を開始しました。</p>
  </li>
`;


setupCounter(document.querySelector('#counter'))
