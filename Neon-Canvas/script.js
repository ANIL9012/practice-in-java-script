// script.js – all logic, multiple eventListeners with premium UI

(function () {
  // ----- canvas setup -----
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const W = 800,
    H = 450;
  canvas.width = W;
  canvas.height = H;

  // ----- state -----
  let drawing = false;
  let lastX = 0,
    lastY = 0;
  let clickCount = 0;
  let currentHue = 200;
  let hueShift = 0;

  // DOM refs
  const clickSpan = document.getElementById("clickCounter");
  const coordSpan = document.getElementById("coordDisplay");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  // ----- drawing helpers -----
  function drawDot(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color || `hsl(${currentHue + hueShift}, 85%, 65%)`;
    ctx.shadowColor = "rgba(120, 200, 255, 0.6)";
    ctx.shadowBlur = 22;
    ctx.fill();
    ctx.shadowBlur = 40;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `hsl(${currentHue + hueShift}, 80%, 60%)`;
    ctx.lineWidth = 4.5;
    ctx.shadowColor = "rgba(80, 180, 255, 0.5)";
    ctx.shadowBlur = 20;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function drawRandomPattern() {
    for (let i = 0; i < 16; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const hue = Math.floor(Math.random() * 360);
      ctx.beginPath();
      ctx.arc(x, y, 5 + Math.random() * 14, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue}, 85%, 65%)`;
      ctx.shadowColor = `hsl(${hue}, 80%, 70%)`;
      ctx.shadowBlur = 35;
      ctx.fill();
    }
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * W, Math.random() * H);
      ctx.lineTo(Math.random() * W, Math.random() * H);
      ctx.strokeStyle = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
      ctx.lineWidth = 3 + Math.random() * 5;
      ctx.shadowBlur = 28;
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  }

  function drawBackground() {
    const grad = ctx.createRadialGradient(200, 100, 40, 400, 200, 500);
    grad.addColorStop(0, "#18204a");
    grad.addColorStop(0.7, "#0a0d1f");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(90, 140, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let i = 0; i < W; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, H);
      ctx.stroke();
    }
    for (let i = 0; i < H; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(W, i);
      ctx.stroke();
    }
  }

  function clearCanvas() {
    drawBackground();
  }

  function updateClickCounter() {
    clickSpan.textContent = clickCount;
  }

  function updateCoords(x, y) {
    coordSpan.textContent = `${Math.round(x)}, ${Math.round(y)}`;
  }

  // ----- init -----
  function init() {
    drawBackground();
    for (let i = 0; i < 6; i++) {
      const x = 100 + i * 100 + Math.random() * 40;
      const y = 100 + Math.sin(i) * 60 + 40;
      drawDot(x, y, `hsl(${180 + i * 30}, 80%, 60%)`);
    }
    drawDot(400, 220, "#ffb3b3");
    drawDot(600, 150, "#b3d9ff");
    updateClickCounter();
  }

  // ----- get canvas coords (mouse/touch) -----
  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let clientX, clientY;
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      e.preventDefault();
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const canvasX = (clientX - rect.left) * scaleX;
    const canvasY = (clientY - rect.top) * scaleY;
    return {
      x: Math.min(Math.max(canvasX, 0), W),
      y: Math.min(Math.max(canvasY, 0), H),
    };
  }

  // ----- pointer events -----
  function handlePointerDown(e) {
    const { x, y } = getCanvasCoords(e);
    drawing = true;
    lastX = x;
    lastY = y;
    drawDot(x, y);
    clickCount++;
    updateClickCounter();
    updateCoords(x, y);
  }

  function handlePointerMove(e) {
    const { x, y } = getCanvasCoords(e);
    updateCoords(x, y);
    if (drawing) {
      drawLine(lastX, lastY, x, y);
      drawDot(x, y);
      lastX = x;
      lastY = y;
    }
  }

  function handlePointerUp() {
    drawing = false;
  }

  function handlePointerLeave() {
    drawing = false;
  }

  // attach canvas events
  canvas.addEventListener("mousedown", handlePointerDown);
  canvas.addEventListener("mousemove", handlePointerMove);
  canvas.addEventListener("mouseup", handlePointerUp);
  canvas.addEventListener("mouseleave", handlePointerLeave);
  canvas.addEventListener("touchstart", handlePointerDown, { passive: false });
  canvas.addEventListener("touchmove", handlePointerMove, { passive: false });
  canvas.addEventListener("touchend", handlePointerUp);
  canvas.addEventListener("touchcancel", handlePointerUp);

  // double click
  canvas.addEventListener("dblclick", function (e) {
    const { x, y } = getCanvasCoords(e);
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const r = 25 + Math.sin(i * 5) * 10;
      const dx = x + Math.cos(angle) * r;
      const dy = y + Math.sin(angle) * r;
      drawDot(dx, dy, `hsl(${currentHue + hueShift + i * 20}, 90%, 70%)`);
    }
    clickCount += 2;
    updateClickCounter();
  });

  // ----- buttons -----
  document.getElementById("clearBtn").addEventListener("click", function () {
    clearCanvas();
    clickCount = 0;
    updateClickCounter();
    coordSpan.textContent = "0, 0";
  });

  document.getElementById("randomBtn").addEventListener("click", function () {
    drawRandomPattern();
    clickCount++;
    updateClickCounter();
  });

  document.getElementById("colorBtn").addEventListener("click", function () {
    hueShift = (hueShift + 45) % 360;
    drawDot(W / 2, H / 2, `hsl(${currentHue + hueShift}, 90%, 70%)`);
    clickCount++;
    updateClickCounter();
  });

  // ----- keyboard events -----
  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    if (key === "r") {
      document.getElementById("randomBtn").click();
      e.preventDefault();
    } else if (key === "c") {
      document.getElementById("clearBtn").click();
      e.preventDefault();
    } else if (key === "h") {
      document.getElementById("colorBtn").click();
      e.preventDefault();
    }
  });

  // ----- resize event (visual feedback) -----
  window.addEventListener("resize", function () {
    ctx.shadowBlur = 10;
    ctx.fillStyle = "rgba(255,255,255,0.02)";
    ctx.fillRect(0, 0, W, H);
    ctx.shadowBlur = 0;
  });

  // ----- SEARCH functionality -----
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      alert('🔍 Please enter a search term. (e.g. "click", "key", "resize")');
      return;
    }
    const events = [
      "click",
      "mousemove",
      "mouseup",
      "mousedown",
      "touchstart",
      "touchmove",
      "keydown",
      "resize",
      "dblclick",
    ];
    const found = events.filter((ev) => ev.includes(query));
    if (found.length) {
      alert(
        `✨ Found ${found.length} event(s) matching "${query}":\n\n${found.join(" · ")}`,
      );
    } else {
      alert(
        `🔎 No events match "${query}". Try: click, key, resize, touch, etc.`,
      );
    }
    searchBtn.style.transform = "scale(0.94)";
    setTimeout(() => (searchBtn.style.transform = ""), 150);
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  });

  // ----- start -----
  init();
  console.log("✨ neon canvas · premium UI with attractive buttons");
})();
