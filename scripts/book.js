'use strict';

function Book(obj) {
  this.title = obj.volumeInfo.title || 'No Title Available';
  this.author = obj.volumeInfo.authors[0] || 'No Author Available';
  this.description = obj.volumeInfo.description || 'No Description Available';
  let regex = /^https/;
  let thumbUrl = obj.volumeInfo.imageLinks.thumbnail;
  if (!regex.test(thumbUrl)) {
    let splitUrl = thumbUrl.split('');
    splitUrl.splice(4,0,'s');
    thumbUrl = splitUrl.join('');
  }
  this.image_url = thumbUrl || 'https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
}
