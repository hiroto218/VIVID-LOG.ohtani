document.addEventListener("DOMContentLoaded", () => {
    
    // スクロール連動アニメーション (Intersection Observer)
    const animElements = document.querySelectorAll('.scroll-anim');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面内に入ったらクラスを付与してアニメーション実行
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1, // 要素が10%見えたら発火
        rootMargin: "0px 0px -50px 0px" 
    });

    animElements.forEach(el => observer.observe(el));

    // ナビゲーションのスムーズスクロール
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});