// Kiểm tra HTML đã serve
fetch("http://127.0.0.1:8899/")
  .then((r) => r.text())
  .then((t) => {
    console.log("has culture6Title key refs:", t.includes("culture6Title"));
    console.log("has script i18n 2.3:", t.includes("i18n.js?v=2.3"));
    console.log(
      "reverse rows:",
      (t.match(/culture-row reverse/g) || []).length,
    );
    console.log(
      "culture-row total:",
      (t.match(/class="culture-row/g) || []).length,
    );
    console.log("has Pillar 6 comment:", t.includes("Pillar 6: Geisha Arts"));
    console.log(
      "has geisha img in culture:",
      /culture-row[\s\S]{0,400}images\/geisha/.test(t),
    );
  });
