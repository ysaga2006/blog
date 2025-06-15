/*
 * script.js
 * ミニマリストブログのインタラクションを制御 (完成版)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- テーマ切り替え機能 ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const applyTheme = (theme) => {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            const lightColor = "#FFFFFF";
            const darkColor = "#121212";

            if (theme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                if (themeColorMeta) themeColorMeta.setAttribute('content', darkColor);
            } else {
                document.body.removeAttribute('data-theme');
                if (themeColorMeta) themeColorMeta.setAttribute('content', lightColor);
            }
            localStorage.setItem('theme', theme);
        };

        const loadTheme = () => {
            const savedTheme = localStorage.getItem('theme') || 'light';
            applyTheme(savedTheme);
        };

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.dataset.theme;
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
        
        loadTheme();
    }

    // --- 「最後まで読んだ」メッセージ機能 ---

    // 記事ページにしか存在しない「ありがとうメッセージ」の要素を取得
    const scrollEndMessage = document.getElementById('scroll-end-message');

    // 「ありがとうメッセージ」が存在する場合のみ、スクロールイベントの監視を開始
    if (scrollEndMessage) {
        let isMessageShown = false; // メッセージが一度表示されたかを記録するフラグ

        window.addEventListener('scroll', () => {
            // メッセージがまだ表示されていなくて、ページの最下部近くまでスクロールされた場合
            if (!isMessageShown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
                scrollEndMessage.classList.add('visible');
                isMessageShown = true; // フラグを立てて、何度も処理が走らないようにする
            }
        });
    }
});
