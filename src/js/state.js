/**
 *
 * @type {{view: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, selected: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, _updateSelectedUnix: _updateSelectedUnix, setTime: setTime, setSelected: setSelected, syncViewWithelected: syncViewWithelected, setView: setView}}
 */
var Class_DatepickerState = {
    /**
     * view
     */
    view: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     * selected
     */
    selected: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     *
     * @returns {Class_DatepickerState}
     * @private
     */
    _updateSelectedUnix: function () {
        this.selected.dateObj = new persianDate([this.selected.year,
            this.selected.month,
            this.selected.date,
            this.selected.hour,
            this.selected.minute,
            this.selected.second
        ])
        this.selected.unixDate = this.selected.dateObj.valueOf();
        return this;
    },


    /**
     *
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setTime: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
            {
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.hour = pd.hour();
                self.selected.minute = pd.minute();
                self.selected.second = pd.second();
                self._updateSelectedUnix();
                break;
            }
            case 'hour':
            {
                this.selected.hour = value;
                self._updateSelectedUnix();
                break;
            }
            case 'minute':
            {
                this.selected.minute = value;
                self._updateSelectedUnix();
                break;
            }
            case 'second':
            {
                this.selected.second = value;
                self._updateSelectedUnix();
                break;
            }
        }
        return this;
    },


    /**
     *
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setSelected: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
            {
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                self._updateSelectedUnix();
                break;
            }
            case 'year':
            {
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            }
            case 'month':
            {
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            }
            case 'date':
            {
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            }
        }
        return this;
    },


    /**
     *
     * @returns {Class_DatepickerState}
     */
    syncViewWithelected: function () {
        this.view.year = this.selected.year;
        this.view.month = this.selected.month;
        this.view.date = this.selected.date;
        this.view.unixDate = this.selected.unixDate;
        return this;
    },


    /**
     *
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setView: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
            {
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                self.view.unixDate = value;
                break;
            }
            case 'year':
            {
                this.view.year = value;

            }
            case 'month':
            {
                this.view.month = value;
            }
            case 'date':
            {
                this.view.month = value;
            }
        }
        return this;
    }
};


/**
 *
 * @param options
 * @returns {*}
 * @constructor
 */
var State = function (options) {
    return inherit(this, [Class_DatepickerState, options]);
};

