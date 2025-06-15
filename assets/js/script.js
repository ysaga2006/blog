/* --- スクロール終端メッセージ --- */
#scroll-end-message {
    text-align: center;
    padding: 2rem 0;
    color: var(--color-text-light);
    /* 初期状態では透明で非表示にしておく */
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    /* フワッと表示するためのアニメーション設定 */
    transition: opacity 0.5s ease, transform 0.5s ease;
}

/* 表示用のクラスが付いた時のスタイル */
#scroll-end-message.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
