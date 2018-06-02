window.onload = function(){ 
    const scrumCard = document.getElementById("scrum-card");
    const devCard = this.document.getElementById('dev-card');
    const gameCard = this.document.getElementById('game-card');
    const container = this.document.getElementsByClassName('container')[0];
    const devIconArray = [{id:'react', image: 'reactJS.png', class: 'icon'}, {id:'css', image: 'css3.png', class: 'icon'}, {id:'html5', image: 'html5.png', class: 'icon'}, {id:'javaScript', image: 'javascript.png', class: 'icon'},  {id:'mongo', image: 'mongodb.png', class: 'icon'}, {id:'jquery', image: 'jquery-icon.png', class: 'icon'},  {id:'mysql', image: 'mysql.png', class: 'icon'},  {id:'node', image: 'nodejs.png', class: 'icon'}]
    const scrumIconArray = [{id:'master', image: 'scrumMaster2.png', class: 'icon'}, {id:'prodOwn', image: 'prodown2.png', class: 'icon'}, {id:'popro', image: 'popro.png', class: 'icon'}, {id:'smpro', image: 'smpro.png', class: 'icon'}]
    const gameIconArray = [{id:'d20', image: 'd20.png', class: 'icon'}, {id:'meeple', image: 'meeple.png', class: 'icon'}]
    let devIconsDisplayed = false;
    let scrumIconsDisplayed = false;
    let gameIconsDisplayed = false;
    //Scrum Card event Listeners
    if(scrumCard){
        
        scrumCard.addEventListener("click",(event)=>{
            window.open('https://scrumalliance.org/community/profile/ehurst3 ','_blank')
        });
        scrumCard.addEventListener("mouseenter",(event)=>{
            if(!scrumIconsDisplayed){
                displayIcons(scrumIconArray);
                scrumIconsDisplayed= true;
        }
    });
    }

    //Dev Card event Listeners
    if (devCard) {devCard.addEventListener("click",(event)=>{
        window.location='/portfolio'
    });

    devCard.addEventListener("mouseenter",(event)=>{
        if(!devIconsDisplayed){
            displayIcons(devIconArray);
            devIconsDisplayed= true;
        }
    });
}

      //Game Card event Listeners
   if(gameCard){ 
        gameCard.addEventListener("click",(event)=>{
            window.open('https://boardgamegeek.com/user/Xer0Cool ','_blank')
        });

        gameCard.addEventListener("mouseenter",(event)=>{
            if(!gameIconsDisplayed){
                displayIcons(gameIconArray);
                gameIconsDisplayed= true;
            }
        });
    }

    function displayIcons(array){
        array.forEach(element => {
            let icon = document.createElement("img");
            icon.classList.add(element.class);
            icon.setAttribute("id",element.id);
            icon.setAttribute("src",`./assets/images/icons/${element.image}`)
            console.log(icon);
            container.appendChild(icon);
        });
    }

  
   

};




