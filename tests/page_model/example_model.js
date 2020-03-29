import {Selector, t} from 'testcafe';

export default class ExamplePage {
    constructor() {
        this.inputName = Selector('#developer-name');
        this.checkboxRemoteTesting = Selector('#remote-testing');
        this.checkboxReusingJsCode = Selector('#reusing-js-code');
        this.checkboxBackgroundParallel = Selector('#background-parallel-testing');
        this.checkboxContinousIntegration =Selector('#continuous-integration-embedding')
        this.checkboxAdvanceTraffic = Selector('#traffic-markup-analysis');
        this.optionSystem = Selector('input').withAttribute('id','macos');
        this.optionSelect = Selector('#preferred-interface');
        this.optionOptions = this.optionSelect.find('option');
        this.checkboxTriedTestCafe = Selector('#tried-test-cafe');
        this.inputComment = Selector('#comments');
        this.buttonSubmit = Selector('#submit-button');
        this.message = Selector('#article-header');
        
    }
}