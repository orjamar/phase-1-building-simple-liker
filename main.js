// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  const errorModal = document.getElementById('modal');
  const errorModalMessage = document.getElementById('modal-message');

  const likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.classList.contains('activated-heart')) {
        button.classList.remove('activated-heart');
        button.innerHTML = EMPTY_HEART;
      } else {
        mimicServerCall()
          .then(function () {
            button.classList.add('activated-heart');
            button.innerHTML = FULL_HEART;
          })
          .catch(function (error) {
            errorModalMessage.innerText = error;
            errorModal.classList.remove('hidden');
            setTimeout(function () {
              errorModal.classList.add('hidden');
            }, 3000);
          });
      }
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
