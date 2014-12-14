var Class_Toolbox = {
    cssClass: {
        btnToday: "btn-today"
    },
    _goToday: function () {
        var self = this;
        var todayUnix = new Date().valueOf();
        self.datepicker._updateState("unix", todayUnix, true);
        self.datepicker.updateAllViews(self);
    },
    _render: function () {
        var self = this;
        $("<div>امروز</div>").addClass(self.cssClass.btnToday).click(function () {
            self._goToday();
            return false;
        }).appendTo(this.$container);
        return this;
    },
    init: function () {
        return this._render();
    }
};
var Toolbox = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Toolbox, options, {
        $container: container
    }]);
};
