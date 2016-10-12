const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-linear": new LinearAlgorithm(),
        "algorithm-binary": new BinaryAlgorithm(),
        "algorithm-interpolation": new InterpolationAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();