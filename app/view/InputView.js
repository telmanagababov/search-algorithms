const InputViewEnum = {
    DATA_AMOUNT: 20000,
    DATA_RANGE: 10000,
    SEARCH_TIMES: 10000,
    START_BUTTON_SELECTOR: "#panel-start",
    DATA_SELECTOR: "#data-input",
    SEARCH_VALUE_SELECTOR: "#search-value-input",
    SEARCH_TIMES_SELECTOR: "#search-times-input",
    ALGORITHMS_SELECTOR: "#algorithms",
    ACTIVE_INPUT_SELECTOR: ".active input"
};

class InputView {
    constructor() {
        this._startButton = document.querySelector(InputViewEnum.START_BUTTON_SELECTOR);
        this._startButton.onclick = () => {this.onStart();};
        this._data = document.querySelector(InputViewEnum.DATA_SELECTOR);
        this._data.innerHTML = Array.from(new Array(InputViewEnum.DATA_AMOUNT))
            // .map(() => parseInt(Math.random() * InputViewEnum.DATA_RANGE)).join();
            .map((value, i) => i * 5).join();
        this._searchTimes = document.querySelector(InputViewEnum.SEARCH_TIMES_SELECTOR);
        this._searchTimes.value = InputViewEnum.SEARCH_TIMES;
        this._searchIndex = Math.floor(Math.random() * this.getData().length);
        this._searchValue = document.querySelector(InputViewEnum.SEARCH_VALUE_SELECTOR);
        this._searchValue.value = this.getData()[this._searchIndex];
        this._algorithms = document.querySelector(InputViewEnum.ALGORITHMS_SELECTOR);
    }

    getData() {
        return this._data.value.split(",").map(value => parseInt(value));
    }

    getSearchTimes() {
        return parseInt(this._searchTimes.value);
    }

    getSearchValue() {
        return parseInt(this._searchValue.value);
    }

    getAlgorithms() {
        let checkedAlgorithms = this._algorithms.querySelectorAll(InputViewEnum.ACTIVE_INPUT_SELECTOR);
        return Array.from(checkedAlgorithms).map(data => data.id);
    }

    enableStart() {
        this._startButton.disabled = false;
    }

    disableStart() {
        this._startButton.disabled = true;
    }

    onStart() {
    }

}