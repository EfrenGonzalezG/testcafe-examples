import ExamplePage from '../page_model/example_model';

const page = new ExamplePage();

fixture `Example page tests`
    .page `https://devexpress.github.io/testcafe/example/`;
test('input name', async t =>{
    const name = 'Efren';
    await t
        .typeText(page.inputName, name)
        .click(page.checkboxRemoteTesting)
        .click(page.checkboxReusingJsCode)
        .click(page.checkboxBackgroundParallel)
        .click(page.checkboxContinousIntegration)
        .click(page.checkboxAdvanceTraffic)
        .click(page.optionSystem)
        .click(page.optionSelect)
        .click(page.optionOptions.withText('JavaScript API'))
        .click(page.checkboxTriedTestCafe)
        .typeText(page.inputComment, 'Hola amigos')
        .click(page.buttonSubmit)
        .wait(5000)
        await t.expect(page.message.innerText).contains('Thank you, Efren!')
        ;
});