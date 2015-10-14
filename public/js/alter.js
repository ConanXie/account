define(['tool', 'add'], function (T, add) {
  var editBtnArr = document.querySelectorAll('.edit-btn');
  var li = null;
  for (var i = 0; i < editBtnArr.length; i++) {
    editBtnArr[i].addEventListener('click', function (e) {
      e.stopPropagation();
      add.formShow();
      add.formFunc = 'alter';
      paddingData(e);
    }, false);
  }
  function paddingData(e) {
    if (e.target.parentNode.nodeName === 'BUTTON') {
      li = e.target.parentNode.parentNode;
    } else {
      li = e.target.parentNode;
    }
    var textArray = li.querySelectorAll('.text');
    var form = add.addForm;
    for (var i = 0; i < textArray.length; i++) {
      var html = textArray[i].innerHTML;
      if (!/^\s*$/.test(html)) {
        if (!form[i]) {
          console.error(form[i], i);
        }
        T.addClass(form[i].parentNode, 'is-dirty is-upgraded');
        form[i].value = textArray[i].innerHTML;
      }
    }
  }
  function alterDatabase(data) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {};
    xhr.open('post', 'handle', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var text = '';
    for (var i in data) {
      text += `${i}=${data[i]}&`;
    }
    xhr.send(`${text}operate=alter`);
  }
  function alterItem() {
    var textArray = li.querySelectorAll('.text');
    var form = add.addForm;
    var data = {};
    for (var i = 0; i < textArray.length; i++) {
      if (form[i].value !== textArray[i].innerHTML) {
        textArray[i].innerHTML = form[i].value;
        var name = form[i].name;
        data[name] = form[i].value;
      }
    }
    if (JSON.stringify(data) !== '{}') {
      data._id = li.dataset.id;
      alterDatabase(data);
    }
  }
  return {
    init: function () {
      add.formSave.addEventListener('click', (e) => {
        if (add.formFunc === 'alter') {
          alterItem();
          add.addBoxRestore()
        }
      }, false);
    }
  };
});