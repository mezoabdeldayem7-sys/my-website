// ===============================
// 🌙 نظام الوضع الليلي والفاتح
// ===============================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    updateThemeButton();
}


// ===============================
// 🔘 تحديث زر الإضاءة
// ===============================

function updateThemeButton() {

    const button =
        document.querySelector(".theme-button");

    if (!button) return;

    if (
        document.body.classList.contains("light-mode")
    ) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }
}


// ===============================
// 💾 استرجاع الوضع المحفوظ
// ===============================

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}

updateThemeButton();