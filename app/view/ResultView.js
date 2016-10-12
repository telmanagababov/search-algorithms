const ResultViewEnum = {
    RESULT_SELECTOR: "#result"
};

class ResultView {
    constructor() {
        this._view = document.querySelector(ResultViewEnum.RESULT_SELECTOR);
    }

    add(view) {
        this._view.innerHTML += view;
    }

    clear() {
        this._view.innerHTML = "";
    }
}