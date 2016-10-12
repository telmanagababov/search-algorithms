const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-linear": new LinearAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();