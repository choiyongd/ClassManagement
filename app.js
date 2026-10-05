/* ==========================================================================
   알짜창업 5학년 학급경영 - Web Application Engine
   ========================================================================== */

const STORAGE_KEY = 'ALZZA_CLASSROOM_DATA_V1';

// Initial Default Sample Data (19 Students & 5 Companies)
const DEFAULT_DATA = {
  activeMode: 'teacher', // 'teacher' or 'student'
  activeStudentId: 1,
  activeStudentTab: 'myCompany',
  activeTeacherTab: 'students',

  // 5 Companies
  companies: [
    {
      id: 1,
      name: "알짜테크",
      item: "자동 급식 배식 보조 디바이스",
      description: "학급 급식 수거 및 배식 정리를 돕는 스마트 디바이스 개발",
      stockPrice: 12500,
      previousPrice: 11500,
      stage: 3, // 1: 아이디어, 2: 시제품, 3: 학급 테스트, 4: 상용화
      stageName: "학급 테스트 🧪",
      members: [1, 2, 3, 4],
      discussions: [
        { id: 101, author: "김알짜", text: "3단계 급식 센서 모듈 테스트 성공적입니다! 수거 시간 40% 단축되었어요.", date: "2026-10-04" },
        { id: 102, author: "이창의", text: "다음 주 4단계 상용화 피칭 준비 모형 3D 디스플레이 완성 예정입니다.", date: "2026-10-05" }
      ]
    },
    {
      id: 2,
      name: "에코그린",
      item: "교실 쓰레기 자동 분류 & 리워드함",
      description: "재활용품 분리수거 시 학급 포인트를 자동 쌓아주는 친환경 함",
      stockPrice: 9800,
      previousPrice: 9500,
      stage: 2,
      stageName: "시제품 제작 🛠️",
      members: [5, 6, 7, 8],
      discussions: [
        { id: 103, author: "임생태", text: "페트병 라벨 제거 가이드 스티커 시제품 출력 중입니다.", date: "2026-10-03" }
      ]
    },
    {
      id: 3,
      name: "스마트클래스",
      item: "오늘의 숙제 & 준비물 알리미 봇",
      description: "알림장 정보와 주간 학습 일정을 자동으로 정리하여 제공하는 디스플레이",
      stockPrice: 15200,
      previousPrice: 13500,
      stage: 4,
      stageName: "상용화 및 고도화 ✨",
      members: [9, 10, 11, 12],
      discussions: [
        { id: 104, author: "장코딩", text: "오늘 2.0 업데이트 버전 출시했습니다! 칭찬 감사해요.", date: "2026-10-05" }
      ]
    },
    {
      id: 4,
      name: "안전드림",
      item: "복도 통행 안전 스마트 센서등",
      description: "우측통행 미준수 구간에 안전 경고등과 안내음을 송출하는 센서",
      stockPrice: 8400,
      previousPrice: 8550,
      stage: 2,
      stageName: "시제품 제작 🛠️",
      members: [13, 14, 15, 16],
      discussions: [
        { id: 105, author: "신발명", text: "센서 감도 조절 센서 2차 배치 시험 예정입니다.", date: "2026-10-04" }
      ]
    },
    {
      id: 5,
      name: "미디어플러스",
      item: "학급 뉴스 & 피칭 영상 편집 서비스",
      description: "학급 행사 및 기업 R&D 피칭용 1분 요약 숏폼 영상 제작 서비스",
      stockPrice: 11000,
      previousPrice: 10500,
      stage: 3,
      stageName: "학급 테스트 🧪",
      members: [17, 18, 19],
      discussions: [
        { id: 106, author: "안미디어", text: "이번 주 학급 경제 피칭 1분 영상 편집 진행 중입니다!", date: "2026-10-05" }
      ]
    }
  ],

  // 19 Students
  students: [
    { id: 1, name: "김알짜", companyId: 1, companyName: "알짜테크", role: "1인1역 총괄", level: 4, exp: 350, maxExp: 500, balance: 12500, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 2, name: "이창의", companyId: 1, companyName: "알짜테크", role: "ICT 도우미", level: 3, exp: 200, maxExp: 400, balance: 8400, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 3, name: "박도전", companyId: 1, companyName: "알짜테크", role: "우유 주번", level: 3, exp: 150, maxExp: 400, balance: 6200, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 4, name: "최혁신", companyId: 1, companyName: "알짜테크", role: "칠판 도우미", level: 2, exp: 280, maxExp: 300, balance: 4500, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 5, name: "정수학", companyId: 2, companyName: "에코그린", role: "학습지 분배원", level: 4, exp: 120, maxExp: 500, balance: 9300, tasksDone: { t1: true, t2: true, t3: false } },
    { id: 6, name: "강과학", companyId: 2, companyName: "에코그린", role: "에너지 절약반장", level: 3, exp: 310, maxExp: 400, balance: 7800, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 7, name: "임생태", companyId: 2, companyName: "에코그린", role: "분리수거 반장", level: 4, exp: 410, maxExp: 500, balance: 11200, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 8, name: "한환경", companyId: 2, companyName: "에코그린", role: "식물 가꾸기 도우미", level: 2, exp: 190, maxExp: 300, balance: 5100, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 9, name: "장코딩", companyId: 3, companyName: "스마트클래스", role: "컴퓨터 전원 담당", level: 5, exp: 150, maxExp: 600, balance: 18500, tasksDone: { t1: true, t2: true, t3: true } },
    { id: 10, name: "조미술", companyId: 3, companyName: "스마트클래스", role: "게시판 구성원", level: 3, exp: 220, maxExp: 400, balance: 8900, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 11, name: "오디자인", companyId: 3, companyName: "스마트클래스", role: "학급 미화 도우미", level: 4, exp: 80, maxExp: 500, balance: 10400, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 12, name: "서글쓰기", companyId: 3, companyName: "스마트클래스", role: "학급 도서관 관리원", level: 3, exp: 390, maxExp: 400, balance: 9100, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 13, name: "신발명", companyId: 4, companyName: "안전드림", role: "복도 우측통행 안찰관", level: 3, exp: 140, maxExp: 400, balance: 6700, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 14, name: "권보안", companyId: 4, companyName: "안전드림", role: "교문/문지기 주번", level: 2, exp: 250, maxExp: 300, balance: 4800, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 15, name: "황로봇", companyId: 4, companyName: "안전드림", role: "멀티미디어 보조", level: 3, exp: 50, maxExp: 400, balance: 7200, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 16, name: "송드론", companyId: 4, companyName: "안전드림", role: "체육용품 관리원", level: 2, exp: 180, maxExp: 300, balance: 3900, tasksDone: { t1: true, t2: false, t3: false } },
    { id: 17, name: "안미디어", companyId: 5, companyName: "미디어플러스", role: "학급 아나운서", level: 4, exp: 290, maxExp: 500, balance: 13400, tasksDone: { t1: true, t2: true, t3: false } },
    { id: 18, name: "윤체육", companyId: 5, companyName: "미디어플러스", role: "체육 줄세기 리더", level: 3, exp: 300, maxExp: 400, balance: 8100, tasksDone: { t1: false, t2: false, t3: false } },
    { id: 19, name: "유기획", companyId: 5, companyName: "미디어플러스", role: "학급 이벤트 기획자", level: 4, exp: 470, maxExp: 500, balance: 11900, tasksDone: { t1: true, t2: false, t3: false } }
  ],

  // Store Items
  storeItems: [
    { id: 1, name: "자리 지정 선택권", price: 5000, icon: "🪑", desc: "원하는 자리를 1주일간 우선 선택할 수 있는 쿠폰" },
    { id: 2, name: "1회 과제 면제권", price: 10000, icon: "📝", desc: "일일 과제 1회를 공식 면제받는 슈퍼 쿠폰" },
    { id: 3, name: "5분 자유시간 쿠폰", price: 3000, icon: "⏰", desc: "쉬는 시간 5분을 추가로 확보하는 쿠폰" },
    { id: 4, name: "선생님 1:1 찬스권", price: 2000, icon: "🙋‍♂️", desc: "어려운 문제나 상담 시 교사의 1:1 도움권" },
    { id: 5, name: "학급 음악 DJ 선택권", price: 4000, icon: "🎵", desc: "청소 및 점심시간 학급 배경음악 1곡 신청권" },
    { id: 6, name: "짝꿍 변경 요청권", price: 8000, icon: "🤝", desc: "주간 짝꿍 배치 시 희망 짝꿍을 신청할 수 있는 권한" }
  ],

  // Purchases (Requests)
  purchases: [
    { id: 1, studentId: 1, studentName: "김알짜", itemId: 3, itemName: "5분 자유시간 쿠폰", price: 3000, status: "completed", date: "2026-10-04" },
    { id: 2, studentId: 9, studentName: "장코딩", itemId: 1, itemName: "자리 지정 선택권", price: 5000, status: "pending", date: "2026-10-05" }
  ],

  // Pitches (Reports)
  pitches: [
    {
      id: 1,
      companyId: 1,
      companyName: "알짜테크",
      title: "급식 수거 디바이스 3단계 학급 적용 결과 보고",
      content: "1주일간 학급 잔반 수거 및 식판 정리 디바이스를 적용한 결과, 배식 정리 시간이 평균 12분에서 7분으로 40% 단축되었습니다. 학생 만족도 설문조사 결과 92% 긍정 답함.",
      stage: 3,
      status: "approved",
      teacherFeedback: "실제 데이터를 측정하고 그래프로 제시한 점이 훌륭합니다. 주가 1,000원 상향 조정 및 기업 보상금 5,000원 부여합니다!",
      stockDelta: 1000,
      date: "2026-10-04"
    },
    {
      id: 2,
      companyId: 3,
      companyName: "스마트클래스",
      title: "숙제 알리미 봇 2.0 상용화 및 알림 기능 추가 피칭",
      content: "기존 1.0 알리미 봇에 내일 준비물 자동 체크리스트와 교시별 교과서 알림 기능을 추가하였습니다. 상용화 승인을 요청합니다.",
      stage: 4,
      status: "pending",
      teacherFeedback: "",
      stockDelta: 0,
      date: "2026-10-05"
    },
    {
      id: 3,
      companyId: 2,
      companyName: "에코그린",
      title: "분리수거 자동 포인트함 2단계 시제품 제작안",
      content: "3D 프린터 및 우드락을 활용하여 페트병과 종이류를 분리 수거할 수 있는 모형 시제품을 완성했습니다.",
      stage: 2,
      status: "pending",
      teacherFeedback: "",
      stockDelta: 0,
      date: "2026-10-05"
    }
  ],

  // Logs
  logs: [
    { id: 1, type: "stock", text: "[알짜테크] 피칭 승인으로 주가 1,000원 상승 (₩11,500 ➔ ₩12,500)", date: "2026-10-04 14:20" },
    { id: 2, type: "currency", text: "[김알짜] 오늘 할 일 완료 보상 +1,500원 지급", date: "2026-10-05 09:10" }
  ]
};

// Global App State
let state = {};

// Initialize App
function initApp() {
  loadState();
  renderHeaderTicker();
  renderApp();
}

// State Management
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved state, using default:", e);
      state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetAllData() {
  if (confirm("정말 모든 데이터를 초기 기초 샘플 데이터로 리셋하시겠습니까?")) {
    state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveState();
    showToast("모든 데이터가 성공적으로 초기화되었습니다! 🔄", "info");
    renderHeaderTicker();
    renderApp();
  }
}

// Mode & Student Switchers
function switchMode(mode) {
  state.activeMode = mode;
  saveState();
  renderHeaderTicker();
  renderApp();
}

function selectStudent(studentId) {
  state.activeStudentId = parseInt(studentId, 10);
  saveState();
  renderApp();
}

function selectStudentTab(tab) {
  state.activeStudentTab = tab;
  saveState();
  renderApp();
}

function selectTeacherTab(tab) {
  state.activeTeacherTab = tab;
  saveState();
  renderApp();
}

// To-Do Task Handler
function toggleStudentTask(taskId) {
  const student = state.students.find(s => s.id === state.activeStudentId);
  if (!student) return;

  if (!student.tasksDone) student.tasksDone = {};
  const isNowDone = !student.tasksDone[taskId];
  student.tasksDone[taskId] = isNowDone;

  // Reward parameters
  let rewExp = 0;
  let rewCurrency = 0;
  if (taskId === 't1') { rewExp = 50; rewCurrency = 500; }
  else if (taskId === 't2') { rewExp = 100; rewCurrency = 1000; }
  else if (taskId === 't3') { rewExp = 150; rewCurrency = 1500; }

  if (isNowDone) {
    student.balance += rewCurrency;
    addExp(student, rewExp);
    addLog('currency', `[${student.name}] 오늘 할 일 완료 보상으로 +${rewCurrency.toLocaleString()}원 & +${rewExp}EXP 획득!`);
    showToast(`미션 완수! 🎉 +${rewCurrency.toLocaleString()}원 / +${rewExp}EXP`, 'success');
  } else {
    student.balance = Math.max(0, student.balance - rewCurrency);
    student.exp = Math.max(0, student.exp - rewExp);
  }

  saveState();
  renderApp();
}

function addExp(student, expAmount) {
  student.exp += expAmount;
  if (student.exp >= student.maxExp) {
    student.level += 1;
    student.exp -= student.maxExp;
    student.maxExp = Math.floor(student.maxExp * 1.25);
    showToast(`🎉 레벨업! [${student.name}]님이 Lv.${student.level} 달성!`, 'success');
  }
}

// Log Recorder Helper
function addLog(type, text) {
  const now = new Date();
  const timeStr = `${now.getMonth()+1}/${now.getDate()} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  state.logs.unshift({
    id: Date.now(),
    type,
    text,
    date: timeStr
  });
}

// Render Functions
function renderHeaderTicker() {
  const tickerEl = document.getElementById('headerTicker');
  const btnTeacher = document.getElementById('btnTeacherMode');
  const btnStudent = document.getElementById('btnStudentMode');
  const studentSelectWrapper = document.getElementById('studentSelectorContainer');
  const studentSelect = document.getElementById('studentSelect');

  // Mode Buttons Active Class
  if (state.activeMode === 'teacher') {
    btnTeacher.classList.add('active');
    btnStudent.classList.remove('active');
    studentSelectWrapper.classList.add('hidden');
  } else {
    btnStudent.classList.add('active');
    btnTeacher.classList.remove('active');
    studentSelectWrapper.classList.remove('hidden');

    // Populate student selector
    studentSelect.innerHTML = state.students.map(s => `
      <option value="${s.id}" ${s.id === state.activeStudentId ? 'selected' : ''}>
        ${s.name} (${s.companyName})
      </option>
    `).join('');
  }

  // Ticker HTML
  tickerEl.innerHTML = state.companies.map(c => {
    const diff = c.stockPrice - c.previousPrice;
    const rate = ((diff / c.previousPrice) * 100).toFixed(1);
    let classRate = 'same';
    let symbol = '➖';
    if (diff > 0) { classRate = 'up'; symbol = '🔺'; }
    else if (diff < 0) { classRate = 'down'; symbol = '🔻'; }

    return `
      <div class="ticker-item">
        <span class="ticker-name">${c.name}</span>
        <span class="ticker-price">₩${c.stockPrice.toLocaleString()}</span>
        <span class="ticker-change ${classRate}">${symbol}${rate}%</span>
      </div>
    `;
  }).join('');
}

function renderApp() {
  const mainEl = document.getElementById('mainContent');
  renderHeaderTicker();

  const primaryContent = (state.activeMode === 'teacher') 
    ? renderTeacherDashboard() 
    : renderStudentDashboard();

  const stockSidebar = renderStockMarketSidebar();

  mainEl.innerHTML = `
    <div class="app-layout-grid">
      <div class="layout-primary-col">
        ${primaryContent}
      </div>
      <aside class="layout-stock-sidebar">
        ${stockSidebar}
      </aside>
    </div>
  `;
}

function renderStockMarketSidebar() {
  const sortedCompanies = [...state.companies].sort((a, b) => b.stockPrice - a.stockPrice);
  const totalMarketCap = state.companies.reduce((acc, c) => acc + c.stockPrice, 0);
  const topCompany = sortedCompanies[0];

  return `
    <div class="stock-sidebar-card">
      <div class="sidebar-header">
        <div class="sidebar-title">
          <span>📈</span> 실시간 학급 주식시세
        </div>
        <span class="user-role-tag" style="background:rgba(16,185,129,0.2); color:var(--accent-emerald); padding:0.15rem 0.5rem; border-radius:var(--radius-full);">LIVE</span>
      </div>

      <div class="market-summary-boxes">
        <div class="market-summary-box">
          <span class="lbl">학급 총 시가총액</span>
          <span class="val">₩${totalMarketCap.toLocaleString()}</span>
        </div>
        <div class="market-summary-box">
          <span class="lbl">👑 주가 1위 기업</span>
          <span class="val" style="font-size:0.85rem; color:var(--accent-amber);">${topCompany ? topCompany.name : '-'}</span>
        </div>
      </div>

      <div class="sidebar-stock-list">
        ${sortedCompanies.map((c, idx) => {
          const diff = c.stockPrice - c.previousPrice;
          const rate = ((diff / c.previousPrice) * 100).toFixed(1);
          const rateClass = diff > 0 ? 'up' : (diff < 0 ? 'down' : 'same');
          const rateSymbol = diff > 0 ? '🔺' : (diff < 0 ? '🔻' : '➖');

          return `
            <div class="sidebar-stock-item rank-${idx + 1}" onclick="openCompanyDetailModal(${c.id})">
              <div class="stock-item-top">
                <div class="stock-item-info">
                  <span class="rank-badge">${idx + 1}</span>
                  <div>
                    <div class="company-name-tag">${c.name}</div>
                    <div style="font-size:0.75rem; color:var(--accent-cyan);">${c.item}</div>
                  </div>
                </div>
                <div class="stock-price-tag">
                  <div class="stock-price-num">₩${c.stockPrice.toLocaleString()}</div>
                  <div class="stock-rate ${rateClass}">${rateSymbol} ${rate}%</div>
                </div>
              </div>

              <div class="stock-item-bottom">
                <span class="mini-stage-tag">${c.stageName}</span>
                <span style="font-size:0.75rem; color:var(--accent-indigo); font-weight:700;">상세보기 🔍</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function openCompanyDetailModal(companyId) {
  const company = state.companies.find(c => c.id === companyId);
  if (!company) return;

  const diff = company.stockPrice - company.previousPrice;
  const rate = ((diff / company.previousPrice) * 100).toFixed(1);
  const rateClass = diff > 0 ? 'up' : (diff < 0 ? 'down' : 'same');
  const rateSymbol = diff > 0 ? '🔺' : (diff < 0 ? '🔻' : '➖');

  const team = state.students.filter(s => company.members.includes(s.id));
  const companyPitches = state.pitches.filter(p => p.companyId === company.id);

  openModal(`
    <div style="border-bottom:1px solid var(--border-color); padding-bottom:0.75rem; margin-bottom:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <h2 style="color:var(--accent-cyan); font-size:1.4rem;">🏢 ${company.name}</h2>
          <p style="font-size:0.9rem; font-weight:700; color:#fff;">💡 대표 아이템: ${company.item}</p>
        </div>
        <div style="text-align:right;">
          <div style="font-size:1.3rem; font-weight:800; font-family:var(--font-mono); color:var(--accent-amber);">₩${company.stockPrice.toLocaleString()}</div>
          <span class="stock-rate ${rateClass}">${rateSymbol} ${rate}%</span>
        </div>
      </div>
    </div>

    <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:1rem;">${company.description}</p>

    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; color:var(--accent-indigo); margin-bottom:0.4rem;">🎯 아이템 개발 & 문제 해결 단계</h4>
      <div class="stage-stepper">
        <div class="stepper-step ${company.stage >= 1 ? (company.stage === 1 ? 'active' : 'completed') : ''}">1. 아이디어</div>
        <div class="stepper-step ${company.stage >= 2 ? (company.stage === 2 ? 'active' : 'completed') : ''}">2. 시제품</div>
        <div class="stepper-step ${company.stage >= 3 ? (company.stage === 3 ? 'active' : 'completed') : ''}">3. 테스트</div>
        <div class="stepper-step ${company.stage >= 4 ? (company.stage === 4 ? 'active' : 'completed') : ''}">4. 상용화</div>
      </div>
    </div>

    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; color:var(--accent-cyan); margin-bottom:0.4rem;">👥 소속 창업 팀원 (${team.length}명)</h4>
      <div class="company-team-list">
        ${team.map(t => `<span class="team-chip">${t.name} (${t.role})</span>`).join('')}
      </div>
    </div>

    <div>
      <h4 style="font-size:0.85rem; color:var(--accent-amber); margin-bottom:0.4rem;">📢 제출된 개발 피칭 이력 (${companyPitches.length}건)</h4>
      <div style="display:flex; flex-direction:column; gap:0.5rem; max-height:160px; overflow-y:auto;">
        ${companyPitches.length > 0 ? companyPitches.map(p => `
          <div style="background:rgba(15,23,42,0.6); padding:0.5rem 0.75rem; border-radius:var(--radius-md); font-size:0.8rem;">
            <strong style="color:#fff;">${p.title}</strong>
            <div style="color:var(--text-secondary); margin-top:0.15rem;">${p.content}</div>
          </div>
        `).join('') : '<p class="brand-subtitle">제출된 피칭 이력이 없습니다.</p>'}
      </div>
    </div>

    ${state.activeMode === 'teacher' ? `
      <div style="margin-top:1.25rem; text-align:right;">
        <button class="btn-primary btn-sm" onclick="closeModal(); openStockEditModal(${company.id});">
          📈 주가 수정하기
        </button>
      </div>
    ` : ''}
  `);
}

/* ==========================================================================
   STUDENT DASHBOARD RENDERER
   ========================================================================== */
function renderStudentDashboard() {
  const currentStudent = state.students.find(s => s.id === state.activeStudentId) || state.students[0];
  const company = state.companies.find(c => c.id === currentStudent.companyId);

  const diff = company ? company.stockPrice - company.previousPrice : 0;
  const rate = company ? ((diff / company.previousPrice) * 100).toFixed(1) : "0.0";
  const rateClass = diff > 0 ? 'up' : (diff < 0 ? 'down' : 'same');
  const rateSymbol = diff > 0 ? '🔺' : (diff < 0 ? '🔻' : '➖');

  const expPercent = Math.min(100, Math.round((currentStudent.exp / currentStudent.maxExp) * 100));

  return `
    <!-- Top Cards Grid -->
    <div class="dashboard-top-grid">
      <!-- Card 1: My Profile & Level -->
      <div class="glass-card highlight-purple">
        <div class="profile-card-header">
          <div class="user-badge">
            <div class="avatar-circle">🎓</div>
            <div class="user-info">
              <h2>${currentStudent.name} <span class="user-role-tag">(${currentStudent.role})</span></h2>
              <p class="brand-subtitle">소속: <strong>${currentStudent.companyName}</strong></p>
            </div>
          </div>
          <div class="level-badge">Lv.${currentStudent.level}</div>
        </div>

        <div class="exp-progress-container">
          <div class="exp-label-row">
            <span>경험치 (EXP)</span>
            <span>${currentStudent.exp} / ${currentStudent.maxExp} (${expPercent}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${expPercent}%"></div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-box">
            <span class="label">내 잔액 (학급 화폐)</span>
            <span class="value currency">₩${currentStudent.balance.toLocaleString()}</span>
          </div>
          <div class="stat-box">
            <span class="label">우리 회사 주가</span>
            <span class="value stock">₩${company ? company.stockPrice.toLocaleString() : 0}</span>
          </div>
        </div>
      </div>

      <!-- Card 2: Company Item & R&D Stage -->
      <div class="glass-card highlight-cyan">
        <div class="profile-card-header">
          <div>
            <h2 style="color:var(--accent-cyan); font-size:1.1rem;">🏢 ${company ? company.name : '미소속'}</h2>
            <p style="font-size:0.85rem; font-weight:700; color:#fff; margin-top:0.2rem;">
              아이템: ${company ? company.item : '아이템 등록 전'}
            </p>
          </div>
          <span class="stock-rate ${rateClass}">${rateSymbol} ${rate}%</span>
        </div>

        <div style="margin-top:0.5rem;">
          <p class="brand-subtitle" style="margin-bottom:0.4rem;">아이템 개발 & 문제해결 단계:</p>
          <div class="stage-stepper">
            <div class="stepper-step ${company && company.stage >= 1 ? (company.stage === 1 ? 'active' : 'completed') : ''}">1. 아이디어 💡</div>
            <div class="stepper-step ${company && company.stage >= 2 ? (company.stage === 2 ? 'active' : 'completed') : ''}">2. 시제품 🛠️</div>
            <div class="stepper-step ${company && company.stage >= 3 ? (company.stage === 3 ? 'active' : 'completed') : ''}">3. 테스트 🧪</div>
            <div class="stepper-step ${company && company.stage >= 4 ? (company.stage === 4 ? 'active' : 'completed') : ''}">4. 상용화 ✨</div>
          </div>
        </div>
      </div>

      <!-- Card 3: Today's To-Do List -->
      <div class="glass-card highlight-emerald">
        <h2 style="font-size:1.1rem; color:var(--accent-emerald); margin-bottom:0.75rem;">📋 오늘 할 일 (Daily To-Do)</h2>
        <div class="todo-list">
          <div class="todo-item ${currentStudent.tasksDone && currentStudent.tasksDone.t1 ? 'completed' : ''}">
            <div class="todo-left">
              <input type="checkbox" class="todo-checkbox" ${currentStudent.tasksDone && currentStudent.tasksDone.t1 ? 'checked' : ''} onchange="toggleStudentTask('t1')">
              <span class="todo-text">1인 1역 역할 (${currentStudent.role}) 수행하기</span>
            </div>
            <span class="todo-reward">+500원 / +50EXP</span>
          </div>

          <div class="todo-item ${currentStudent.tasksDone && currentStudent.tasksDone.t2 ? 'completed' : ''}">
            <div class="todo-left">
              <input type="checkbox" class="todo-checkbox" ${currentStudent.tasksDone && currentStudent.tasksDone.t2 ? 'checked' : ''} onchange="toggleStudentTask('t2')">
              <span class="todo-text">우리 기업 R&D 개발 단계 체크 & 팀 회의</span>
            </div>
            <span class="todo-reward">+1,000원 / +100EXP</span>
          </div>

          <div class="todo-item ${currentStudent.tasksDone && currentStudent.tasksDone.t3 ? 'completed' : ''}">
            <div class="todo-left">
              <input type="checkbox" class="todo-checkbox" ${currentStudent.tasksDone && currentStudent.tasksDone.t3 ? 'checked' : ''} onchange="toggleStudentTask('t3')">
              <span class="todo-text">기업 아이템 개발 피칭 보고서 작성/복습</span>
            </div>
            <span class="todo-reward">+1,500원 / +150EXP</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Tabs -->
    <div class="nav-tabs">
      <button class="tab-btn ${state.activeStudentTab === 'myCompany' ? 'active' : ''}" onclick="selectStudentTab('myCompany')">
        🏢 우리 기업 그룹
      </button>
      <button class="tab-btn ${state.activeStudentTab === 'pitching' ? 'active' : ''}" onclick="selectStudentTab('pitching')">
        📢 기업 피칭(Pitching)
      </button>
      <button class="tab-btn ${state.activeStudentTab === 'stockMarket' ? 'active' : ''}" onclick="selectStudentTab('stockMarket')">
        📈 학급 주식 시장
      </button>
      <button class="tab-btn ${state.activeStudentTab === 'store' ? 'active' : ''}" onclick="selectStudentTab('store')">
        🛍️ 학급 상점
      </button>
      <button class="tab-btn ${state.activeStudentTab === 'roles' ? 'active' : ''}" onclick="selectStudentTab('roles')">
        🙋‍♂️ 1인 1역 배정표
      </button>
    </div>

    <!-- Active Tab Panel -->
    <div class="tab-panel">
      ${renderStudentTabContent(currentStudent, company)}
    </div>
  `;
}

function renderStudentTabContent(student, company) {
  switch (state.activeStudentTab) {
    case 'myCompany':
      return renderMyCompanyGroupTab(student, company);
    case 'pitching':
      return renderPitchingTab(student);
    case 'stockMarket':
      return renderStockMarketTab();
    case 'store':
      return renderStoreTab(student);
    case 'roles':
      return renderRolesTab();
    default:
      return renderMyCompanyGroupTab(student, company);
  }
}

// Student Tab 1: My Company Group
function renderMyCompanyGroupTab(student, company) {
  if (!company) return `<p>소속된 기업이 없습니다.</p>`;

  const teamMembers = state.students.filter(s => company.members.includes(s.id));

  return `
    <div class="dashboard-top-grid" style="grid-template-columns: 1fr 1fr;">
      <div class="glass-card">
        <h3 style="color:var(--accent-purple); font-size:1.2rem; margin-bottom:0.75rem;">🚀 [${company.name}] R&D 협업 정보</h3>
        <p style="margin-bottom:0.75rem; font-size:0.95rem;"><strong>사업 아이템:</strong> ${company.item}</p>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1rem;">${company.description}</p>
        
        <div style="margin-top:1rem;">
          <h4 style="font-size:0.9rem; color:var(--accent-cyan); margin-bottom:0.5rem;">👥 함께 창업한 기업 팀원 (${teamMembers.length}명)</h4>
          <div class="company-team-list">
            ${teamMembers.map(m => `
              <span class="team-chip" style="${m.id === student.id ? 'border:1px solid var(--accent-purple); color:#fff; font-weight:700;' : ''}">
                ${m.name} (${m.role}) - Lv.${m.level}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="glass-card">
        <h3 style="color:var(--accent-cyan); font-size:1.2rem; margin-bottom:0.75rem;">💬 팀 아이디어 & 논의 회의록</h3>
        <div style="max-height:220px; overflow-y:auto; margin-bottom:1rem; display:flex; flex-direction:column; gap:0.5rem;">
          ${company.discussions && company.discussions.length > 0 ? company.discussions.map(d => `
            <div style="background:rgba(15,23,42,0.6); padding:0.65rem 0.85rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-secondary); margin-bottom:0.2rem;">
                <strong style="color:var(--accent-indigo);">${d.author}</strong>
                <span>${d.date}</span>
              </div>
              <p style="font-size:0.85rem;">${d.text}</p>
            </div>
          `).join('') : '<p class="brand-subtitle">작성된 회의록이 없습니다.</p>'}
        </div>

        <form onsubmit="addCompanyDiscussion(event, ${company.id})">
          <div style="display:flex; gap:0.5rem;">
            <input type="text" id="discInput" class="form-control" placeholder="팀원들과 나눌 연구/아이디어 의견 입력..." required>
            <button type="submit" class="btn-primary" style="white-space:nowrap;">작성</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function addCompanyDiscussion(e, companyId) {
  e.preventDefault();
  const input = document.getElementById('discInput');
  const text = input.value.trim();
  if (!text) return;

  const student = state.students.find(s => s.id === state.activeStudentId);
  const company = state.companies.find(c => c.id === companyId);

  if (company && student) {
    if (!company.discussions) company.discussions = [];
    company.discussions.push({
      id: Date.now(),
      author: student.name,
      text: text,
      date: new Date().toISOString().split('T')[0]
    });
    saveState();
    showToast("팀 의견이 등록되었습니다! 💬", "success");
    renderApp();
  }
}

// Student Tab 2: Pitching
function renderPitchingTab(student) {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <div>
        <h2 style="font-size:1.3rem;">📢 학급 기업 피칭(Pitching) 게시판</h2>
        <p class="brand-subtitle">기업의 아이템 개발 성과, 학급 문제 해결 사례를 교사 및 학급에 발표/제출합니다.</p>
      </div>
      <button class="btn-primary" onclick="openNewPitchModal()">+ 새 피칭 작성하기</button>
    </div>

    <div class="company-grid" style="grid-template-columns: 1fr;">
      ${state.pitches.map(p => {
        let badgeClass = 'pending';
        let statusText = '⏳ 심사 중';
        if (p.status === 'approved') { badgeClass = 'approved'; statusText = '✅ 승인됨'; }
        else if (p.status === 'rejected') { badgeClass = 'rejected'; statusText = '❌ 보완 필요'; }

        return `
          <div class="glass-card pitch-card">
            <div class="pitch-header">
              <div>
                <span class="team-chip" style="background:var(--accent-purple); color:#fff; font-weight:700;">🏢 ${p.companyName}</span>
                <h3 style="display:inline; font-size:1.1rem; margin-left:0.5rem;">${p.title}</h3>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="status-badge ${badgeClass}">${statusText}</span>
                <span class="brand-subtitle">${p.date}</span>
              </div>
            </div>

            <p style="font-size:0.9rem; margin-top:0.5rem; line-height:1.5;">${p.content}</p>

            ${p.teacherFeedback ? `
              <div class="teacher-feedback-box">
                <strong style="color:var(--accent-indigo);">👨‍🏫 담임교사 피드백 & 주가 반영:</strong>
                <p style="margin-top:0.25rem;">${p.teacherFeedback}</p>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function openNewPitchModal() {
  const student = state.students.find(s => s.id === state.activeStudentId);
  const company = state.companies.find(c => c.id === student.companyId);

  openModal(`
    <h2 style="color:var(--accent-purple); margin-bottom:1rem;">📢 [${company ? company.name : ''}] 새 피칭 작성하기</h2>
    <form onsubmit="submitNewPitch(event)">
      <div class="form-group">
        <label>피칭 제목 (개발 성과 / 문제 해결 주제)</label>
        <input type="text" id="pitchTitle" class="form-control" placeholder="예: 급식 수거 3단계 테스트 및 결과 측정" required>
      </div>

      <div class="form-group">
        <label>아이템 개발 단계 선택</label>
        <select id="pitchStage" class="form-control">
          <option value="1">1단계: 아이디어 발굴 💡</option>
          <option value="2">2단계: 시제품 제작 🛠️</option>
          <option value="3" selected>3단계: 학급 테스트 🧪</option>
          <option value="4">4단계: 상용화 및 고도화 ✨</option>
        </select>
      </div>

      <div class="form-group">
        <label>피칭 상세 내용 (문제점, 해결 방식, 학급 기여도 등)</label>
        <textarea id="pitchContent" class="form-control" placeholder="선생님과 반 친구들에게 우리 회사의 연구개발 결과를 설명해 주세요." required></textarea>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">제출하기</button>
      </div>
    </form>
  `);
}

function submitNewPitch(e) {
  e.preventDefault();
  const title = document.getElementById('pitchTitle').value;
  const stage = parseInt(document.getElementById('pitchStage').value, 10);
  const content = document.getElementById('pitchContent').value;

  const student = state.students.find(s => s.id === state.activeStudentId);
  const company = state.companies.find(c => c.id === student.companyId);

  const newPitch = {
    id: Date.now(),
    companyId: company ? company.id : 0,
    companyName: company ? company.name : '미소속',
    title,
    stage,
    content,
    status: 'pending',
    teacherFeedback: '',
    stockDelta: 0,
    date: new Date().toISOString().split('T')[0]
  };

  state.pitches.unshift(newPitch);
  addLog('pitch', `[${company ? company.name : '기업'}] 새 개발 피칭 제출: "${title}"`);
  saveState();
  closeModal();
  showToast("피칭 보고서가 교사에게 제출되었습니다! 📢", "success");
  renderApp();
}

// Student Tab 3: Stock Market
function renderStockMarketTab() {
  return `
    <div style="margin-bottom:1.25rem;">
      <h2 style="font-size:1.3rem;">📈 학급 주식 시장 (Classroom Stock Exchange)</h2>
      <p class="brand-subtitle">학급 내 모든 상장 기업의 시세와 아이템 고도화 단계를 실시간으로 확인합니다.</p>
    </div>

    <div class="company-grid">
      ${state.companies.map(c => {
        const diff = c.stockPrice - c.previousPrice;
        const rate = ((diff / c.previousPrice) * 100).toFixed(1);
        const rateClass = diff > 0 ? 'up' : (diff < 0 ? 'down' : 'same');
        const rateSymbol = diff > 0 ? '🔺' : (diff < 0 ? '🔻' : '➖');
        const team = state.students.filter(s => c.members.includes(s.id));

        return `
          <div class="glass-card company-card">
            <div class="company-header">
              <div class="company-title">
                <h3>${c.name}</h3>
                <p class="company-item-tag">💡 ${c.item}</p>
              </div>
              <div class="stock-pill">
                <div class="stock-price-main">₩${c.stockPrice.toLocaleString()}</div>
                <div class="stock-rate ${rateClass}">${rateSymbol} ${rate}%</div>
              </div>
            </div>

            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0.5rem 0;">${c.description}</p>

            <div style="margin:0.75rem 0;">
              <span class="brand-subtitle">개발 단계: <strong>${c.stageName}</strong></span>
              <div class="progress-track" style="height:6px; margin-top:0.3rem;">
                <div class="progress-fill cyan" style="width:${c.stage * 25}%"></div>
              </div>
            </div>

            <div class="company-team-list">
              ${team.map(t => `<span class="team-chip">${t.name}</span>`).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Student Tab 4: Store
function renderStoreTab(student) {
  const myPurchases = state.purchases.filter(p => p.studentId === student.id);

  return `
    <div class="dashboard-top-grid" style="grid-template-columns: 2fr 1fr;">
      <div>
        <h2 style="font-size:1.3rem; margin-bottom:0.25rem;">🛍️ 학급 상점 (Classroom Store)</h2>
        <p class="brand-subtitle" style="margin-bottom:1.25rem;">열심히 모은 학급 화폐로 유용한 학급 쿠폰 및 아이템을 구매해 보세요!</p>

        <div class="store-grid">
          ${state.storeItems.map(item => `
            <div class="glass-card store-card">
              <div class="store-icon">${item.icon}</div>
              <h3 style="font-size:1.1rem; color:#fff;">${item.name}</h3>
              <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.2rem;">${item.desc}</p>
              <div class="store-price">₩${item.price.toLocaleString()}</div>
              <button class="btn-primary btn-sm" onclick="buyStoreItem(${item.id})">
                구매하기 (₩${item.price.toLocaleString()})
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- My Purchased Coupons -->
      <div class="glass-card" style="height:fit-content;">
        <h3 style="color:var(--accent-amber); font-size:1.1rem; margin-bottom:0.75rem;">🎟️ 내가 보관 중인 쿠폰</h3>
        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${myPurchases.length > 0 ? myPurchases.map(p => `
            <div style="background:rgba(15,23,42,0.6); padding:0.65rem 0.85rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:0.88rem;">${p.itemName}</strong>
                <div style="font-size:0.75rem; color:var(--text-secondary);">${p.date}</div>
              </div>
              <span class="status-badge ${p.status === 'completed' ? 'approved' : 'pending'}">
                ${p.status === 'completed' ? '사용가능' : '승인 대기중'}
              </span>
            </div>
          `).join('') : '<p class="brand-subtitle">구매한 쿠폰이 없습니다.</p>'}
        </div>
      </div>
    </div>
  `;
}

function buyStoreItem(itemId) {
  const student = state.students.find(s => s.id === state.activeStudentId);
  const item = state.storeItems.find(i => i.id === itemId);

  if (!student || !item) return;

  if (student.balance < item.price) {
    showToast(`잔액이 부족합니다! (필요: ₩${item.price.toLocaleString()} / 보유: ₩${student.balance.toLocaleString()})`, "warning");
    return;
  }

  if (confirm(`'${item.name}'을(를) ₩${item.price.toLocaleString()}에 구매하시겠습니까?`)) {
    student.balance -= item.price;
    state.purchases.unshift({
      id: Date.now(),
      studentId: student.id,
      studentName: student.name,
      itemId: item.id,
      itemName: item.name,
      price: item.price,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    });

    addLog('currency', `[${student.name}] 상점에서 '${item.name}' (₩${item.price.toLocaleString()}) 구매 신청`);
    saveState();
    showToast(`'${item.name}' 구매 신청 완료! 🛍️`, "success");
    renderApp();
  }
}

// Student Tab 5: Roles Board
function renderRolesTab() {
  return `
    <div style="margin-bottom:1.25rem;">
      <h2 style="font-size:1.3rem;">🙋‍♂️ 우리반 1인 1역 역할 배정표 (19명)</h2>
      <p class="brand-subtitle">학급 구성원 전체의 1인 1역 배정 현황입니다.</p>
    </div>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th>번호 / 이름</th>
            <th>소속 기업</th>
            <th>1인 1역 배정 역할</th>
            <th>레벨</th>
            <th>오늘 수행 여부</th>
          </tr>
        </thead>
        <tbody>
          ${state.students.map((s, idx) => `
            <tr>
              <td><strong>${idx + 1}. ${s.name}</strong></td>
              <td><span class="team-chip">${s.companyName}</span></td>
              <td><strong style="color:var(--accent-cyan);">${s.role}</strong></td>
              <td><span class="level-badge" style="font-size:0.75rem;">Lv.${s.level}</span></td>
              <td>
                ${s.tasksDone && s.tasksDone.t1 ? '<span style="color:var(--accent-emerald); font-weight:700;">✅ 완료</span>' : '<span style="color:var(--text-muted);">⏳ 진행 중</span>'}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ==========================================================================
   TEACHER DASHBOARD RENDERER
   ========================================================================== */
function renderTeacherDashboard() {
  const totalStudents = state.students.length;
  const totalCompanies = state.companies.length;
  const totalMoney = state.students.reduce((acc, s) => acc + s.balance, 0);
  const pendingPitches = state.pitches.filter(p => p.status === 'pending').length;
  const pendingPurchases = state.purchases.filter(p => p.status === 'pending').length;

  return `
    <!-- Teacher Top Summary Banner -->
    <div class="dashboard-top-grid">
      <div class="glass-card highlight-purple">
        <h3 style="font-size:0.9rem; color:var(--text-secondary);">👨‍🏫 담임교사 학급 경제 현황</h3>
        <div class="stats-grid" style="grid-template-columns: repeat(4, 1fr); margin-top:0.75rem;">
          <div class="stat-box">
            <span class="label">전체 학생</span>
            <span class="value" style="color:#fff;">${totalStudents}명</span>
          </div>
          <div class="stat-box">
            <span class="label">상장 기업</span>
            <span class="value stock">${totalCompanies}개</span>
          </div>
          <div class="stat-box">
            <span class="label">총 유통 화폐</span>
            <span class="value currency">₩${totalMoney.toLocaleString()}</span>
          </div>
          <div class="stat-box">
            <span class="label">미처리 제출건</span>
            <span class="value" style="color:var(--accent-amber);">${pendingPitches + pendingPurchases}건</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Teacher Navigation Tabs -->
    <div class="nav-tabs">
      <button class="tab-btn ${state.activeTeacherTab === 'students' ? 'active' : ''}" onclick="selectTeacherTab('students')">
        👥 학생 전체 목록 & 화폐/EXP 관리
      </button>
      <button class="tab-btn ${state.activeTeacherTab === 'companies' ? 'active' : ''}" onclick="selectTeacherTab('companies')">
        🏢 기업 상장 & 주가/피칭 관리 ${pendingPitches > 0 ? `<span style="background:var(--accent-rose); padding:0.1rem 0.4rem; border-radius:50%; font-size:0.7rem;">${pendingPitches}</span>` : ''}
      </button>
      <button class="tab-btn ${state.activeTeacherTab === 'roles' ? 'active' : ''}" onclick="selectTeacherTab('roles')">
        🙋‍♂️ 1인 1역 역할 배정
      </button>
      <button class="tab-btn ${state.activeTeacherTab === 'store' ? 'active' : ''}" onclick="selectTeacherTab('store')">
        🛍️ 상점 & 구매 승인 관리 ${pendingPurchases > 0 ? `<span style="background:var(--accent-amber); color:#000; padding:0.1rem 0.4rem; border-radius:50%; font-size:0.7rem;">${pendingPurchases}</span>` : ''}
      </button>
      <button class="tab-btn ${state.activeTeacherTab === 'logs' ? 'active' : ''}" onclick="selectTeacherTab('logs')">
        📜 화폐/주가 유통 로그
      </button>
    </div>

    <!-- Teacher Tab Content -->
    <div class="tab-panel">
      ${renderTeacherTabContent()}
    </div>
  `;
}

function renderTeacherTabContent() {
  switch (state.activeTeacherTab) {
    case 'students':
      return renderTeacherStudentsTab();
    case 'companies':
      return renderTeacherCompaniesTab();
    case 'roles':
      return renderTeacherRolesTab();
    case 'store':
      return renderTeacherStoreTab();
    case 'logs':
      return renderTeacherLogsTab();
    default:
      return renderTeacherStudentsTab();
  }
}

// Teacher Tab 1: Students & Currency Management
function renderTeacherStudentsTab() {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <h2 style="font-size:1.2rem;">👥 19명 학생 화폐 & 경험치(EXP) 관리</h2>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-secondary" onclick="openMultiGrantModal('currency')">💰 선택 학생 화폐 지급/차감</button>
        <button class="btn-secondary" onclick="openMultiGrantModal('exp')">⭐ 선택 학생 EXP 부여</button>
      </div>
    </div>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th style="width:40px;"><input type="checkbox" id="selectAllStudents" onchange="toggleSelectAllStudents(this.checked)"></th>
            <th>이름</th>
            <th>소속 기업</th>
            <th>1인 1역</th>
            <th>레벨 / EXP</th>
            <th>화폐 잔액</th>
            <th>관리 기능</th>
          </tr>
        </thead>
        <tbody>
          ${state.students.map(s => `
            <tr>
              <td><input type="checkbox" class="student-select-cb" value="${s.id}"></td>
              <td><strong>${s.name}</strong></td>
              <td><span class="team-chip">${s.companyName}</span></td>
              <td>${s.role}</td>
              <td><span class="level-badge" style="font-size:0.75rem;">Lv.${s.level} (${s.exp}EXP)</span></td>
              <td><strong style="color:var(--accent-amber); font-family:var(--font-mono);">₩${s.balance.toLocaleString()}</strong></td>
              <td>
                <button class="btn-primary btn-sm" onclick="openSingleGrantModal(${s.id})">
                  지급/차감
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function toggleSelectAllStudents(checked) {
  document.querySelectorAll('.student-select-cb').forEach(cb => cb.checked = checked);
}

function getSelectedStudentIds() {
  return Array.from(document.querySelectorAll('.student-select-cb:checked')).map(cb => parseInt(cb.value, 10));
}

function openSingleGrantModal(studentId) {
  const student = state.students.find(s => s.id === studentId);
  openModal(`
    <h2 style="color:var(--accent-purple); margin-bottom:1rem;">💰 [${student.name}] 화폐 / EXP 조정</h2>
    <form onsubmit="submitSingleGrant(event, ${studentId})">
      <div class="form-group">
        <label>구분</label>
        <select id="grantType" class="form-control">
          <option value="currency_add">학급 화폐 지급 (+)</option>
          <option value="currency_sub">학급 화폐 차감 (-)</option>
          <option value="exp_add">경험치(EXP) 부여 (+)</option>
        </select>
      </div>

      <div class="form-group">
        <label>수량 (원 또는 EXP)</label>
        <input type="number" id="grantAmount" class="form-control" placeholder="예: 1000" min="1" required>
      </div>

      <div class="form-group">
        <label>사유 입력</label>
        <input type="text" id="grantReason" class="form-control" placeholder="예: 학급 청소 우수 및 발표 적극 참여" required>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">적용하기</button>
      </div>
    </form>
  `);
}

function submitSingleGrant(e, studentId) {
  e.preventDefault();
  const type = document.getElementById('grantType').value;
  const amount = parseInt(document.getElementById('grantAmount').value, 10);
  const reason = document.getElementById('grantReason').value;

  const student = state.students.find(s => s.id === studentId);
  if (!student) return;

  if (type === 'currency_add') {
    student.balance += amount;
    addLog('currency', `[${student.name}] 교사 지급: +₩${amount.toLocaleString()} (사유: ${reason})`);
    showToast(`[${student.name}] ₩${amount.toLocaleString()} 지급 완료!`, 'success');
  } else if (type === 'currency_sub') {
    student.balance = Math.max(0, student.balance - amount);
    addLog('currency', `[${student.name}] 교사 차감: -₩${amount.toLocaleString()} (사유: ${reason})`);
    showToast(`[${student.name}] ₩${amount.toLocaleString()} 차감 완료!`, 'warning');
  } else if (type === 'exp_add') {
    addExp(student, amount);
    addLog('currency', `[${student.name}] 교사 EXP 부여: +${amount}EXP (사유: ${reason})`);
  }

  saveState();
  closeModal();
  renderApp();
}

function openMultiGrantModal(target) {
  const ids = getSelectedStudentIds();
  if (ids.length === 0) {
    showToast("지급할 학생을 체크박스로 선택해주세요!", "warning");
    return;
  }

  openModal(`
    <h2 style="color:var(--accent-cyan); margin-bottom:1rem;">👥 선택된 ${ids.length}명 일괄 ${target === 'currency' ? '화폐' : 'EXP'} 지급</h2>
    <form onsubmit="submitMultiGrant(event, '${target}')">
      <div class="form-group">
        <label>지급 수량 (${target === 'currency' ? '원' : 'EXP'})</label>
        <input type="number" id="multiAmount" class="form-control" placeholder="예: 1000" min="1" required>
      </div>

      <div class="form-group">
        <label>지급 사유</label>
        <input type="text" id="multiReason" class="form-control" placeholder="예: 학급 행사 전체 참여 보상" required>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">일괄 적용</button>
      </div>
    </form>
  `);
}

function submitMultiGrant(e, target) {
  e.preventDefault();
  const ids = getSelectedStudentIds();
  const amount = parseInt(document.getElementById('multiAmount').value, 10);
  const reason = document.getElementById('multiReason').value;

  ids.forEach(id => {
    const s = state.students.find(st => st.id === id);
    if (s) {
      if (target === 'currency') {
        s.balance += amount;
      } else {
        addExp(s, amount);
      }
    }
  });

  addLog('currency', `[학생 ${ids.length}명] 일괄 ${target === 'currency' ? '화폐 +₩' + amount.toLocaleString() : 'EXP +' + amount} 지급 (사유: ${reason})`);
  saveState();
  closeModal();
  showToast(`선택된 ${ids.length}명에게 일괄 적용되었습니다! 🎉`, 'success');
  renderApp();
}

// Teacher Tab 2: Companies & Pitch Evaluation
function renderTeacherCompaniesTab() {
  return `
    <div class="dashboard-top-grid" style="grid-template-columns: 1fr 1fr;">
      <!-- Section 1: Companies & Direct Stock Price Edit -->
      <div class="glass-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h2 style="font-size:1.1rem; color:var(--accent-purple);">🏢 상장 기업 및 주가 조정</h2>
          <button class="btn-primary btn-sm" onclick="openNewCompanyModal()">+ 신규 기업 상장(IPO)</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${state.companies.map(c => `
            <div style="background:rgba(15,23,42,0.6); padding:0.85rem 1rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:1rem; color:#fff;">${c.name}</strong>
                <div style="font-size:0.78rem; color:var(--accent-cyan);">${c.item}</div>
                <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.2rem;">현재 단계: ${c.stageName}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:1.1rem; font-weight:800; font-family:var(--font-mono); color:var(--accent-cyan);">₩${c.stockPrice.toLocaleString()}</div>
                <button class="btn-secondary btn-sm" style="margin-top:0.3rem;" onclick="openStockEditModal(${c.id})">
                  주가 수정
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 2: Pitch Reviews -->
      <div class="glass-card">
        <h2 style="font-size:1.1rem; color:var(--accent-amber); margin-bottom:1rem;">📢 제출된 피칭 심사 & 주가 반영</h2>
        
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${state.pitches.map(p => `
            <div style="background:rgba(15,23,42,0.6); padding:0.85rem 1rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.08);">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                <strong style="color:var(--accent-indigo);">[${p.companyName}]</strong>
                <span class="status-badge ${p.status === 'approved' ? 'approved' : 'pending'}">${p.status === 'approved' ? '심사 완료' : '대기중'}</span>
              </div>
              <h4 style="font-size:0.95rem; font-weight:700;">${p.title}</h4>
              <p style="font-size:0.82rem; color:var(--text-secondary); margin:0.3rem 0;">${p.content}</p>
              
              ${p.status === 'pending' ? `
                <button class="btn-primary btn-sm" style="margin-top:0.5rem;" onclick="openPitchEvalModal(${p.id})">
                  피드백 & 주가 설정 심사하기
                </button>
              ` : `
                <div style="font-size:0.78rem; color:var(--accent-emerald); margin-top:0.3rem;">
                  피드백: ${p.teacherFeedback}
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function openStockEditModal(companyId) {
  const company = state.companies.find(c => c.id === companyId);
  openModal(`
    <h2 style="color:var(--accent-cyan); margin-bottom:1rem;">📈 [${company.name}] 주가 변경</h2>
    <form onsubmit="submitStockEdit(event, ${companyId})">
      <div class="form-group">
        <label>현재 주가</label>
        <input type="text" class="form-control" value="₩${company.stockPrice.toLocaleString()}" disabled>
      </div>

      <div class="form-group">
        <label>새 주가 (원)</label>
        <input type="number" id="newStockPrice" class="form-control" value="${company.stockPrice}" required>
      </div>

      <div class="form-group">
        <label>주가 변동 사유</label>
        <input type="text" id="stockReason" class="form-control" placeholder="예: 3단계 테스트 완수 및 학급 기여도 증가" required>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">주가 반영</button>
      </div>
    </form>
  `);
}

function submitStockEdit(e, companyId) {
  e.preventDefault();
  const newPrice = parseInt(document.getElementById('newStockPrice').value, 10);
  const reason = document.getElementById('stockReason').value;

  const company = state.companies.find(c => c.id === companyId);
  if (!company) return;

  company.previousPrice = company.stockPrice;
  company.stockPrice = newPrice;

  addLog('stock', `[${company.name}] 교사 수동 주가 변경: ₩${company.previousPrice.toLocaleString()} ➔ ₩${newPrice.toLocaleString()} (사유: ${reason})`);
  saveState();
  closeModal();
  showToast(`[${company.name}] 주가가 ₩${newPrice.toLocaleString()}로 변경되었습니다! 📈`, "success");
  renderApp();
}

function openPitchEvalModal(pitchId) {
  const pitch = state.pitches.find(p => p.id === pitchId);
  const company = state.companies.find(c => c.id === pitch.companyId);

  openModal(`
    <h2 style="color:var(--accent-purple); margin-bottom:1rem;">📢 [${pitch.companyName}] 피칭 심사</h2>
    <form onsubmit="submitPitchEval(event, ${pitchId})">
      <p style="font-size:0.9rem; margin-bottom:1rem; background:rgba(15,23,42,0.6); padding:0.75rem; border-radius:var(--radius-md);">
        <strong>피칭 제목:</strong> ${pitch.title}<br>
        <strong>내용:</strong> ${pitch.content}
      </p>

      <div class="form-group">
        <label>심사 결과</label>
        <select id="evalStatus" class="form-control">
          <option value="approved">승인 및 우수 보상 부여 ✅</option>
          <option value="rejected">보완 요청 ❌</option>
        </select>
      </div>

      <div class="form-group">
        <label>주가 변동액 (원) (예: +1000 또는 -500)</label>
        <input type="number" id="evalStockDelta" class="form-control" value="1000" required>
      </div>

      <div class="form-group">
        <label>담임교사 총평 & 피드백</label>
        <textarea id="evalFeedback" class="form-control" placeholder="학생 기업의 성과를 격려하고 개선할 점을 피드백해 주세요." required>매우 뛰어난 연구 성과입니다. 주가 상향 및 보상금을 부여합니다!</textarea>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">심사 완료 제출</button>
      </div>
    </form>
  `);
}

function submitPitchEval(e, pitchId) {
  e.preventDefault();
  const status = document.getElementById('evalStatus').value;
  const stockDelta = parseInt(document.getElementById('evalStockDelta').value, 10);
  const feedback = document.getElementById('evalFeedback').value;

  const pitch = state.pitches.find(p => p.id === pitchId);
  const company = state.companies.find(c => c.id === pitch.companyId);

  if (pitch && company) {
    pitch.status = status;
    pitch.teacherFeedback = feedback;
    pitch.stockDelta = stockDelta;

    if (status === 'approved' && stockDelta !== 0) {
      company.previousPrice = company.stockPrice;
      company.stockPrice = Math.max(100, company.stockPrice + stockDelta);
      company.stage = Math.min(4, Math.max(company.stage, pitch.stage));

      // Award bonus money to company members
      const team = state.students.filter(s => company.members.includes(s.id));
      team.forEach(m => {
        m.balance += 2000;
        addExp(m, 150);
      });

      addLog('stock', `[${company.name}] 피칭 승인으로 주가 ₩${stockDelta > 0 ? '+' : ''}${stockDelta.toLocaleString()}원 변동 (현재 ₩${company.stockPrice.toLocaleString()}) & 팀원 보상 ₩2,000 지급`);
    }

    saveState();
    closeModal();
    showToast("피칭 심사가 반영되었습니다! 🎉", "success");
    renderApp();
  }
}

function openNewCompanyModal() {
  openModal(`
    <h2 style="color:var(--accent-cyan); margin-bottom:1rem;">🚀 신규 학급 기업 상장 (IPO)</h2>
    <form onsubmit="submitNewCompany(event)">
      <div class="form-group">
        <label>기업명</label>
        <input type="text" id="newCompName" class="form-control" placeholder="예: 미니창의랩" required>
      </div>

      <div class="form-group">
        <label>대표 사업 아이템</label>
        <input type="text" id="newCompItem" class="form-control" placeholder="예: 학급 분실물 자동 탐지기" required>
      </div>

      <div class="form-group">
        <label>기업 설명</label>
        <textarea id="newCompDesc" class="form-control" placeholder="기업의 설립 목적과 문제 해결 방향" required></textarea>
      </div>

      <div class="form-group">
        <label>초기 상장 공모 주가 (원)</label>
        <input type="number" id="newCompStock" class="form-control" value="10000" min="1000" required>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">상장 승인</button>
      </div>
    </form>
  `);
}

function submitNewCompany(e) {
  e.preventDefault();
  const name = document.getElementById('newCompName').value;
  const item = document.getElementById('newCompItem').value;
  const desc = document.getElementById('newCompDesc').value;
  const stock = parseInt(document.getElementById('newCompStock').value, 10);

  const newComp = {
    id: Date.now(),
    name,
    item,
    description: desc,
    stockPrice: stock,
    previousPrice: stock,
    stage: 1,
    stageName: "아이디어 발굴 💡",
    members: [],
    discussions: []
  };

  state.companies.push(newComp);
  addLog('stock', `[${name}] 신규 기업 상장(IPO) 승인! 공모가 ₩${stock.toLocaleString()}`);
  saveState();
  closeModal();
  showToast(`[${name}] 기업이 성공적으로 상장되었습니다! 🚀`, "success");
  renderApp();
}

// Teacher Tab 3: Roles Matrix Management
function renderTeacherRolesTab() {
  return `
    <div style="margin-bottom:1rem;">
      <h2 style="font-size:1.2rem;">🙋‍♂️ 19명 학생 1인 1역 지정 및 수정</h2>
      <p class="brand-subtitle">각 학생의 학급 역할을 수정할 수 있습니다.</p>
    </div>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th>학생 이름</th>
            <th>소속 기업</th>
            <th>현재 역할</th>
            <th>역할 변경</th>
          </tr>
        </thead>
        <tbody>
          ${state.students.map(s => `
            <tr>
              <td><strong>${s.name}</strong></td>
              <td><span class="team-chip">${s.companyName}</span></td>
              <td><strong style="color:var(--accent-cyan);">${s.role}</strong></td>
              <td>
                <input type="text" class="form-control" style="max-width:180px; padding:0.35rem 0.6rem; font-size:0.8rem;" 
                       value="${s.role}" onchange="updateStudentRole(${s.id}, this.value)">
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function updateStudentRole(studentId, newRole) {
  const student = state.students.find(s => s.id === studentId);
  if (student && newRole.trim()) {
    student.role = newRole.trim();
    saveState();
    showToast(`[${student.name}] 역할이 '${newRole}'(으)로 변경되었습니다.`, "info");
  }
}

// Teacher Tab 4: Store & Purchase Approvals
function renderTeacherStoreTab() {
  return `
    <div class="dashboard-top-grid" style="grid-template-columns: 1fr 1fr;">
      <!-- Section 1: Purchases Pending -->
      <div class="glass-card">
        <h2 style="font-size:1.1rem; color:var(--accent-amber); margin-bottom:1rem;">🎟️ 학생 상점 구매 신청 승인 관리</h2>
        
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${state.purchases.length > 0 ? state.purchases.map(p => `
            <div style="background:rgba(15,23,42,0.6); padding:0.85rem 1rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="color:#fff;">[${p.studentName}] - ${p.itemName}</strong>
                <div style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.2rem;">가격: ₩${p.price.toLocaleString()} | 신청일: ${p.date}</div>
              </div>
              
              ${p.status === 'pending' ? `
                <button class="btn-primary btn-sm btn-emerald" onclick="approvePurchase(${p.id})">
                  사용 승인
                </button>
              ` : `
                <span class="status-badge approved">사용 완료</span>
              `}
            </div>
          `).join('') : '<p class="brand-subtitle">구매 신청 내역이 없습니다.</p>'}
        </div>
      </div>

      <!-- Section 2: Store Items Register -->
      <div class="glass-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h2 style="font-size:1.1rem; color:var(--accent-cyan);">🎁 상점 쿠폰 및 상품 관리</h2>
          <button class="btn-primary btn-sm" onclick="openNewItemModal()">+ 상품 추가</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${state.storeItems.map(item => `
            <div style="background:rgba(15,23,42,0.6); padding:0.75rem 1rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <span style="font-size:1.4rem;">${item.icon}</span>
                <div>
                  <strong>${item.name}</strong>
                  <div style="font-size:0.75rem; color:var(--text-secondary);">${item.desc}</div>
                </div>
              </div>
              <strong style="color:var(--accent-amber); font-family:var(--font-mono);">₩${item.price.toLocaleString()}</strong>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function approvePurchase(purchaseId) {
  const p = state.purchases.find(item => item.id === purchaseId);
  if (p) {
    p.status = 'completed';
    saveState();
    showToast(`[${p.studentName}] 쿠폰 사용이 승인 처리되었습니다! 🎟️`, "success");
    renderApp();
  }
}

function openNewItemModal() {
  openModal(`
    <h2 style="color:var(--accent-cyan); margin-bottom:1rem;">🎁 상점 새 상품 추가</h2>
    <form onsubmit="submitNewItem(event)">
      <div class="form-group">
        <label>상품/쿠폰명</label>
        <input type="text" id="newItemName" class="form-control" placeholder="예: 청소 1회 면제권" required>
      </div>

      <div class="form-group">
        <label>대표 이모지 아이콘</label>
        <input type="text" id="newItemIcon" class="form-control" value="🎟️" required>
      </div>

      <div class="form-group">
        <label>상품 설명</label>
        <input type="text" id="newItemDesc" class="form-control" placeholder="예: 구역 청소를 1회 면제해주는 혜택" required>
      </div>

      <div class="form-group">
        <label>판매 가격 (원)</label>
        <input type="number" id="newItemPrice" class="form-control" placeholder="5000" min="100" required>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
        <button type="button" class="btn-secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn-primary">상품 등록</button>
      </div>
    </form>
  `);
}

function submitNewItem(e) {
  e.preventDefault();
  const name = document.getElementById('newItemName').value;
  const icon = document.getElementById('newItemIcon').value;
  const desc = document.getElementById('newItemDesc').value;
  const price = parseInt(document.getElementById('newItemPrice').value, 10);

  state.storeItems.push({
    id: Date.now(),
    name,
    icon,
    desc,
    price
  });

  saveState();
  closeModal();
  showToast("상점 상품이 등록되었습니다! 🎁", "success");
  renderApp();
}

// Teacher Tab 5: Logs
function renderTeacherLogsTab() {
  return `
    <div style="margin-bottom:1rem;">
      <h2 style="font-size:1.2rem;">📜 학급 경제 및 주가 변동 유통 로그</h2>
      <p class="brand-subtitle">학급 내 모든 화폐 유통과 기업 주가 변동 이력입니다.</p>
    </div>

    <div class="glass-card">
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${state.logs.map(log => `
          <div style="background:rgba(15,23,42,0.6); padding:0.65rem 0.9rem; border-radius:var(--radius-md); border-left:3px solid ${log.type === 'stock' ? 'var(--accent-cyan)' : 'var(--accent-amber)'}; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.88rem; color:#fff;">${log.text}</span>
            <span class="brand-subtitle" style="font-size:0.75rem;">${log.date}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   MODAL & TOAST UTILITIES
   ========================================================================== */
function openModal(htmlContent) {
  document.getElementById('modalContent').innerHTML = htmlContent;
  document.getElementById('modalOverlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'modalOverlay') {
    closeModal();
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// DOM Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
