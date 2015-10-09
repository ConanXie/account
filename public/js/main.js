var T = {
    addClass: function (node, value) {
        value = value.trim().replace(/\s{2,}/, ' ');
        if (value && typeof value === 'string') {
            var className = node.className;
            if (!className) {
                node.className = value;
            } else {
                className = ` ${className} `;
                value.split(' ').forEach(function (item) {
                    if (!~className.indexOf(` ${item} `)) {
                        className = `${className}${item} `;
                    }
                });
                node.className = className.trim();
            }
        }
    },
    removeClass: function (node, value) {
        value = value.trim().replace(/\s{2,}/, ' ');
        if (value && typeof value === 'string') {
            var className = node.className;
            if (className) {
                className = ` ${className} `;
                value.split(' ').forEach(function (item) {
                    if (~className.indexOf(` ${item} `)) {
                        className = className.replace(` ${item} `, ' ');
                    }
                });
            }
            node.className = className.trim();
        }
    },
    css: function (node, config) {
        for (var i in config) {
            node.style[i] = config[i];
        }
    }
};
var Add = {
    init: function () {
        this.initNode();
        this.menuBtnEvent();
        this.maskEvent();
        this.addShowEvent();
        this.formBtnEvent();
    },
    initNode: function () {
        this.body = document.body;
        this.nav = document.querySelector('nav');
        this.menuBtn = document.querySelector('.menu-btn');
        this.mask = document.querySelector('.mask');
        this.aside = document.querySelector('aside');
        this.addBox = document.querySelector('.index-add');
        this.addShow = document.querySelector('.add-show-e');
        this.addForm = document.querySelector('.add-form');
        this.addFormInput = document.querySelectorAll('.form-sec');
        this.formSave = document.querySelector('.add-save');
        this.formCancel = document.querySelector('.add-cancel');
    },
    menuBtnEvent: function () {
        this.menuBtn.addEventListener('click', (e) => {
            this.mask.className = 'mask mask-show';
            this.aside.className = 'aside-show';
        }, false);
    },
    maskEvent: function () {
        var that = this;
        this.mask.addEventListener('click', (e) => {
            this.mask.className = 'mask mask-hide';
            this.aside.className = 'aside-hide';
            setTimeout(() => {
                this.mask.className = 'mask';
            }, 500);
        }, false);
    },
    addShowEvent: function () {
        this.addShow.addEventListener('click', (e) => {
            e.stopPropagation();
            T.addClass(this.addBox, 'index-box-show');
            T.removeClass(this.addBox, 'index-box-hide');
            T.css(e.target, {display: 'none'});
            setTimeout(() => {
                T.removeClass(this.addForm, 'form-hide');
                T.addClass(this.addFormInput[0], 'secshow0');
                T.addClass(this.addFormInput[1], 'secshow1');
                T.addClass(this.addFormInput[2], 'secshow2');
                T.addClass(this.addFormInput[3], 'secshow3');
            }, 500);
        }, true);
    },
    formBtnEvent: function () {
        var that = this;
        this.formSave.addEventListener('click', (e) => {
            this.addBoxRestore();
        }, false);
        this.formCancel.addEventListener('click', (e) => {
            this.addBoxRestore();
        }, false);
    },
    addBoxRestore: function () {
        T.addClass(this.addForm, 'form-hide');
        T.removeClass(this.addBox, 'index-box-show');
        T.addClass(this.addBox, 'index-box-hide');
        T.css(this.addShow, {display: 'block'});
        setTimeout(() => {
            T.removeClass(this.addFormInput[0], 'secshow0');
            T.removeClass(this.addFormInput[1], 'secshow1');
            T.removeClass(this.addFormInput[2], 'secshow2');
            T.removeClass(this.addFormInput[3], 'secshow3');
        }, 500);
    },
};
window.onload = function () {
    Add.init();
};