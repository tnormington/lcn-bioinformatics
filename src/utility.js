
import $ from 'jquery';

export function handleAnchorLink(e) {
    console.log(e)
    e.preventDefault();
    console.log(e.target.hash)
    const { hash } = e.target;

    let top;
    if(hash) {
      top = $(hash).offset().top - 100;
    } else {
      top = 0;
    }
  
    window.scroll({
      top: top,
      left: 0,
      behavior: 'smooth'
    })
  }