// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 祝福卡片功能
    const wishBtn = document.getElementById('wishBtn');
    const wishMessage = document.getElementById('wishMessage');

    if (wishBtn && wishMessage) {
        wishBtn.addEventListener('click', function() {
            if (wishMessage.classList.contains('show')) {
                wishMessage.classList.remove('show');
                wishBtn.textContent = '打开祝福';
            } else {
                wishMessage.classList.add('show');
                wishBtn.textContent = '收起祝福';
            }
        });
    }

    // 页面滚动时的动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为需要动画的元素添加观察
    const animatedElements = document.querySelectorAll('.message-content, .photo-item, .wish-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // 添加一些随机的爱心动画
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = `rgba(255, 71, 87, ${Math.random() * 0.5 + 0.5})`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // 每隔一段时间创建一个浮动爱心
    setInterval(createFloatingHeart, 2000);
});