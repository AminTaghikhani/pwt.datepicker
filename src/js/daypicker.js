'use strict';
/**
 * @class ClassDaypicker
 * @type {{next: next, prev: prev, updateView: updateView, _updateView: _updateView, selectDay: selectDay, _updateNavigator: _updateNavigator, hide: hide, show: show, _updateSelectedDay: _updateSelectedDay, _render: _render, init: init}}
 */
var ClassDaypicker = {
    /**
     * Go to next Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    next: function () {
        var self = this;
        if (self.datepicker.state.view.month === 12) {
            self.datepicker.state.view.month = 1;
            self.datepicker.state.view.year += 1;
        } else {
            self.datepicker.state.view.month += 1;
        }
        self._updateView();
        return this;
    },


    /**
     * Go to previews Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    prev: function () {
        var self = this;
        if (self.datepicker.state.view.month === 1) {
            self.datepicker.state.view.month = 12;
            self.datepicker.state.view.year -= 1;
        } else {
            self.datepicker.state.view.month -= 1;
        }
        self._updateView();
        return this;
    },


    /**
     * Update view
     * @public
     * @returns {ClassDaypicker}
     */
    updateView: function () {
        this._updateView();
        return this;
    },


    /**
     *
     * @returns {ClassDaypicker}
     * @private
     */
    _updateView: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.view.year, self.datepicker.state.view.month);
        self._updateNavigator(self.datepicker.state.view.year, self.datepicker.state.view.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        return this;
    },


    /**
     * @public
     * @returns {ClassDaypicker}
     */
    selectDay: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        self._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        this._updateView();
        return this;
    },


    /**
     *
     * @param year
     * @param month
     * @private
     */
    _updateNavigator: function (year, month) {
        var self = this;
        var pdateStr = new persianDate([year, month]).format(self.datepicker.daysTitleFormat);
        self.datepicker.updateNavigator(pdateStr);
        return this;
    },


    /**
     * @public
     * @returns {ClassDaypicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @public
     * @returns {ClassDaypicker}
     */
    show: function () {
        this.container.show();
        this._updateView();
        return this;
    },


    /**
     *
     * @param unix
     * @returns {ClassDaypicker}
     * @private
     */
    _updateSelectedDay: function (unix) {
        this.mGrid.markSelectedDate(unix);
        return this;
    },


    /**
     *
     * @private
     */
    _render: function () {
        var self = this;
        this.mGrid = new MonthGrid({
            container: self.container,
            month: self.datepicker.state.selected.month,
            year: self.datepicker.state.selected.year
        });
        this.mGrid.attachEvent("selectDay", function (x) {
            self.datepicker.selectDate('unix', x);
            self.mGrid.selectDate(self.datepicker.state.selected.unixDate);
        });
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
    },


    /**
     * @private
     * @returns {Class_Daypicker}
     */
    init: function () {
        var self = this;
        this._render();
        this._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        return this;
    }
};


/**
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassDaypicker
 */
var Daypicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassDaypicker, options, {
        container: container
    }]);
};
