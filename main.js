        let menuOpen = document.getElementById("open");
        let menuClose = document.getElementById("close");
        let menuList = document.getElementById("menulists");

        function openBar(){
            menuOpen.style.display= 'none';
            menuClose.style.display = 'block';
            menuList.style.left = 0;
            menuList.style.scrollBehavior= 'smooth';
            menuList.style.transition = "all 0.3s ease;"
            
        }

        function closeBar(){
            menuOpen.style.display= 'block';
            menuClose.style.display = 'none';
            menuList.style.left = '-100%';
        }