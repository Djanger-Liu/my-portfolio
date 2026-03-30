// 移动端菜单
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('sidebarOverlay');

function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

menuToggle.addEventListener('click', openMenu);
overlay.addEventListener('click', closeMenu);

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// 滚动高亮当前导航项
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    let current = '';

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// 图片灯箱
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});
