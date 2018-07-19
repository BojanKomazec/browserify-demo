module.exports = class Calculator  {
    constructor() {
        this.lastResult = 0;
    }
    getLastResult() {
        return this.lastResult;
    }

    add(a, b) {
        this.lastResult = a + b;
        return this.lastResult;
    }

    sub(a, b) {
        this.lastResult = a - b;
        return this.lastResult;
    }

    mul(a, b) {
        this.lastResult = a * b;
        return this.lastResult;
    }

    div(a, b) {
        this.lastResult = a / b;
        return this.lastResult;
    }
}