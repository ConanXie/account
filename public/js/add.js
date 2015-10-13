define(['tool'], function (T) {
  return {
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
        this.formShow();
      }, true);
    },
    formShow: function () {
      T.addClass(this.addBox, 'index-box-show');
      T.removeClass(this.addBox, 'index-box-hide');
      T.css(this.addShow, {display: 'none'});
      setTimeout(() => {
        T.removeClass(this.addForm, 'form-hide');
        T.addClass(this.addFormInput[0], 'secshow0');
        T.addClass(this.addFormInput[1], 'secshow1');
        T.addClass(this.addFormInput[2], 'secshow2');
        T.addClass(this.addFormInput[3], 'secshow3');
        T.addClass(this.addFormInput[4], 'secshow4');
        T.addClass(this.addFormInput[5], 'secshow5');
        T.addClass(this.addFormInput[6], 'secshow6');
      }, 500);
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
    addItem: function () {},
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
        T.removeClass(this.addFormInput[4], 'secshow4');
        T.removeClass(this.addFormInput[5], 'secshow5');
        T.removeClass(this.addFormInput[6], 'secshow6');
      }, 500);
    },
  };
});