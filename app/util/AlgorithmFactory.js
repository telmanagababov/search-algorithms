const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-linear": new LinearAlgorithm(),
        "algorithm-binary": new BinaryAlgorithm(),
        "algorithm-interpolation": new InterpolationAlgorithm(),
        "algorithm-fibonacci": new FibonacciAlgorithm(),
        "algorithm-ternary": new TernaryAlgorithm(),
        "algorithm-uniform": new UniformAlgorithm(),
        "algorithm-jump": new JumpAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();