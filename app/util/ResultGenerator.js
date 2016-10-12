const resultGenerator = (() => {

    const TIMES_TO_SEARCH = 10000;

    let algorithmView = null;
    let indexToSearch = 0,
        valueToSearch = 0,
        searchResult = 0,
        startTime = 0,
        elapsedTime = 0;

    function getResult (data, algorithm) {
        //init
        algorithmView = new AlgorithmView();
        indexToSearch = Math.floor(Math.random() * data.length);
        valueToSearch = data[indexToSearch];

        //calculate
        startTime = performance.now();
        for(let i = 0; i < TIMES_TO_SEARCH; i++) {
            searchResult = algorithm.search(data, valueToSearch);
        }
        elapsedTime = performance.now() - startTime;

        //set result
        algorithmView.setName(algorithm.type + " [search " + TIMES_TO_SEARCH + " times for " + valueToSearch +"]");
        algorithmView.setData("index: " + searchResult + ", value: " + data[searchResult]);
        algorithmView.setTime(elapsedTime);
        return algorithmView.getView();
    }

    return {
        getResult: getResult
    }
})();