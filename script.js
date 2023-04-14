$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'#161616','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'#161616','box-shadow':'none'});
      }
    });
  
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  });

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

registerLink.addEventListener('click', () => { wrapper.classList.remove('active');});

loginLink.addEventListener('click', () => { wrapper.classList.add('active');});
