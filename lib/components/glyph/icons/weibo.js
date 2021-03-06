const html = require('choo/html')

module.exports = function (className) {
  return html`
    <svg viewBox="0 0 36 29" width="36" height="29" class="${className}" role="presentation" aria-hidden="true">
      <path fill="currentColor" fill-rule="nonzero" d="M26.5 13.6c-1.3-.2-.7-1-.7-1s1.4-2.2-.2-3.8c-2-2-6.7.3-6.7.3-2 .7-1.4-.2-1.2-1.6 0-1.7-.5-4.5-5.4-2.8-4.8 1.7-9 7.5-9 7.5-2.8 4-2.4 7-2.4 7 .7 6.7 7.7 8.5 13 9 5.8.4 13.4-2 15.8-7 2.3-5-2-7-3.3-7.4l.1-.2zM14.5 26c-5.6.3-10.2-2.5-10.2-6.4 0-3.8 4.6-7 10.2-7 5.7-.4 10.2 2 10.2 5.8s-4.5 7.4-10.2 7.7V26zm-1-11c-5.8.7-5 6-5 6s-.2 1.8 1.4 2.6c3.2 2 6.6.8 8.4-1.5 1.7-2.2.7-7.7-5-7l.2-.1zm-1.6 7.6c-1 0-2-.5-2-1.4 0-1 .8-2 2-2 1 0 2 .6 2 1.5 0 1-1 1.7-2 2v-.1zm3.3-3c-.4.3-.8.3-1 0-.2-.3 0-1 .2-1 .5-.4 1-.3 1 0 .3.3 0 .8-.2 1zm14-8.3c.4 0 .8-.4 1-.8C30.8 4 25 5 25 5c-.4 0-.8.4-.8 1 0 .4.4.8 1 .8 4-1 3.2 3.4 3.2 3.4 0 .5.4 1 1 1l-.2.1zm-.7-11c-2-.6-4 0-4.6 0h-.2c-.6.2-1 .7-1 1.4s.6 1.4 1.4 1.4c0 0 .7 0 1.2-.2S30 2.6 32 6c1.2 2.7.6 4.4.5 4.7l-.2 1.3c0 .8.6 1.3 1.3 1.3.6 0 1 0 1.3-1.2 2-7.4-2.8-11-6.4-11.8z"/>
    </svg>
  `
}
