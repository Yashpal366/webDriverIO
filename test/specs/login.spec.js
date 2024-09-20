const LoginPage = require("../pageobjects/login.page");

describe('My tests', () => {
     
    it('Login Page Test', async ()=>{
        browser.url('https://practicetestautomation.com/practice-test-login/');
        browser.pause(10000)
        
        await LoginPage.login('student', 'Password123');
        await LoginPage.message('Logge In Successfully');

    })



})