const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const months = ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
  'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'];
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('date').textContent = `${weekdays[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
}

function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const months = ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
    'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'];
  document.getElementById('calendar-title').textContent = `${months[month]} ${year}`;

  const calendarGrid = document.getElementById('calendar-grid');
  calendarGrid.innerHTML = `
        <div class="calendar-day">CN</div>
        <div class="calendar-day">T2</div>
        <div class="calendar-day">T3</div>
        <div class="calendar-day">T4</div>
        <div class="calendar-day">T5</div>
        <div class="calendar-day">T6</div>
        <div class="calendar-day">T7</div>
      `;

  for (let i = 0; i < firstDay; i++) {
    calendarGrid.innerHTML += '<div class="calendar-date empty"></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today && month === now.getMonth() && year === now.getFullYear();
    calendarGrid.innerHTML += `<div class="calendar-date ${isToday ? 'today' : ''}">${day}</div>`;
  }
}

function renderLunaCalendar(){
  const now = new Date();
  var solar = Solar.fromYmd(now.getFullYear(),now.getMonth()+1,now.getDate());
  var lunarDate = solar.getLunar();
  console.log(lunarDate._p);
  console.log(lunarDate._p.day);
  console.log(lunarDate._p.month);
  console.log(lunarDate._p.year);

  document.getElementById('lunar-date').textContent = (`Ngày ${lunarDate._p.day}, ${months[lunarDate._p.month - 1]},năm Ất Tỵ`)

  // console.log(lunarDate.toFullString());
  // console.log(lunarDate._p.day);
  // console.log(solar.toFullString());
  // console.log(solar.getLunar().toString());
}
const video = document.getElementById("myVideo");
const source = document.getElementById("videoSource");
function renderVideo(){
  let allFace = ["h0001.mp4","h0002.mp4","h0003.mp4","h0004.mp4","h0005.mp4","h0006.mp4","h0007.mp4","h0008.mp4","h0009.mp4","h0010.mp4","h0011.mp4","h0012.mp4","h0013.mp4","h0014.mp4","h0015.mp4","h0016.mp4","h0017.mp4","h0018.mp4","h0019.mp4","h0020.mp4","h0021.mp4","h0022.mp4","h0023.mp4","h0024.mp4","h0025.mp4","h0026.mp4","h0027.mp4","h0028.mp4","h0029.mp4","h0030.mp4","h0031.mp4","h0032.mp4","h0033.mp4","h0034.mp4","h0035.mp4","h0036.mp4","h0037.mp4","h0038.mp4","h0039.mp4","h0040.mp4","h0041.mp4","h0042.mp4","h0043.mp4","h0044.mp4","h0045.mp4","h0046.mp4","h0047.mp4","h0048.mp4","h0049.mp4","h0050.mp4","h0051.mp4","h0052.mp4","h0053.mp4","h0054.mp4","h0055.mp4","h0056.mp4","h0057.mp4","h0058.mp4","h0059.mp4","h0060.mp4","h0061.mp4","h0062.mp4","h0063.mp4","h0064.mp4","h0065.mp4","h0066.mp4","h0067.mp4","h0068.mp4","h0069.mp4","h0070.mp4","h0071.mp4","h0072.mp4","h0073.mp4","h0074.mp4","h0075.mp4","h0076.mp4","h0077.mp4","h0078.mp4","h0079.mp4","h0080.mp4","h0081.mp4","h0082.mp4","h0083.mp4","h0084.mp4","h0085.mp4","h0086.mp4","h0087.mp4","h0088.mp4","h0089.mp4","h0090.mp4","h0091.mp4","h0092.mp4","h0093.mp4","h0094.mp4","h0095.mp4","h0096.mp4","h0097.mp4","h0098.mp4","h0099.mp4","h0100.mp4","h0101.mp4","h0102.mp4","h0103.mp4","h0107.mp4","h0108.mp4","h0109.mp4","h0110.mp4","h0111.mp4","h0112.mp4","h0113.mp4","h0114.mp4","h0115.mp4","h0116.mp4","h0117.mp4","h0118.mp4","h0119.mp4","h0120.mp4","h0121.mp4","h0122.mp4","h0123.mp4","h0124.mp4","h0125.mp4","h0126.mp4","h0127.mp4","h0128.mp4","h0129.mp4","h0130.mp4","h0131.mp4","h0132.mp4","h0133.mp4","h0134.mp4","h0135.mp4","h0136.mp4","h0137.mp4","h0138.mp4","h0139.mp4","h0140.mp4","h0141.mp4","h0142.mp4","h0143.mp4","h0144.mp4","h0145.mp4","h0146.mp4","h0147.mp4","h0148.mp4","h0149.mp4","h0150.mp4","h0151.mp4","h0152.mp4","h0153.mp4","h0154.mp4","h0155.mp4","h0156.mp4","h0157.mp4","h0158.mp4","h0159.mp4","h0160.mp4","h0161.mp4","h0162.mp4","h0163.mp4","h0164.mp4","h0165.mp4","h0166.mp4","h0167.mp4","h0168.mp4","h0169.mp4","h0170.mp4","h0171.mp4","h0172.mp4","h0173.mp4","h0174.mp4","h0175.mp4","h0176.mp4","h0177.mp4","h0178.mp4","h0179.mp4","h0180.mp4","h0181.mp4","h0182.mp4","h0183.mp4","h0184.mp4","h0185.mp4","h0186.mp4","h0187.mp4","h0189.mp4","h0190.mp4","h0191.mp4","h0192.mp4","h0193.mp4","h0194.mp4","h0195.mp4","h0196.mp4","h0197.mp4","h0198.mp4","h0199.mp4","h0200.mp4","h0201.mp4","h0202.mp4","h0203.mp4","h0204.mp4","h0205.mp4","h0206.mp4","h0207.mp4","h0208.mp4","h0209.mp4","h0210.mp4","h0211.mp4","h0212.mp4","h0213.mp4","h0214.mp4","h0215.mp4","h0220.mp4","h0227.mp4","h0228.mp4","h0229.mp4","h0230.mp4","h0231.mp4","h0232.mp4","h0233.mp4","h0234.mp4","h0235.mp4","h0236.mp4","h0237.mp4","h0238.mp4","h0239.mp4","h0240.mp4","h0241.mp4","h0242.mp4","h0247.mp4","h0250.mp4","h0251.mp4","h0252.mp4","h0253.mp4","h0254.mp4","h0255.mp4","h0256.mp4","h0257.mp4","h0258.mp4","h0259.mp4","h0260.mp4","h0261.mp4","h0262.mp4","h0263.mp4","h0264.mp4","h0265.mp4","h0266.mp4","h0267.mp4","h0268.mp4","h0269.mp4","h0270.mp4","h0271.mp4","h0272.mp4","h0273.mp4","h0274.mp4","h0275.mp4","h0276.mp4","h0277.mp4","h0278.mp4","h0279.mp4","h0280.mp4","h0281.mp4","h0282.mp4","h0283.mp4","h0284.mp4","h0285.mp4","h0286.mp4","h0287.mp4","h0288.mp4","h0289.mp4","h0290.mp4","h0291.mp4","h0292.mp4","h0293.mp4","h0294.mp4","h0295.mp4","h0296.mp4","h0297.mp4","h0298.mp4","h0299.mp4","h0300.mp4","h0301.mp4","h0302.mp4","h0304.mp4","h0305.mp4","h0306.mp4","h0307.mp4","h0308.mp4","h0309.mp4","h0310.mp4","h0311.mp4","h0312.mp4","h0313.mp4","h0314.mp4","h0315.mp4","h0316.mp4","h0317.mp4","h0318.mp4"];
  const randomIndex = Math.floor(Math.random() * allFace.length);
  const src= `./assets/videos/${allFace[randomIndex]}`;
  source.src = src;     // Gắn video mới
  video.load();         // Nạp lại video mới
  video.play();
}
renderVideo()
setInterval(updateClock, 1000);
updateClock();
renderCalendar();
renderLunaCalendar()
video.addEventListener('ended', () => {
  renderVideo();
});


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && searchInput.value.trim()) {
    const query = encodeURIComponent(searchInput.value.trim());
    window.location.href = `https://www.google.com/search?q=${query}`;
  }
});
