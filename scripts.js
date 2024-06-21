document.addEventListener("DOMContentLoaded", function() {
    // セクション内のページ内リンクを取得
    const links = document.querySelectorAll('section a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // 既定のリンク動作をキャンセル
            event.preventDefault();
            // ターゲットIDを取得
            const targetId = event.target.getAttribute('href').substring(1);
            // ターゲットIDを元にターゲットセクションを取得
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // アコーディオンボタンを取得
    const accordionButtons = document.querySelectorAll('.accordion button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 展開状態を取得
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            // 展開状態を切り替える
            this.setAttribute('aria-expanded', !expanded);

            // ボタンの要素(コンテンツ)を取得
            const content = this.nextElementSibling;
            if (!expanded) {
                // 展開する場合
                content.style.display = 'block';
            } else {
                // 閉じる場合
                content.style.display = 'none';
            }
        });
    });
});
