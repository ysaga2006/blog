/*
 * script.js
 * ミニマリストブログのインタラクションを制御
 * (Jekyll移行に伴い、テーマ切り替え機能のみに簡素化)
 */

// 「ページのHTML部品が全て揃ってから、中の処理を実行してください」というおまじない
document.addEventListener('DOMContentLoaded', () => {

    // --- これより下、全てのコードがこの枠組みの内側にあることが重要です ---

    // --- テーマ管理 ---
    const themeToggle = document.getElementById('theme-toggle');

    /**
     * 指定されたテーマを適用し、localStorageに保存する
     * @param {string} theme - 'light' または 'dark'
     */
    const applyTheme = (theme) => {
    // HTML内のtheme-colorメタタグを探す
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    // CSSで定義したライト/ダークの背景色
    const lightColor = "#FFFFFF";
    const darkColor = "#121212";

    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        // ブラウザのバーの色をダークモード用に設定
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', darkColor);
        }
    } else {
        document.body.removeAttribute('data-theme');
        // ブラウザのバーの色をライトモード用に設定
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', lightColor);
        }
    }
    localStorage.setItem('theme', theme);
};

    /**
     * ページ読み込み時にlocalStorageからテーマを復元する
     */
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    };

    // --- テーマ切り替えのイベントリスナー ---
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.dataset.theme;
        if (currentTheme === 'dark') {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });

    // --- 初期化処理 ---
    // ページが読み込まれた時点で、保存されているテーマ設定を反映させる
    loadTheme();

}); // ← 全ての処理が、この閉じ括弧の内側にあることを確認してください
