// Toggle Menu Functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const toggleIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    // 1. إضافة/إزالة كلاس active لإظهار وإخفاء القائمة
    navMenu.classList.toggle('active');

    // 2. تغيير أيقونة البرجر (bars) لأيقونة إغلاق (X) عند الفتح
    if (navMenu.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
});

// إغلاق القائمة تلقائياً عند الضغط على أي رابط بداخلها
const navLinks = document.querySelectorAll('#navMenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    });
});
