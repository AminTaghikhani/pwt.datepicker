const Datepicker = function (inputElement, options) {
    this.id = 321312312;
    this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
    this.inputElement = inputElement;
    this.initialUnix = null;
    this.options = new Options( options);
    this.state = new State(this);
    this.view = new View(this);

    this._defineOnInitState = function () {
        let garegurianDate = null;
        this.initialUnix = null;
        if ($(this.$container)[0].nodeName === 'INPUT') {
            garegurianDate = new Date(this.inputElement.getAttribute('value')).valueOf();
        }
        else {
            garegurianDate = new Date($(this.$container).data('date')).valueOf();
        }
        if (garegurianDate && garegurianDate != 'undefined') {
            this.initialUnix = garegurianDate;
        }
        else {
            this.initialUnix = new Date().valueOf();
        }
        return this;
    };
    this._updateStateOnInit = function () {
        this.state.updateView('unix', this.initialUnix);
    };
    this._defineOnInitState();
    this._updateStateOnInit();

    this.navigator = new Navigator(options, this);
    return {
        'datepicker': this,
        'state': this.state
    };
};