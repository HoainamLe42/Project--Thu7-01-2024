console.log(navBar);

// for (let i = 0; i < navBar.length; i++) {
//   navBar[i].onclick = function () {
//     alert(`${this.innerText}`);
//   };
// }

document.addEventListener('DOMContentLoaded', function () {
  var navBar = document.getElementsByClassName('navbar__item');
  console.log(navBar);
  navBar.forEach(function (item, index) {
    item.addEventListener('click', function () {
      alert('Ban vua click');
    });
  });
});
