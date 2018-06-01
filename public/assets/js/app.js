window.onload = function(){ 
    const scrumCard = document.getElementById("scrum-card");
    const devCard = this.document.getElementById('dev-card');
    const gameCard = this.document.getElementById('game-card');


    scrumCard.addEventListener("click",(event)=>{
        window.open('https://scrumalliance.org/community/profile/ehurst3 ','_blank')
    });

    devCard.addEventListener("click",(event)=>{
        window.location='/portfolio'
    });

    gameCard.addEventListener("click",(event)=>{
        window.open('https://boardgamegeek.com/user/Xer0Cool ','_blank')
    });

    


};




