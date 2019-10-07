console.log('coming in hot!');






class Player{
    constructor(level){
        this.level=level;
        this.score=0;
        this.accuracy=0.00;
    }
    levelUp(){
        this.level++;
    }
    scoreUp(){
        this.score++;
    }

};
const game = {
    level:1,
    playerAmt:1,
    players:[],
    makeBigDipper: function()
    {
        const $div = $('<div/>');
        
        $div.attr('class','starC');
        $div.css('width', '7px');
        $div.css('height', '7px');
        $div.css('top', '477px');
        $div.css('left', '585px');
        
        const $div2 = $('<div/>');
        
        $div2.attr('class','starC');
        $div2.css('width', '9px');
        $div2.css('height', '9px');
        $div2.css('top', '461px');
        $div2.css('left', '714px');
        
        const $div3 =$('<div/>');
        
        $div3.attr('class','starC');
        $div3.css('width', '10px');
        $div3.css('height', '10px');
        $div3.css('top', '338px');
        $div3.css('left', '550px');
        
        const $div4 =$('<div/>');
        
        $div4.attr('class','starC');
        $div4.css('width', '12px');
        $div4.css('height', '12px');
        $div4.css('top', '331px');
        $div4.css('left', '720px');
        
        const $div5 =$('<div/>');
        
        $div5.attr('class','starC');
        $div5.css('width', '9px');
        $div5.css('height', '9px');
        $div5.css('top', '250px');
        $div5.css('left', '850px');
        
        const $div6 =$('<div/>');
        
        $div6.attr('class','starC');
        $div6.css('width', '9px');
        $div6.css('height', '9px');
        $div6.css('top', '200px');
        $div6.css('left', '953px');
        
        const $div7 =$('<div/>');
        
        $div7.attr('class','starC');
        $div7.css('width', '10px');
        $div7.css('height', '10px');
        $div7.css('top', '200px');
        $div7.css('left', '1100px');
        
        $('body').append($div);
        $('body').append($div2);
        $('body').append($div3);
        $('body').append($div4);
        $('body').append($div5);
        $('body').append($div6);
        $('body').append($div7);

        },
    makeLibra: function()
    {
        const $div = $('<div/>');
    
        const div = $('<div/>');
        $div.attr('class','starC');
        $div.css('width', '7px');
        $div.css('height', '7px');
        $div.css('top', '338px');
        $div.css('left', '550px');
        
        const $div2 = $('<div/>');
        
        $div2.attr('class','starC');
        $div2.css('width', '9px');
        $div2.css('height', '9px');
        $div2.css('top', '338px');
        $div2.css('left', '923px');
        
        const $div3 =$('<div/>');
        
        $div3.attr('class','starC');
        $div3.css('width', '9px');
        $div3.css('height', '9px');
        $div3.css('top', '200px');
        $div3.css('left', '673px');
        
        
        const $div4 =$('<div/>');
        
        $div4.attr('class','starC');
        $div4.css('width', '7px');
        $div4.css('height', '7px');
        $div4.css('top', '680px');
        $div4.css('left', '923px');
        
        const $div5 =$('<div/>');
        
        $div5.attr('class','starC');
        $div5.css('width', '7px');
        $div5.css('height', '7px');
        $div5.css('top', '670px');
        $div5.css('left', '1010px');
        
        const $div6 =$('<div/>');
        
        $div6.attr('class','starC');
        $div6.css('width', '9px');
        $div6.css('height', '9px');
        $div6.css('top', '509px');
        $div6.css('left', '610px');
        
        const $div7 =$('<div/>');
        
        $div7.attr('class','starC');
        $div7.css('width', '7px');
        $div7.css('height', '7px');
        $div7.css('top', '590px');
        $div7.css('left', '640px');
    
        const $div8 =$('<div/>');
        
        $div8.attr('class','starC');
        $div8.css('width', '10px');
        $div8.css('height', '10px');
        $div8.css('top', '644px');
        $div8.css('left', '646px');
    
        const $div9 =$('<div/>');
        
        $div9.attr('class','starC');
        $div9.css('width', '7px');
        $div9.css('height', '7px');
        $div9.css('top', '670px');
        $div9.css('left', '570px');
        
        $('body').append($div);
        $('body').append($div2);
        $('body').append($div3);
        $('body').append($div4);
        $('body').append($div5);
        $('body').append($div6);
        $('body').append($div7);
        $('body').append($div8);
        $('body').append($div9);
    },
    makeOrion: function()
    {

    },
    makeGemini: function()
    {

    },
    makeAres: function()
    {

    },
    PlayerAmtSet: function(amt)
    {
        for(let i=0;i<amt;i++)
        {
            this.players.push(new Player);
        }
    },



}
// game.makeBigDipper();
game.makeLibra();
game.PlayerAmtSet(2);
console.log(game);