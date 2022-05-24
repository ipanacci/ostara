module.exports = new class  {
    status(code) {
        this.code = code;
        return this;
    }
    json(data) {          
        this.callbackTest(data);
        return this;
    }
};