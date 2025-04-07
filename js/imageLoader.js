// 预加载关键图片
const preloadImages = [
    '../image/head.png',
    '../image/about.jpg',
    '../image/blog.jpg',
    '../image/album.jpg',
    '../image/join.jpg'
];

// 预加载函数
function preloadCriticalImages() {
    preloadImages.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
    });
}

// 懒加载函数
function lazyLoadImages() {
    const images = document.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    preloadCriticalImages();
    lazyLoadImages();
});