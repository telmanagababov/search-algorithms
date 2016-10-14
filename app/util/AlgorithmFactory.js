const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-linear": new LinearAlgorithm(),
        "algorithm-binary": new BinaryAlgorithm(),
        "algorithm-interpolation": new InterpolationAlgorithm(),
        "algorithm-fibonacci": new FibonacciAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();