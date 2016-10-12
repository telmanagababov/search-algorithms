const AlgorithmViewEnum = {
    NAME_PLACE_HOLDER: "{{name}}",
    DATA_PLACEHOLDER: "{{data}}",
    TIME_PLACEHOLDER: "{{time}}",
    TEMPLATE:
    "<div class='panel panel-success'>" +
        "<div class='panel-heading'>{{name}}</div>" +
        "<div class='panel-body'>" +
            "<div class='result-data well col-xs-9'>{{data}}</div>" +
            "<div class='result-time well col-xs-offset-1 col-xs-2'>{{time}}</div>" +
        "</div>" +
    "</div>"
};


class AlgorithmView {
    constructor() {
        this._view = AlgorithmViewEnum.TEMPLATE;
    }

    setName(name) {
        this._view = this._view.replace(AlgorithmViewEnum.NAME_PLACE_HOLDER, name);
    }

    setData(data) {
        this._view = this._view.replace(AlgorithmViewEnum.DATA_PLACEHOLDER, data);
    }

    setTime(time) {
        this._view = this._view.replace(AlgorithmViewEnum.TIME_PLACEHOLDER, parseInt(time) + "ms");
    }

    getView() {
        return this._view;
    }
}