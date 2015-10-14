define(['tool'], function (T) {
  function Add() {};
  Add.prototype = {
    formFunc: 'add',
    init: function () {
      this.initNode();
      this.menuBtnEvent();
      this.mask1Event();
      this.addShowEvent();
      this.formBtnEvent();
    },
    initNode: function () {
      this.body = document.body;
      this.nav = document.querySelector('nav');
      this.menuBtn = document.querySelector('.menu-btn');
      this.mask1 = document.querySelector('#mask1');
      this.mask2 = document.querySelector('#mask2');
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
        this.mask1.className = 'mask mask-show';
        this.aside.className = 'aside-show';
      }, false);
    },
    mask1Event: function () {
      this.mask1.addEventListener('click', (e) => {
        this.mask1.className = 'mask mask-hide';
        this.aside.className = 'aside-hide';
        setTimeout(() => {
          this.mask1.className = 'mask';
        }, 500);
      }, false);
    },
    mask2Show: function () {
      this.mask2.className = 'mask mask-show';
    },
    mask2Hide: function () {
      this.mask2.className = 'mask mask-hide';
      setTimeout(() => {
        this.mask2.className = 'mask';
      }, 500);
    },
    addShowEvent: function () {
      this.addShow.addEventListener('click', (e) => {
        this.formShow();
        this.formFunc = 'add';
      }, true);
    },
    formShow: function () {
      T.addClass(this.addBox, 'index-box-show');
      T.removeClass(this.addBox, 'index-box-hide');
      T.css(this.addShow, {display: 'none'});
      this.mask2Show();
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
      this.formSave.addEventListener('click', (e) => {
        if (this.formFunc === 'add') {
          this.addItem();
          this.addBoxRestore();
        }
      }, false);
      this.formCancel.addEventListener('click', (e) => {
        this.addBoxRestore();
      }, false);
    },
    addItem: function () {
      console.log(this.formFunc);
      var form = this.addForm;
      var li = document.createElement('li');
      
    },
    clearForm: function () {
      var form = this.addForm;
      for (var i = 0; i < form.length; i++) {
        T.removeClass(form[i].parentNode, 'is-dirty is-upgraded');
        form[i].value = '';
      }
    },
    addBoxRestore: function () {
      T.addClass(this.addForm, 'form-hide');
      T.removeClass(this.addBox, 'index-box-show');
      T.addClass(this.addBox, 'index-box-hide');
      T.css(this.addShow, {display: 'block'});
      this.mask2Hide();
      this.clearForm();
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
  return new Add();
});