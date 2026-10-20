// main.js — وظائف تفاعلية بسيطة للموقع (اختياري)

// 1) كتابة السنة الحالية في الـ Footer تلقائيًا
document.getElementById("year").textContent = new Date().getFullYear();

// 2) إضافة ظل خفيف للـ Navbar عند التمرير للأسفل
const nav = document.getElementById("mainNav");
function updateNav() {
  nav.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

// 3) إغلاق قائمة الهاتف تلقائيًا بعد الضغط على أي رابط
const menu = document.getElementById("navLinks");
document.querySelectorAll("#navLinks .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
