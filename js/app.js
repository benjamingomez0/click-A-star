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
    time:0,
    players:[],
    setUpLevel()
    {
        if(this.level===1)
        {
            this.makeBigDipper();
            this.time=20;
        }
        else if(this.level===2)
        {
            this.makeLibra();
            this.time=15;
        }
        else if(this.level===3)
        {
            this.makeOrion();
            this.time=10;
        }
        else if(this.level===4)
        {
            this.makeAres();
            this.time=8;
        }
        else if(this.level===3)
        {
            this.makeGemini();
            this.time=10;
        }
    },
    makeBigDipper()
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
    makeLibra()
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
    makeOrion()
    {
        const $div = $('<div/>');
    
        const div = $('<div/>');
        $div.attr('class','starC');
        $div.css('width', '7px');
        $div.css('height', '7px');
        $div.css('top', '338px');
        $div.css('left', '375px');
        
        const $div2 = $('<div/>');
        
        $div2.attr('class','starC');
        $div2.css('width', '9px');
        $div2.css('height', '9px');
        $div2.css('top', '338px');
        $div2.css('left', '712px');
        
        const $div3 =$('<div/>');
        
        $div3.attr('class','starC');
        $div3.css('width', '9px');
        $div3.css('height', '9px');
        $div3.css('top', '212px');
        $div3.css('left', '553px');
        
        
        const $div4 =$('<div/>');
        
        $div4.attr('class','starC');
        $div4.css('width', '7px');
        $div4.css('height', '7px');
        $div4.css('top', '530px');
        $div4.css('left', '735px');
        
        const $div5 =$('<div/>');
        
        $div5.attr('class','starC');
        $div5.css('width', '7px');
        $div5.css('height', '7px');
        $div5.css('top', '670px');
        $div5.css('left', '810px');
        
        const $div6 =$('<div/>');
        
        $div6.attr('class','starC');
        $div6.css('width', '9px');
        $div6.css('height', '9px');
        $div6.css('top', '510px');
        $div6.css('left', '560px');
        
        const $div7 =$('<div/>');
        
        $div7.attr('class','starC');
        $div7.css('width', '7px');
        $div7.css('height', '7px');
        $div7.css('top', '540px');
        $div7.css('left', '490px');
    
        const $div8 =$('<div/>');
        
        $div8.attr('class','starC');
        $div8.css('width', '10px');
        $div8.css('height', '10px');
        $div8.css('top', '700px');
        $div8.css('left', '446px');
    
        const $div9 =$('<div/>');
        
        $div9.attr('class','starC');
        $div9.css('width', '6px');
        $div9.css('height', '6px');
        $div9.css('top', '472px');
        $div9.css('left', '640px');
        
        const $div10 =$('<div/>');
        
        $div10.attr('class','starC');
        $div10.css('width', '7px');
        $div10.css('height', '7px');
        $div10.css('top', '140px');
        $div10.css('left', '333px');
        
        const $div11 =$('<div/>');
        
        $div11.attr('class','starC');
        $div11.css('width', '7px');
        $div11.css('height', '7px');
        $div11.css('top', '140px');
        $div11.css('left', '400px');
        
        
        const $div12 =$('<div/>');
        
        $div12.attr('class','starC');
        $div12.css('width', '7px');
        $div12.css('height', '7px');
        $div12.css('top', '302px');
        $div12.css('left', '947px');

        const $div13 =$('<div/>');
        
        $div13.attr('class','starC');
        $div13.css('width', '9px');
        $div13.css('height', '9px');
        $div13.css('top', '124px');
        $div13.css('left', '833px');
        
        const $div14 =$('<div/>');
        
        $div14.attr('class','starC');
        $div14.css('width', '7px');
        $div14.css('height', '7px');
        $div14.css('top', '249px');
        $div14.css('left', '925px');
        
        const $div15 =$('<div/>');
        
        $div15.attr('class','starC');
        $div15.css('width', '6px');
        $div15.css('height', '6px');
        $div15.css('top', '370px');
        $div15.css('left', '935px');

        const $div16 =$('<div/>');
        
        $div16.attr('class','starC');
        $div16.css('width', '9px');
        $div16.css('height', '9px');
        $div16.css('top', '465px');
        $div16.css('left', '912px');
        
        $('body').append($div);
        $('body').append($div2);
        $('body').append($div3);
        $('body').append($div4);
        $('body').append($div5);
        $('body').append($div6);
        $('body').append($div7);
        $('body').append($div8);
        $('body').append($div9);
        $('body').append($div10);
        $('body').append($div11);
        $('body').append($div12);
        $('body').append($div13);
        $('body').append($div14);
        $('body').append($div15);
        $('body').append($div16);

    },
    makeAres()
    {
        const $div =$('<div/>');
        
        $div.attr('class','starC');
        $div.css('width', '7px');
        $div.css('height', '7px');
        $div.css('top', '415px');
        $div.css('left', '907px');

        const $div2 =$('<div/>');
        
        $div2.attr('class','starC');
        $div2.css('width', '9px');
        $div2.css('height', '9px');
        $div2.css('top', '224px');
        $div2.css('left', '602px');
        
        const $div3 =$('<div/>');
        
        $div3.attr('class','starC');
        $div3.css('width', '7px');
        $div3.css('height', '7px');
        $div3.css('top', '297px');
        $div3.css('left', '733px');
        
        const $div4 =$('<div/>');
        
        $div4.attr('class','starC');
        $div4.css('width', '6px');
        $div4.css('height', '6px');
        $div4.css('top', '485px');
        $div4.css('left', '969px');

        const $div5 =$('<div/>');
        
        $div5.attr('class','starC');
        $div5.css('width', '9px');
        $div5.css('height', '9px');
        $div5.css('top', '540px');
        $div5.css('left', '989px');

        $('body').append($div);
        $('body').append($div2);
        $('body').append($div3);
        $('body').append($div4);
        $('body').append($div5);      
    },
    makeGemini()
    {

    },
    PlayerAmtSet(amt)
    {
        for(let i=0;i<amt;i++)
        {
            this.players.push(new Player);
        }
    },



}



          


// game.makeBigDipper();
// game.makeLibra();
// game.makeOrion();
// game.makeAres();
game.PlayerAmtSet(2);
console.log(game);