"use strict";

;

(function () {

  document.querySelector('.copyright-year').textContent = new Date().getFullYear();

  // TIME REMAIN
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(id, endtime) {
    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
        initializeClock('clockdiv', deadline);
      }

      var clock = document.querySelectorAll('.time-remain').forEach(function (item) {
        item.querySelector(".hour").innerHTML = ("0" + t.hours).slice(-2);
        item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
        item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
      });
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
  initializeClock("clockdiv", deadline); //NAV MENU

  document.querySelector('header .top-header button.nav-btn').addEventListener('click', toggleMenu);

  function toggleMenu(e) {
    var target = document.querySelector('header .top-header');
    target.querySelector('.nav-btn').classList.toggle('nav-btn-active');
    target.classList.toggle('top-header-active');
    target.querySelector('nav').classList.toggle('nav-active');
  } // TOGGLE COMMENTS


  function hideComments() {
    var numComments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    var commentsArray = document.querySelectorAll('.vk-container .vk-comment');
    commentsArray.forEach(function (item) {
      item.classList.add('comment-hide');
    });

    for (var i = 0; i < numComments; i++) {
      commentsArray[i].classList.add('comment-active');
      commentsArray[i].classList.remove('comment-hide');
    }
  }

  hideComments();
  document.querySelector('button.show-more-comment-btn').addEventListener('click', showComments);

  function showComments() {
    var numComments = 2;
    var commentsArray = document.querySelectorAll('.vk-container .vk-comment');
    var commentsActive = document.querySelectorAll('.vk-container .vk-comment.comment-active').length;
    var commentsHidden = document.querySelectorAll('.vk-container .vk-comment.comment-hide').length; // console.log(commentsActive);
    // console.log(commentsHidden);

    if (commentsHidden <= numComments) {
      this.classList.remove('comment-btn-active');
      this.classList.add('comment-btn-hidden'); // this.textContent = `Mostra meno`
    } else {
      this.classList.remove('comment-btn-hidden');
      this.classList.add('comment-btn-active');
      this.textContent = "Mostra di pi\xF9";
    }

    if (this.classList.contains('comment-btn-active')) {
      for (var i = commentsActive - 1; i < commentsActive + numComments; i++) {
        commentsArray[i].classList.add('comment-active');
        commentsArray[i].classList.remove('comment-hide'); // console.log(commentsArray[i]);
      }
    } else {
      commentsArray.forEach(function (item) {
        item.classList.remove('comment-active');
      });
      hideComments();
    }
  }
})();