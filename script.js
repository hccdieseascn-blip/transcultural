// =====================================================
// TRANSCULTURAL HEALTH DASHBOARD
// INTERACTIVE JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // INITIALIZE WEBSITE
    // =================================================

    showSection("home");

    // =================================================
    // DARK / LIGHT MODE
    // =================================================

    createThemeButton();

    // =================================================
    // BACK TO TOP
    // =================================================

    createBackToTop();

    // =================================================
    // SCROLL ANIMATION
    // =================================================

    initScrollAnimation();

    // =================================================
    // STAT COUNTER
    // =================================================

    initCounter();

    // =================================================
    // INTERACTIVE INFO CARDS
    // =================================================

    initInfoCards();

});


// =====================================================
// SHOW SECTION
// =====================================================

function showSection(sectionId) {

    const sections = document.querySelectorAll(
        ".content-section, .hero"
    );

    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(sectionId);

    if (target) {

        target.style.display = "block";

        // Animation saat section muncul
        target.classList.remove("section-visible");

        setTimeout(() => {
            target.classList.add("section-visible");
        }, 50);
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

    // Kembali ke atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// TELEMEDICINE BUTTON
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const telemedicineButton =
        document.querySelector(".secondary-btn");

    if (telemedicineButton) {

        telemedicineButton.addEventListener("click", function () {

            showModal(
                "📱 Telemedicine",
                `
                <p>
                    Telemedicine memungkinkan pasien memperoleh layanan
                    kesehatan melalui teknologi komunikasi digital.
                </p>

                <div class="modal-highlight">
                    <strong>Manfaat utama</strong>
                    <ul>
                        <li>Konsultasi kesehatan jarak jauh</li>
                        <li>Pemantauan kondisi pasien</li>
                        <li>Meningkatkan akses pelayanan kesehatan</li>
                        <li>Mendukung continuity of care</li>
                    </ul>
                </div>

                <p>
                    Dalam keperawatan, teknologi tetap perlu disertai
                    komunikasi terapeutik, empati, clinical judgment,
                    dan perhatian terhadap kebutuhan budaya pasien.
                </p>
                `
            );

        });

    }

});


// =====================================================
// MODAL / POPUP
// =====================================================

function showModal(title, content) {

    // Hapus modal lama jika ada
    const oldModal = document.querySelector(".interactive-modal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement("div");

    modal.className = "interactive-modal";

    modal.innerHTML = `
        <div class="modal-box">

            <button class="modal-close" onclick="closeModal()">
                ×
            </button>

            <div class="modal-icon">
                ✦
            </div>

            <h2>${title}</h2>

            <div class="modal-content">
                ${content}
            </div>

            <button class="modal-action" onclick="closeModal()">
                Mengerti
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

    // Klik area luar modal
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });
}


function closeModal() {

    const modal =
        document.querySelector(".interactive-modal");

    if (modal) {

        modal.classList.remove("show");

        setTimeout(() => {
            modal.remove();
        }, 250);

    }

}


// =====================================================
// TRADITIONAL MEDICINE ACCORDION
// =====================================================

function toggleMedicine(button) {

    const item = button.parentElement;

    const allItems =
        document.querySelectorAll(".medicine-item");

    allItems.forEach(function (otherItem) {

        if (otherItem !== item) {
            otherItem.classList.remove("active");
        }

    });

    item.classList.toggle("active");

}


// =====================================================
// DARK / LIGHT MODE
// =====================================================

function createThemeButton() {

    const button = document.createElement("button");

    button.className = "theme-toggle";

    button.innerHTML = "🌙";

    button.title = "Ganti tampilan";

    document.body.appendChild(button);

    button.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            button.innerHTML = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            button.innerHTML = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });


    // Simpan tema
    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        button.innerHTML = "☀️";

    }

}


// =====================================================
// BACK TO TOP
// =====================================================

function createBackToTop() {

    const button = document.createElement("button");

    button.className = "back-to-top";

    button.innerHTML = "↑";

    button.title = "Kembali ke atas";

    document.body.appendChild(button);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });


    button.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

function initScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".info-card, .stat-card, .country-stat, .priority-card, .system-card, .medicine-item, .reference-item, .large-card"
        );


    elements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}
// =====================================================
// INTERACTIVE TRANSCULTURAL NURSING
// =====================================================

function openCultureFactor(factor) {

    const data = {

        technology: {
            title: "💻 Technological Factors",
            description:
                "Di Malaysia, perkembangan teknologi kesehatan seperti telemedicine, konsultasi kesehatan secara daring, rekam medis elektronik, dan layanan kesehatan digital menjadi bagian dari perkembangan pelayanan kesehatan. Dalam perspektif transcultural nursing, penggunaan teknologi perlu mempertimbangkan kemampuan, penerimaan, dan kebutuhan budaya pasien. Pada masyarakat Melayu, Tionghoa, India, maupun Bumiputera Sabah dan Sarawak, tingkat literasi digital dan akses terhadap teknologi dapat berbeda. Perawat perlu memastikan pasien memahami penggunaan teknologi serta tetap menjaga privasi dan kenyamanan pasien.",

            example:
                "Perawat perlu mempertimbangkan kemampuan pasien dalam menggunakan teknologi, akses internet, literasi digital, serta penerimaan pasien terhadap pelayanan kesehatan berbasis teknologi.",

            nursing:
                "Perawat berperan memberikan edukasi penggunaan teknologi secara sederhana dan memastikan pasien tetap memperoleh pelayanan yang aman, efektif, dan sesuai kebutuhannya."
        },

        religion: {
            title: "☪️ Religious & Philosophical Factors",
            description:
                "Agama memiliki pengaruh kuat terhadap perilaku kesehatan masyarakat Malaysia. Masyarakat Melayu mayoritas beragama Islam, sedangkan masyarakat Tionghoa dan India memiliki latar agama yang beragam, seperti Buddha, Tao, Hindu, Kristen, dan Islam. Dalam pelayanan keperawatan, perawat perlu memperhatikan praktik ibadah, makanan halal, puasa, privasi atau aurat, serta kebutuhan spiritual pasien. Hal ini menunjukkan pentingnya Islamic health care dalam memberikan pelayanan yang sesuai dengan nilai budaya dan agama pasien.",

            example:
                "Pada pasien Muslim, kebutuhan seperti makanan halal, privasi tubuh, waktu ibadah, dan kebutuhan spiritual perlu diperhatikan selama proses perawatan.",

            nursing:
                "Perawat perlu memberikan asuhan yang menghormati keyakinan pasien selama tidak mengganggu keselamatan dan efektivitas tindakan kesehatan."
        },

        family: {
            title: "👨‍👩‍👧 Family & Social Structure",
            description:
                "Keluarga memiliki peranan penting dalam kehidupan masyarakat Malaysia dan dapat menjadi sumber dukungan selama pasien menjalani perawatan. Pada berbagai kelompok etnis, keluarga dapat terlibat dalam pengambilan keputusan kesehatan, tetapi tingkat dan bentuk keterlibatannya dapat berbeda. Perawat perlu melakukan pengkajian mengenai siapa yang dianggap penting oleh pasien dan melibatkan keluarga sesuai dengan keinginan serta persetujuan pasien.",

            example:
                "Keluarga dapat dilibatkan dalam pemberian dukungan, pengingat obat, perubahan pola hidup, serta perawatan pasien di rumah.",

            nursing:
                "Perawat perlu mempertimbangkan struktur keluarga dan melibatkan anggota keluarga secara tepat dalam proses edukasi dan perawatan."
        },

        practices: {
            title: "🌿 Cultural Health Practices",
            description:
                "Keragaman etnis Malaysia menghasilkan perbedaan dalam pola makan, kebiasaan hidup, adat istiadat, serta cara memahami kesehatan dan penyakit. Masyarakat Melayu memiliki budaya dan makanan khas Melayu, masyarakat Tionghoa memiliki pengaruh budaya dan praktik kesehatan Tionghoa, sedangkan masyarakat India memiliki pengaruh budaya India seperti praktik makanan dan pengobatan tradisional tertentu. Kelompok Bumiputera Sabah dan Sarawak juga memiliki tradisi lokal yang beragam. Perawat perlu memahami kebiasaan tersebut agar dapat memberikan asuhan yang sesuai tanpa memberikan stereotip terhadap kelompok etnis tertentu.",

            example:
                "Pasien dapat menggunakan pengobatan tradisional atau komplementer bersamaan dengan pelayanan medis modern.",

            nursing:
                "Perawat perlu menggali penggunaan terapi tradisional secara terbuka, menghargai keyakinan pasien, serta mengidentifikasi kemungkinan interaksi atau risiko terhadap terapi medis."
        },

        political: {
    title: "⚖️ Faktor Politik & Hukum",
    description:
        "Pelayanan kesehatan di Malaysia dipengaruhi oleh kebijakan pemerintah, peraturan pelayanan kesehatan, hak pasien, serta regulasi tenaga kesehatan. Perkembangan telemedicine juga membutuhkan perhatian terhadap aspek hukum, keamanan data, privasi, dan persetujuan pasien. Dalam transcultural nursing, perawat harus memberikan pelayanan secara adil kepada seluruh kelompok etnis tanpa diskriminasi serta tetap menghormati hak dan keyakinan pasien.",

    example:
        "Dalam penggunaan telemedicine, aspek seperti keamanan data, privasi pasien, kerahasiaan informasi kesehatan, dan persetujuan pasien perlu diperhatikan. Pelayanan juga harus diberikan secara adil kepada masyarakat dari berbagai latar belakang budaya.",

    nursing:
        "Perawat perlu memahami kebijakan dan regulasi yang berlaku, menjaga kerahasiaan informasi pasien, memperoleh persetujuan sebelum tindakan, serta memberikan pelayanan yang adil tanpa diskriminasi berdasarkan etnis, agama, bahasa, maupun latar belakang sosial."
},

economic: {
    title: "💰 Faktor Ekonomi",
    description:
        "Kondisi ekonomi dapat memengaruhi kemampuan seseorang dalam memperoleh pelayanan kesehatan, obat-obatan, transportasi, maupun teknologi seperti telemedicine. Perbedaan akses juga dapat terlihat antara masyarakat perkotaan dengan masyarakat di wilayah terpencil, termasuk sebagian wilayah Sabah dan Sarawak. Perawat perlu mempertimbangkan kondisi ekonomi pasien ketika merencanakan intervensi agar pelayanan yang diberikan dapat dijangkau dan dilaksanakan oleh pasien.",

    example:
        "Pasien yang tinggal di wilayah dengan keterbatasan fasilitas atau memiliki kemampuan ekonomi yang lebih rendah dapat menghadapi hambatan dalam mengakses pelayanan kesehatan. Tantangan akses juga dapat berbeda antara wilayah perkotaan dan wilayah terpencil.",

    nursing:
        "Perawat perlu mempertimbangkan kondisi ekonomi pasien ketika menyusun rencana asuhan, memberikan edukasi mengenai pilihan pelayanan yang tersedia, serta membantu pasien menemukan sumber daya kesehatan yang dapat dijangkau."
},

education: {
    title: "🎓 Faktor Pendidikan",
    description:
        "Tingkat pendidikan dan literasi kesehatan memengaruhi kemampuan pasien dalam memahami penyakit, pengobatan, pencegahan, serta penggunaan teknologi kesehatan. Dalam masyarakat multietnis Malaysia, perawat perlu menyesuaikan metode edukasi dengan tingkat pendidikan, bahasa, dan kemampuan memahami informasi kesehatan pasien. Edukasi tidak seharusnya diberikan dengan asumsi berdasarkan etnis, tetapi berdasarkan hasil pengkajian terhadap setiap individu.",

    example:
        "Pasien dengan tingkat literasi kesehatan yang berbeda mungkin membutuhkan cara penyampaian informasi yang berbeda. Edukasi mengenai penggunaan obat, pola hidup sehat, maupun penggunaan telemedicine perlu disesuaikan dengan kemampuan pasien.",

    nursing:
        "Perawat perlu menggunakan bahasa yang sederhana, memberikan edukasi secara bertahap, melakukan klarifikasi pemahaman pasien, serta menggunakan metode komunikasi yang sesuai dengan tingkat pendidikan dan literasi kesehatan pasien."
}

    };


    const selected = data[factor];

    if (!selected) return;


    const modal = document.createElement("div");

    modal.className = "culture-modal";

    modal.innerHTML = `

        <div class="culture-modal-box">

            <button
                class="culture-close"
                onclick="closeCultureFactor()">
                ×
            </button>

            <h2>${selected.title}</h2>

            <p>
                ${selected.description}
            </p>

            <div class="culture-example">

                <strong>Contoh di Malaysia</strong>

                <p>
                    ${selected.example}
                </p>

            </div>

            <div class="culture-nursing">

                <strong>
                    👩‍⚕️ Implikasi bagi Keperawatan
                </strong>

                <p>
                    ${selected.nursing}
                </p>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("active");

    }, 10);


    modal.addEventListener("click", function(e) {

        if (e.target === modal) {
            closeCultureFactor();
        }

    });

}


function closeCultureFactor() {

    const modal =
        document.querySelector(".culture-modal");

    if (!modal) return;

    modal.classList.remove("active");

    setTimeout(() => {

        modal.remove();

    }, 300);

}


// ESC untuk menutup popup

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeCultureFactor();
    }

});

// =====================================================
// GLOBAL HEALTH INTERACTIVE STATISTICS
// =====================================================

function openHealthStat(stat) {

    const data = {

        nurses: {
            title: "👩‍⚕️ Registered Nurses",
            number: "121,361",

            description:
                "Malaysia recorded 121,361 registered nurses as of 31 December 2024.",

            insight:
                "Tenaga keperawatan merupakan komponen penting dalam sistem pelayanan kesehatan karena perawat berperan dalam pelayanan klinis, edukasi kesehatan, pencegahan penyakit, serta continuity of care.",

            source:
                "Source: Ministry of Health Malaysia, Health Facts 2025."
        },


        hospitals: {
            title: "🏥 Hospitals",
            number: "139",

            description:
                "Malaysia recorded 139 hospitals under the Ministry of Health as of 31 December 2024.",

            insight:
                "Ketersediaan fasilitas kesehatan menjadi salah satu indikator penting dalam melihat kapasitas sistem pelayanan kesehatan suatu negara.",

            source:
                "Source: Ministry of Health Malaysia, Health Facts 2025."
        },


        beds: {
            title: "🛏️ Hospital Beds",
            number: "41,209",

            description:
                "Ministry of Health hospitals in Malaysia recorded 41,209 official beds as of 31 December 2024.",

            insight:
                "Jumlah tempat tidur rumah sakit dapat memberikan gambaran mengenai kapasitas pelayanan rawat inap yang tersedia bagi masyarakat.",

            source:
                "Source: Ministry of Health Malaysia, Health Facts 2025."
        },


        healthcare: {
            title: "💰 Health Expenditure",

            number: "RM84.19B",

            description:
                "Malaysia's total health expenditure from public and private sources reached approximately RM84.19 billion in 2023.",

            insight:
                "Pembiayaan kesehatan merupakan faktor penting dalam menjaga keberlanjutan sistem pelayanan kesehatan dan meningkatkan akses masyarakat terhadap pelayanan.",

            source:
                "Source: Ministry of Health Malaysia, Health Facts 2025."
        }

    };


    const selected = data[stat];

    if (!selected) return;


    const modal =
        document.createElement("div");

    modal.className =
        "health-stat-modal";


    modal.innerHTML = `

        <div class="health-stat-box">

            <button
                class="health-modal-close"
                onclick="closeHealthStat()">
                ×
            </button>


            <h2>
                ${selected.title}
            </h2>


            <div class="stat-number">
                ${selected.number}
            </div>


            <p>
                ${selected.description}
            </p>


            <div class="health-insight">

                <strong>
                    💡 Health Insight
                </strong>

                <p>
                    ${selected.insight}
                </p>

            </div>


            <div class="health-source">

                ${selected.source}

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("active");

    }, 10);


    modal.addEventListener(
        "click",
        function(event) {

            if (event.target === modal) {

                closeHealthStat();

            }

        }
    );

}


function closeHealthStat() {

    const modal =
        document.querySelector(
            ".health-stat-modal"
        );

    if (!modal) return;


    modal.classList.remove("active");


    setTimeout(() => {

        modal.remove();

    }, 300);

}


// ESC untuk menutup popup

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeHealthStat();

        }

    }
);

// =====================================================
// GLOBAL HEALTH - INTERACTIVE REFORM CARDS
// =====================================================

function openReformCard(type) {

    const data = {

        delivery: {
            icon: "🏥",
            title: "Transforming Health Service Delivery",

            description:
                "Transformasi pelayanan kesehatan Malaysia berfokus pada penguatan pelayanan kesehatan primer, optimalisasi pelayanan rumah sakit, kerja sama publik-swasta, pemanfaatan teknologi digital, dan peningkatan pemerataan akses.",

            insight:
                "Bagi keperawatan, transformasi pelayanan berarti perawat perlu mampu beradaptasi dengan perkembangan teknologi, memperkuat edukasi kesehatan, serta mendukung pelayanan yang berpusat pada kebutuhan pasien."
        },


        prevention: {
            icon: "🛡️",
            title: "Health Promotion & Disease Prevention",

            description:
                "Promosi kesehatan dan pencegahan penyakit menjadi bagian penting dalam menghadapi meningkatnya penyakit tidak menular di Malaysia.",

            insight:
                "Perawat memiliki peran penting melalui edukasi, skrining, promosi gaya hidup sehat, pencegahan faktor risiko, serta pemberdayaan masyarakat untuk menjaga kesehatan."
        },


        financing: {
            icon: "💰",
            title: "Sustainable & Equitable Financing",

            description:
                "Pembiayaan kesehatan yang berkelanjutan bertujuan memastikan masyarakat dapat memperoleh pelayanan kesehatan yang komprehensif, berkualitas, dan terjangkau.",

            insight:
                "Dalam praktik keperawatan, kondisi sosial ekonomi pasien perlu diperhatikan agar rencana perawatan dan edukasi dapat diterapkan secara realistis dan tidak memperbesar hambatan akses."
        },


        workforce: {
            icon: "🧠",
            title: "Stronger Health System & Governance",

            description:
                "Penguatan sistem kesehatan mencakup kebijakan, regulasi, tenaga kesehatan, penelitian, inovasi, serta penerapan pelayanan berbasis bukti atau evidence-based practice.",

            insight:
                "Perawat perlu mengikuti perkembangan ilmu dan teknologi, menerapkan evidence-based nursing, menjaga profesionalisme, serta berkontribusi dalam peningkatan mutu dan keselamatan pasien."
        }

    };


    const selected = data[type];

    if (!selected) return;


    // Buat popup
    const modal = document.createElement("div");

    modal.className = "health-stat-modal";


    modal.innerHTML = `

        <div class="health-stat-box">

            <button
                class="health-modal-close"
                onclick="closeReformCard()">
                ×
            </button>


            <div class="modal-icon">
                ${selected.icon}
            </div>


            <h2>
                ${selected.title}
            </h2>


            <p>
                ${selected.description}
            </p>


            <div class="health-insight">

                <strong>
                    💡 Nursing Insight
                </strong>

                <p>
                    ${selected.insight}
                </p>

            </div>


        </div>

    `;


    document.body.appendChild(modal);


    // Animasi popup
    setTimeout(() => {
        modal.classList.add("active");
    }, 10);


    // Klik area luar popup
    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeReformCard();
        }

    });

}


// =====================================================
// CLOSE REFORM POPUP
// =====================================================

function closeReformCard() {

    const modal =
        document.querySelector(".health-stat-modal");

    if (!modal) return;


    modal.classList.remove("active");


    setTimeout(() => {
        modal.remove();
    }, 300);

}


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeReformCard();
    }

});

// =====================================================
// NURSING TECHNOLOGY - INTERACTIVE ROLE CARDS
// =====================================================

function openNursingTech(type) {

    const data = {

        communication: {
            icon: "💻",
            title: "Digital Communication",
            description:
                "Perawat menggunakan media digital untuk berkomunikasi dengan pasien, keluarga, dan anggota tim kesehatan secara efektif.",

            role:
                "Perawat perlu memastikan komunikasi digital tetap jelas, aman, empatik, dan sesuai dengan kebutuhan pasien.",

            benefit:
                "Mendukung komunikasi yang lebih cepat serta mempermudah koordinasi pelayanan kesehatan."
        },


        monitoring: {
            icon: "📊",
            title: "Patient Monitoring",
            description:
                "Teknologi digital dapat membantu perawat melakukan pemantauan kondisi pasien dan mengenali perubahan kondisi yang membutuhkan tindak lanjut.",

            role:
                "Perawat perlu mampu membaca data pemantauan, mengenali perubahan kondisi pasien, dan menentukan kapan diperlukan eskalasi atau kolaborasi dengan tenaga kesehatan lain.",

            benefit:
                "Membantu deteksi perubahan kondisi pasien lebih dini dan mendukung kesinambungan pemantauan."
        },


        education: {
            icon: "📚",
            title: "Health Education",
            description:
                "Media digital dapat digunakan untuk memberikan edukasi kesehatan kepada pasien dan keluarga dengan mempertimbangkan tingkat literasi kesehatan.",

            role:
                "Perawat berperan memilih media yang sesuai, menyampaikan informasi menggunakan bahasa yang mudah dipahami, serta memastikan pasien memahami edukasi yang diberikan.",

            benefit:
                "Edukasi dapat disampaikan secara lebih fleksibel dan dapat diakses kembali oleh pasien."
        },


        privacy: {
            icon: "🔐",
            title: "Data & Privacy",
            description:
                "Penggunaan teknologi kesehatan membutuhkan perlindungan terhadap kerahasiaan, keamanan, dan privasi data pasien.",

            role:
                "Perawat harus menjaga kerahasiaan informasi pasien, menggunakan sistem digital secara bertanggung jawab, serta mengikuti prinsip etika dan profesionalisme.",

            benefit:
                "Meningkatkan keamanan informasi kesehatan dan mempertahankan kepercayaan pasien."
        },


        coordination: {
            icon: "🤝",
            title: "Care Coordination",
            description:
                "Teknologi digital membantu perawat mengkoordinasikan kebutuhan pasien dengan dokter, keluarga, fasilitas kesehatan, dan tenaga kesehatan lainnya.",

            role:
                "Perawat berperan sebagai penghubung dalam tim kesehatan untuk memastikan informasi dan kebutuhan pasien dapat dikomunikasikan dengan tepat.",

            benefit:
                "Mendukung pelayanan yang lebih terkoordinasi dan berkesinambungan."
        },


        literacy: {
            icon: "🧠",
            title: "Digital Literacy",
            description:
                "Literasi digital membantu perawat menggunakan teknologi secara efektif sekaligus menilai informasi kesehatan secara kritis.",

            role:
                "Perawat perlu terus mengembangkan kemampuan digital, memahami keterbatasan teknologi, dan membantu pasien menggunakan informasi kesehatan digital secara bijak.",

            benefit:
                "Meningkatkan kemampuan perawat dan pasien dalam memanfaatkan teknologi kesehatan secara aman dan efektif."
        }

    };


    const selected = data[type];

    if (!selected) return;


    const modal = document.createElement("div");

    modal.className = "health-stat-modal";


    modal.innerHTML = `

        <div class="health-stat-box">

            <button
                class="health-modal-close"
                onclick="closeNursingTech()">
                ×
            </button>


            <div class="modal-icon">
                ${selected.icon}
            </div>


            <h2>
                ${selected.title}
            </h2>


            <p>
                ${selected.description}
            </p>


            <div class="health-insight">

                <strong>
                    👩‍⚕️ Peran Perawat
                </strong>

                <p>
                    ${selected.role}
                </p>

            </div>


            <div class="health-insight">

                <strong>
                    💡 Manfaat
                </strong>

                <p>
                    ${selected.benefit}
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("active");

    }, 10);


    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeNursingTech();
        }

    });

}


// =====================================================
// CLOSE NURSING TECHNOLOGY POPUP
// =====================================================

function closeNursingTech() {

    const modal =
        document.querySelector(".health-stat-modal");

    if (!modal) return;

    modal.classList.remove("active");

    setTimeout(() => {
        modal.remove();
    }, 300);

}


// =====================================================
// ESC TO CLOSE
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeNursingTech();
    }

});
// =====================================================
// ISLAMIC HEALTHCARE - INTERACTIVE HMI
// =====================================================

function openIslamicCare(type) {

    const data = {

        prayer: {
            icon: "🕌",
            title: "Memudahkan Ibadah & Solat Ketika Sakit",

            description:
                "Pasien Muslim tetap dapat menjalankan ibadah selama menjalani perawatan dengan menyesuaikan pelaksanaan ibadah terhadap kondisi kesehatan dan kemampuan fisiknya.",

            nursing:
                "Perawat dapat membantu mengidentifikasi kebutuhan pasien, memberikan informasi mengenai fasilitas yang tersedia, serta membantu pasien mendapatkan dukungan yang sesuai tanpa mengganggu keselamatan dan tindakan medis.",

            insight:
                "Kebutuhan spiritual merupakan bagian dari pendekatan holistic patient-centered care."
        },


        spiritual: {
            icon: "🤲",
            title: "Bimbingan Spiritual",

            description:
                "Dukungan spiritual dapat membantu pasien dan keluarga menghadapi kondisi sakit, kecemasan, maupun proses perawatan.",

            nursing:
                "Perawat perlu menghormati keyakinan pasien, memberikan kesempatan untuk menjalankan ibadah, dan menghubungkan pasien dengan sumber dukungan spiritual sesuai kebutuhan dan persetujuan pasien.",

            insight:
                "Dukungan spiritual dapat menjadi bagian dari pendekatan keperawatan yang holistik."
        },


        staff: {
            icon: "👩‍⚕️",
            title: "Kompetensi Staf",

            description:
                "Tenaga kesehatan perlu memiliki pemahaman mengenai kebutuhan spiritual dan praktik ibadah pasien Muslim dalam konteks pelayanan kesehatan.",

            nursing:
                "Perawat perlu meningkatkan pengetahuan mengenai kebutuhan spiritual pasien serta mampu berkomunikasi secara sensitif terhadap nilai agama dan budaya pasien.",

            insight:
                "Kompetensi budaya dan spiritual membantu perawat memberikan pelayanan yang lebih individual dan menghargai pasien."
        },


        holistic: {
            icon: "❤️",
            title: "Holistic Healthcare",

            description:
                "Pelayanan kesehatan holistik tidak hanya berfokus pada kondisi fisik, tetapi juga mempertimbangkan aspek psikologis, mental, sosial, dan spiritual pasien.",

            nursing:
                "Perawat melakukan pengkajian secara menyeluruh dan mengintegrasikan kebutuhan fisik serta spiritual pasien ke dalam rencana asuhan keperawatan.",

            insight:
                "Pendekatan holistik membantu pelayanan menjadi lebih patient-centered."
        },


        wudu: {
            icon: "💧",
            title: "Wuduk & Tayamum",

            description:
                "Pasien dengan keterbatasan fisik dapat membutuhkan fasilitas atau dukungan untuk menjalankan bersuci sesuai kondisi dan kemampuan.",

            nursing:
                "Perawat dapat membantu menyediakan akses terhadap fasilitas yang dibutuhkan dan berkolaborasi dengan pihak terkait apabila pasien membutuhkan bimbingan keagamaan.",

            insight:
                "Dukungan terhadap kebutuhan ibadah perlu tetap mempertimbangkan keselamatan pasien."
        },


        qibla: {
            icon: "🧭",
            title: "Arah Kiblat & Fasilitas Ibadah",

            description:
                "Fasilitas pelayanan dapat mendukung kebutuhan ibadah pasien melalui informasi arah kiblat, perlengkapan ibadah, dan ruang yang sesuai.",

            nursing:
                "Perawat dapat membantu pasien mengetahui fasilitas yang tersedia dan memastikan kebutuhan tersebut dapat diakses sesuai kondisi pasien.",

            insight:
                "Lingkungan pelayanan yang mendukung kebutuhan spiritual dapat meningkatkan kenyamanan pasien."
        },


        support: {
            icon: "🤲",
            title: "Spiritual Support",

            description:
                "Pasien dan keluarga dapat membutuhkan dukungan spiritual selama menghadapi proses penyakit dan perawatan.",

            nursing:
                "Perawat dapat melakukan pengkajian kebutuhan spiritual dan menghubungkan pasien dengan keluarga atau sumber dukungan keagamaan yang sesuai dengan keinginan pasien.",

            insight:
                "Spiritual support merupakan salah satu bentuk dukungan yang dapat melengkapi pelayanan kesehatan."
        }

    };


    const selected = data[type];

    if (!selected) return;


    const modal = document.createElement("div");

    modal.className = "health-stat-modal";


    modal.innerHTML = `

        <div class="health-stat-box">

            <button
                class="health-modal-close"
                onclick="closeIslamicCare()">
                ×
            </button>


            <div class="modal-icon">
                ${selected.icon}
            </div>


            <h2>
                ${selected.title}
            </h2>


            <p>
                ${selected.description}
            </p>


            <div class="health-insight">

                <strong>
                    👩‍⚕️ Peran Perawat
                </strong>

                <p>
                    ${selected.nursing}
                </p>

            </div>


            <div class="health-insight">

                <strong>
                    💡 Key Insight
                </strong>

                <p>
                    ${selected.insight}
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {
        modal.classList.add("active");
    }, 10);


    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeIslamicCare();
        }

    });

}


// =====================================================
// CLOSE POPUP
// =====================================================

function closeIslamicCare() {

    const modal =
        document.querySelector(".health-stat-modal");

    if (!modal) return;


    modal.classList.remove("active");


    setTimeout(() => {
        modal.remove();
    }, 300);

}


// =====================================================
// ESC TO CLOSE
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeIslamicCare();
    }

});

// =====================================================
// TELEMEDICINE INTERACTIVE
// =====================================================

function openTelemedicine(type) {

    const data = {

        // =========================
        // TIMELINE
        // =========================

        "1997": {
            icon: "📡",
            title: "1997 — Telemedicine Diperkenalkan",

            description:
                "Telemedicine mulai diperkenalkan di Malaysia untuk membantu tenaga medis di fasilitas luar bandar melakukan konsultasi dengan dokter spesialis di rumah sakit.",

            insight:
                "Teknologi memungkinkan tenaga kesehatan di wilayah dengan keterbatasan akses memperoleh dukungan dari tenaga ahli."
        },


        "2019": {
            icon: "💻",
            title: "2019 — Virtual Clinic",

            description:
                "Konsep Virtual Clinic berkembang sebagai bagian dari inisiatif reformasi kesehatan dan transformasi digital pelayanan kesehatan.",

            insight:
                "Perkembangan virtual care membuka peluang pelayanan kesehatan yang lebih fleksibel dan terhubung."
        },


        "2022": {
            icon: "🩺",
            title: "2022 — Virtual Consultation",

            description:
                "Pengembangan pedoman konsultasi secara maya mendukung penerapan pelayanan kesehatan digital yang lebih terstruktur.",

            insight:
                "Pelayanan virtual membutuhkan standar komunikasi, keamanan data, dan keselamatan pasien."
        },


        "2025": {
            icon: "🌐",
            title: "2025 — Online Healthcare Services",

            description:
                "Guideline on Online Healthcare Services 2025 menjadi panduan dalam penyediaan layanan kesehatan secara online.",

            insight:
                "Regulasi penting untuk memastikan penggunaan layanan kesehatan digital tetap aman, bermutu, dan bertanggung jawab."
        },


        // =========================
        // ONLINE SERVICES
        // =========================

        consultation: {
            icon: "🩺",
            title: "Virtual Consultation",

            description:
                "Konsultasi antara pasien dan tenaga kesehatan dapat dilakukan melalui platform digital yang sesuai dengan kebutuhan pelayanan.",

            insight:
                "Perawat perlu memastikan komunikasi berlangsung jelas, menjaga privasi pasien, dan mengenali kondisi yang membutuhkan pemeriksaan langsung."
        },


        followup: {
            icon: "📋",
            title: "Follow-up",

            description:
                "Layanan digital dapat digunakan untuk pemantauan dan tindak lanjut pasien dengan kondisi yang stabil.",

            insight:
                "Follow-up digital dapat membantu menjaga continuity of care dan mempermudah pemantauan pasien."
        },


        counselling: {
            icon: "👥",
            title: "Health Counselling",

            description:
                "Konseling kesehatan dapat diberikan secara digital untuk bidang tertentu seperti psikologi, nutrisi, dan rehabilitasi.",

            insight:
                "Perawat dapat memanfaatkan teknologi untuk memberikan edukasi dan mendukung perubahan perilaku kesehatan."
        },


        support: {
            icon: "🔬",
            title: "Support Services",

            description:
                "Layanan pendukung seperti obat, laboratorium, dan pemeriksaan imaging dapat terintegrasi dengan layanan digital dalam kondisi yang sesuai.",

            insight:
                "Integrasi berbagai layanan membantu menciptakan pelayanan yang lebih terkoordinasi."
        },


        // =========================
        // LIMITATIONS
        // =========================

        emergency: {
            icon: "🚨",
            title: "Emergency Cases",

            description:
                "Kondisi gawat darurat membutuhkan penanganan segera dan tidak ditujukan untuk layanan telemedicine.",

            insight:
                "Pasien dengan tanda kegawatdaruratan harus mendapatkan pelayanan langsung agar pemeriksaan dan tindakan segera dapat dilakukan."
        },


        complex: {
            icon: "🏥",
            title: "Complex Treatment",

            description:
                "Kondisi yang membutuhkan pemeriksaan fisik, prosedur, atau perawatan medis kompleks memerlukan pelayanan tatap muka.",

            insight:
                "Telemedicine memiliki keterbatasan karena tidak semua pemeriksaan dan tindakan dapat dilakukan secara virtual."
        },


        stable: {
            icon: "✓",
            title: "Stable Follow-up",

            description:
                "Pasien dengan kondisi stabil dan membutuhkan tindak lanjut tertentu dapat menggunakan layanan online sesuai ketentuan.",

            insight:
                "Pemilihan pasien yang tepat merupakan bagian penting dalam menjaga keselamatan pelayanan telemedicine."
        }

    };


    const selected = data[type];

    if (!selected) return;


    // Buat popup
    const modal = document.createElement("div");

    modal.className = "health-stat-modal";


    modal.innerHTML = `

        <div class="health-stat-box">

            <button
                class="health-modal-close"
                onclick="closeTelemedicine()">
                ×
            </button>


            <div class="modal-icon">
                ${selected.icon}
            </div>


            <h2>
                ${selected.title}
            </h2>


            <p>
                ${selected.description}
            </p>


            <div class="health-insight">

                <strong>
                    💡 Key Insight
                </strong>

                <p>
                    ${selected.insight}
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    // Animasi popup
    setTimeout(() => {

        modal.classList.add("active");

    }, 10);


    // Klik area luar
    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            closeTelemedicine();

        }

    });

}


// =====================================================
// CLOSE TELEMEDICINE POPUP
// =====================================================

function closeTelemedicine() {

    const modal =
        document.querySelector(".health-stat-modal");

    if (!modal) return;


    modal.classList.remove("active");


    setTimeout(() => {

        modal.remove();

    }, 300);

}


// =====================================================
// ESC TO CLOSE
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeTelemedicine();

    }

});