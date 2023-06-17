// Header menu - start

const HeaderMenu = document.querySelector('.header__menu');
const HeaderMenuBtn = document.querySelector('.header__btn-menu');

HeaderMenuBtn.addEventListener('click', function(){
    if(HeaderMenu.classList.contains('active')){
        HeaderMenu.classList.remove('active');
        HeaderMenuBtn.querySelector('.header__btn-icons').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>'
    }else{
        HeaderMenu.classList.add('active');
        HeaderMenuBtn.querySelector('.header__btn-icons').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg>'
    }
})

// Header menu - end

// Header popup - start

const headerLinks = document.querySelectorAll('.header__link');

for(let headerLink of headerLinks){
    headerLink.addEventListener('click', function() {
        if(headerLink.nextElementSibling.classList.contains('active')){
            headerLink.nextElementSibling.classList.remove('active');
            headerLink.classList.remove('active')
        }else{
            for(let el of headerLinks){
                el.nextElementSibling.classList.remove('active');
                el.classList.remove('active')
            }
        headerLink.nextElementSibling.classList.add('active')
        headerLink.classList.add('active');
        }
    })
}

// Header popup - end