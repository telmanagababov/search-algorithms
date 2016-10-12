window.onload = () => {

    let preloaderView = new PreloaderView(),
        inputView = new InputView(),
        resultView = new ResultView();

    inputView.onStart = () => {
        let algorithm = null,
            algorithmView = null;

        inputView.disableStart();
        preloaderView.show();
        resultView.clear();

        setTimeout(() => {
            inputView.getAlgorithms().forEach(algorithmType => {
                algorithm = algorithmsFactory.getAlgorithm(algorithmType);
                resultGenerator.setValues(inputView.getData(), inputView.getSearchTimes(), inputView.getSearchValue());
                resultGenerator.setAlgorithm(algorithm);
                algorithmView = resultGenerator.generateResult();
                resultView.add(algorithmView);
            });
            preloaderView.hide();
            inputView.enableStart();
        }, 0);
    };
};