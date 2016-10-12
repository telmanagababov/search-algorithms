const InputViewEnum = {
    INPUT_DEFAULT_AMOUNT: 25000,
    INPUT_DEFAULT_RANGE: 10000,
    START_BUTTON_SELECTOR: "#panel-start",
    DATA_INPUT_SELECTOR: "#data-input",
    ALGORITHMS_SELECTOR: "#algorithms",
    ACTIVE_INPUT_SELECTOR: ".active input"
};

class InputView {
    constructor() {
        this._startButton = document.querySelector(InputViewEnum.START_BUTTON_SELECTOR);
        this._startButton.onclick = () => {this.onStart();};
        this._dataInput = document.querySelector(InputViewEnum.DATA_INPUT_SELECTOR);
        this._dataInput.innerHTML = Array.from(new Array(InputViewEnum.INPUT_DEFAULT_AMOUNT))
            .map(() => parseInt(Math.random() * InputViewEnum.INPUT_DEFAULT_RANGE)).join();
        this._algorithms = document.querySelector(InputViewEnum.ALGORITHMS_SELECTOR);
    }

    getInputData() {
        return this._dataInput.value.split(",").map(value => parseInt(value));
    }

    getInputAlgorithms() {
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