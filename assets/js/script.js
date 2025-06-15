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
    // ... 既存のコード ...

// --- ▼ここから追加：リーディングプログレスバー機能▼ ---

// 記事ページにしか存在しないプログレスバーの要素を取得
const progressBar = document.getElementById('progress-bar');

// プログレスバーが存在する場合のみ、スクロールイベントの監視を開始
if (progressBar) {
    window.addEventListener('scroll', () => {
        // スクロール可能な高さ全体を計算
        let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // 現在の進捗をパーセンテージで計算
        let scrollProgress = (window.scrollY / scrollableHeight) * 100;

        // プログレスバーの幅を更新
        progressBar.style.width = scrollProgress + "%";
    });
}
});
