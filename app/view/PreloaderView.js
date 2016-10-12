const PreloaderViewEnum = {
    PRELOADER_SELECTOR: "#preloader",
    HIDDEN_CLASS: "hidden"
};

class PreloaderView {
    constructor() {
        this._preloader = document.querySelector(PreloaderViewEnum.PRELOADER_SELECTOR);
    }

    show() {
        this._preloader.classList.remove(PreloaderViewEnum.HIDDEN_CLASS);
    }

    hide() {
        this._preloader.classList.add(PreloaderViewEnum.HIDDEN_CLASS);
    }
}