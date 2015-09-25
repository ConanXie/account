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
window.onload = function () {
    var body = document.body;
    var nav = document.querySelector('nav');
    var menuBtn = document.querySelector('.menu-btn');
    var mask = document.querySelector('.mask');
    var aside = document.querySelector('aside');
    var addBox = document.querySelector('.index-add');
    var addShow = document.querySelector('.add-show-e');
    var addForm = document.querySelector('.add-form');
    var addFormInput = document.querySelectorAll('.form-sec');
    var formSave = document.querySelector('.add-save');
    menuBtn.addEventListener('click', function () {
        mask.className = 'mask mask-show';
        aside.className = 'aside-show';
    }, false);
    mask.addEventListener('click', function () {
        mask.className = 'mask mask-hide';
        aside.className = 'aside-hide';
        setTimeout(function () {
            mask.className = 'mask';
        }, 500);
    }, false);
    addShow.addEventListener('click', function (e) {
        e.stopPropagation();
        T.addClass(addBox, 'index-box-show');
        T.removeClass(addBox, 'index-box-hide');
        T.css(e.target, {display: 'none'});
        setTimeout(function () {
            T.removeClass(addForm, 'form-hide');
            T.addClass(addFormInput[0], 'secshow0');
            T.addClass(addFormInput[1], 'secshow1');
            T.addClass(addFormInput[2], 'secshow2');
            T.addClass(addFormInput[3], 'secshow3');
        }, 500);
    }, true);
    formSave.addEventListener('click', function (e) {
        e.stopPropagation();
        T.addClass(addForm, 'form-hide');
        T.removeClass(addBox, 'index-box-show');
        T.addClass(addBox, 'index-box-hide');
        T.css(addShow, {display: 'block'});
        setTimeout(function () {
            T.removeClass(addFormInput[0], 'secshow0');
            T.removeClass(addFormInput[1], 'secshow1');
            T.removeClass(addFormInput[2], 'secshow2');
            T.removeClass(addFormInput[3], 'secshow3');
        }, 500);
    }, false);
};