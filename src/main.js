//JS直書き
document.getElementById('news-list2').innerHTML = `
  <li class="border p-4 rounded shadow">
    <h3 class="font-bold text-lg">テスト２</h3>
    <p class="text-sm text-gray-500">2025年5月13日</p>
    <p>テスト２テスト２テスト２</p>
  </li>

  <li class="border p-4 rounded shadow">
    <h3 class="font-bold text-lg">テスト１</h3>
    <p class="text-sm text-gray-500">2025年5月12日</p>
    <p>テスト１テスト１テスト１</p>
  </li>
`;



//MicroCMS連携

// //キーの確認
// console.log(import.meta.env.VITE_MICROCMS_SERVICE_ID);
// console.log(import.meta.env.VITE_MICROCMS_API_KEY);

const serviceId = import.meta.env.VITE_MICROCMS_SERVICE_ID;
const apikey = import.meta.env.VITE_MICROCMS_API_KEY;

const fetchNews = async () => {
  const res = await fetch(`https://${serviceId}.microcms.io/api/v1/news`, {
    headers: {
      "X-API-KEY": apikey,
    },
  });
  const data = await res.json();

  const list = document.getElementById("news-list");
  data.contents.forEach((item) => {
    const div = document.createElement("div");
    div.className = "p-4 border rounded shadow mb-4";
    div.innerHTML = `
      <h3 class="font-bold text-lg">${item.title}</h3>
      <p class="text-sm text-gray-500">${new Date(item.publishedAt).toLocaleDateString()}</p>
      <div class="mt-2">${item.body}</div>
    `;
    list.appendChild(div);
  });
};

fetchNews();

