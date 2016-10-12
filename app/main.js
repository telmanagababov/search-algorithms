window.onload = () => {

    let preloaderView = new PreloaderView(),
        inputView = new InputView(),
        resultView = new ResultView();

    inputView.onStart = () => {
        let data = inputView.getInputData();
        inputView.disableStart();
        preloaderView.show();
        resultView.clear();

        setTimeout(() => {
            inputView.getInputAlgorithms().forEach(algorithmType => {
                let algorithm = algorithmsFactory.getAlgorithm(algorithmType),
                    algorithmView = resultGenerator.getResult(data.slice(), algorithm);
                resultView.add(algorithmView);
            });
            preloaderView.hide();
            inputView.enableStart();
        }, 0);
    };
};