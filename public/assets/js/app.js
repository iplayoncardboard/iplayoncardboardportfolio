window.onload = function(){ 
    let scrumCard = document.getElementById("scrum-card");
    let devCard = this.document.getElementById('dev-card');
    let gameCard = this.document.getElementById('game-card');

    if(scrumCard) scrumCard.onclick = () => {window.open('https://scrumalliance.org/community/profile/ehurst3 ','_blank')};
    if(devCard) devCard.onclick = () => {window.location='/portfolio'};
    if(gameCard) gameCard.onclick = () => {window.open('https://boardgamegeek.com/user/Xer0Cool','_blank')};



};




