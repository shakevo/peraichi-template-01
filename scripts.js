document.addEventListener("DOMContentLoaded", function() {
    // セクション内のページ内リンクを取得
    const links = document.querySelectorAll('section a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    
    const accordionButtons = document.querySelectorAll('.accordion button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);

            const content = this.nextElementSibling;
            if (!expanded) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
