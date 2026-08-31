// ================================
// SMOOTH SCROLL
// ================================

function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section, .hero");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(sectionId);

    if (target) {
        target.style.display = "block";
    }

    // Update menu aktif
    const menuItems = document.querySelectorAll(".sidebar-nav a");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    const activeMenu = document.querySelector(
        `.sidebar-nav a[href="#${sectionId}"]`
    );

    if (activeMenu) {
        activeMenu.classList.add("active");
    }
}


// Tampilkan Beranda saat website pertama dibuka
document.addEventListener("DOMContentLoaded", function () {
    showSection("home");
});


// ================================
// SHOW SECTION
// ================================

function showSection(sectionId) {

    const sections = document.querySelectorAll(
        ".content-section, .hero"
    );

    // Sembunyikan semua section
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Tampilkan section yang dipilih
    const target = document.getElementById(sectionId);

    if (target) {
        target.style.display = "block";
    }

    // Update menu aktif
    const menuItems = document.querySelectorAll(".sidebar-nav a");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    const activeMenu = document.querySelector(
        `.sidebar-nav a[href="#${sectionId}"]`
    );

    if (activeMenu) {
        activeMenu.classList.add("active");
    }

    // Kembali ke bagian atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// TAMPILKAN BERANDA SAAT WEBSITE DIBUKA
// ================================

document.addEventListener("DOMContentLoaded", function () {
    showSection("home");
});


// ================================
// TELEMEDICINE BUTTON
// ================================

const telemedicineButton =
    document.querySelector(".secondary-btn");

if (telemedicineButton) {

    telemedicineButton.addEventListener("click", () => {

        alert(
            "Telemedicine merupakan salah satu inovasi pelayanan kesehatan digital yang memungkinkan konsultasi, pemantauan, dan tindak lanjut pasien melalui teknologi komunikasi."
        );

    });

}
