const resultGenerator = (() => {

    let algorithm = null,
        inputData = 0,
        timesToSearch = 0,
        valueToSearch = 0,
        searchResult = 0,
        startTime = 0,
        elapsedTime = 0;

    function setAlgorithm (value) {
        algorithm = value;
    }

    function setValues (data, times, value) {
        inputData = data;
        timesToSearch = times;
        valueToSearch = value;
    }

    function generateResult () {
        let algorithmView = new AlgorithmView();

        startTime = performance.now();
        for(let i = 0; i < timesToSearch; i++) {
            searchResult = algorithm.search(inputData, valueToSearch);
        }
        elapsedTime = performance.now() - startTime;

        algorithmView.setName(algorithm.type);
        algorithmView.setData("index: " + searchResult + ", value: " + inputData[searchResult]);
        algorithmView.setTime(elapsedTime);
        return algorithmView.getView();
    }

    return {
        setAlgorithm: setAlgorithm,
        setValues: setValues,
        generateResult: generateResult
    }
})();