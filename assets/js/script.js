/*
 * script.js
 * ミニマリストブログのインタラクションを制御
 * (Jekyll移行に伴い、テーマ切り替え機能のみに簡素化)
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- テーマ管理 ---
    const themeToggle = document.getElementById('theme-toggle');

    /**
     * 指定されたテーマを適用し、localStorageに保存する
     * @param {string} theme - 'light' または 'dark'
     */
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
        } else {
            document.body.removeAttribute('data-theme');
            themeToggle.checked = false;
        }
        localStorage.setItem('theme', theme);
    };

    /**
     * ページ読み込み時にlocalStorageからテーマを復元する
     */
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light'; // デフォルトはライトモード
        applyTheme(savedTheme);
    };

    // --- テーマ切り替えのイベントリスナー ---
    // トグルが変更されたら、選択に応じたテーマを適用する
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    });


    // --- 初期化処理 ---
    // ページが読み込まれた時点で、保存されているテーマ設定を反映させる
    loadTheme();
});