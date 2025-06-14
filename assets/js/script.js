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
themeToggle.addEventListener('click', () => { // ← 'click'イベントに変更
    // 現在のテーマ状態を取得 (bodyにdata-theme属性があるかどうか)
    const currentTheme = document.body.dataset.theme;
    
    // 現在がダークならライトに、そうでなければダークに切り替える
    if (currentTheme === 'dark') {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }
});

// applyTheme関数からもチェックボックス操作の行を削除
const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        // themeToggle.checked = true; // この行は不要なので削除
    } else {
        document.body.removeAttribute('data-theme');
        // themeToggle.checked = false; // この行は不要なので削除
    }
    localStorage.setItem('theme', theme);
};


    // --- 初期化処理 ---
    // ページが読み込まれた時点で、保存されているテーマ設定を反映させる
    loadTheme();
});
