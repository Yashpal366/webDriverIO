
class LoginPage {

    get usernameInputBox() {
        return $('[name="username"]')
    }
    get passwordInputBox() {
        return $('[name="password"]')
    }
    get submitBtn() {
        return $('#submit')
    }
    get messageTxt() {
        return $('.post-title')
    }

    async login(username, password) {
        await this.usernameInputBox.setValue(username)
        await this.passwordInputBox.setValue(password)
        await this.submitBtn.click()
    }

    async message(msg) {
        await expect(this.messageTxt).toHaveText(msg)
    }
}

module.exports = new LoginPage();