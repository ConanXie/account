define(['add'], function (add) {
  document.querySelector('.edit-btn').addEventListener('click', function () {
    console.log(add);
    add.formShow();
  }, false);
});