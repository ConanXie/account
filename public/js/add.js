define(['tool'], function (T) {
  var icons = ['schedule', 'subject', 'format_list_bulleted', 'attach_money', 'today', 'mode_comment'];
  var items = ['日期', '类别', '子类', '花费', '名称', '备注'];
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
      this.ul = document.querySelector('ul');
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
    handleDB: function (data, operate) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {};
      xhr.open('post', 'handle', true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(`${data}operate=${operate}`);
    },
    getFormData: function () {
      var form = this.addForm;
      var data = '';
      for (var i = 0; i < form.length; i++) {
        data += `${[form[i].name]}=${form[i].value}&`;
      }
      return data;
    },
    addItem: function () {
      this.handleDB(this.getFormData(), 'add');
      var form = this.addForm;
      var li = document.createElement('li');
      for (var j = 0; j < form.length; j++) {
        var p = document.createElement('p');
        var i = document.createElement('i');
        i.className = 'material-icons';
        i.innerHTML = icons[j];
        var strong = document.createElement('strong');
        strong.innerHTML = items[j];
        var span = document.createElement('span');
        span.className = 'text';
        if (!j && !form[j].value) {
            var date = new Date();
            var text = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        } else {
          var text = form[j].value
        }
        span.innerHTML = text;
        p.appendChild(i);
        p.appendChild(strong);
        p.appendChild(span);
        li.appendChild(p);
      }
      var button1 = document.createElement('button');
      button1.className = 'mdl-button mdl-js-button mdl-button--icon edit-btn';
      button1.addEventListener('click', (e) => {
        e.stopPropagation();
        this.formShow();
        this.formFunc = 'alter';
        paddingData(e);
      }, false);
      var i1 = document.createElement('i');
      i1.className = 'material-icons';
      i1.innerHTML = 'mode_edit';
      button1.appendChild(i1);
      var button2 = document.createElement('button');
      button2.className = 'mdl-button mdl-js-button mdl-button--icon delete-btn';
      var i2 = document.createElement('i');
      i2.className = 'material-icons';
      i2.innerHTML = 'delete';
      button2.appendChild(i2);
      li.appendChild(button1);
      li.appendChild(button2);
      this.ul.appendChild(li);
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