
class Player{
    constructor(level){
        this.level=level;
        this.score=0;
        this.accuracy=[];
        this.clicks=0;
        this.time=[];
        this.isTurnOver=false;
    }
    levelUp(){
        this.level++;
    }
    scoreUp(){
        this.score++;
    }
    clicksUp(){
        this.clicks++
    }
    detAcc(){
        this.accuracy.push(100*(this.score/this.clicks));
    }

};
const game = {
    level:1,
    time:0,
    clicks:0,
    interval: null,
    players:[],
    playerDisplay:1,
    playerAmt:0,
    PlayerAmtSet()
    {
        if(this.playerAmt>1)
        {

            for(let i=0;i<this.playerAmt;i++)
            {
                this.players.push(new Player(this.level));
            }

        }
        else
        {
            this.players.push(new Player(this.level));
        }
    },
    whosTurn(){
        //returns 1st player who's turn isn't over
        for(let i=0;i<this.playerAmt;i++)
            {
                if(this.players[i].isTurnOver===false)
                {
                    //console.log(this.players[i]);
                    return this.players[i];

                }
            }
        
    },
    showScore(player){
        if(player.isTurnOver===true)
        {
            //modal appears
            $('#modal1').css('display', 'block');
            //level start disappears
            $('#start').hide();
            //game starter re-appears with modal content
            $('#score').css('display', 'block');
            $('gameStart').css('display', 'block');
            //hides level HUD
            $('levelH1').hide();
            $('statBox').hide();
            //create content for score display
                
            $('#levelLine').text(`Level:${player.level}`)
            $('#scoreLine').text(`Score:${player.score}`)

            const accuracy =player.accuracy[player.level-1];
            $('#accLine').text(`Accuracy:${accuracy}`);

            const time = player.time[player.level - 1]
            $('#timeLine').text(`Time:${time}`);
           
        }
    },
    checkLevel(){
        if(this.playerAmt===1)
        {
            if($('.starC').length === this.players[0].score || this.time===0) 
                {
                    //add diff times per round
                    let time=0;
                    if(this.level===1)
                    {
                        time = 20 - this.time;
                    }
                    else if(this.level===2)
                    {
                        time = 15 - this.time;
                    }
                    else if(this.level===4)
                    {
                        time = 8 - this.time;
                    }
                    else
                    {
                        time = 10 - this.time;
                    }
                    this.players[0].time.push(time);
                    this.players[0].detAcc();
                    this.players[0].isTurnOver=true;
                    game.showScore(this.players[0]);
                    this.players[0].level++;
                    this.level++;
                    clearInterval(this.interval);
                    this.resetPlayers();
                }
        }
        else if(this.playerAmt>1)
        {
            let curPlayer = this.whosTurn();
            if(curPlayer)
            {
                
                if($('.starC').length === curPlayer.score || this.time===0)
                {
                    let playerTime=0;
                    if(this.level===1)
                    {
                        playerTime = 20 - this.time;
                      
                    }
                    else if(this.level===2)
                    {
                        playerTime= 15 - this.time;
                      
                    }
                    else if(this.level===4)
                    {
                        playerTime= 8 - this.time;
                        
                    }
                    else
                    {
                        playerTime= 10 - this.time;
                        
                    }

                    curPlayer.time.push (playerTime);
                    curPlayer.detAcc();
                    curPlayer.isTurnOver=true;
                    game.showScore(curPlayer)
                    curPlayer.level++;
                    clearInterval(this.interval);
                }
            }
            else
            {
                this.level++;
                this.resetPlayers();
            }
        }
        

        
    },
    resetPlayers()
    {
        for(let i=0;i<game.players.length;i++)
                    {
                        game.players[i].isTurnOver=false;
                        game.players[i].score=0;
                        game.players[i].clicks=0;
                    }
        game.playerDisplay=1;
                
       
    },
    score(player){
        if(player.level === 1 && player.score < 7)
        {
            player.scoreUp();
        }
        else if(player.level === 2 && player.score < 9)
        {
            player.scoreUp();
        }
        else if(player.level === 3 && player.score < 16)
        {
            player.scoreUp();
        }
        else if(player.level === 4 && player.score < 5)
        {
            player.scoreUp();
        }
        player.clicks++;
   },
    setTimer(){
        const $timer = $('#start');

        $timer.css("fontSize", "2rem")
        $timer.text(`Time: ${this.time}`)

        this.interval = setInterval(() =>{

            if(this.time === 0){

                clearInterval(this.interval);
    
            } 
            else 
            {
                this.time--
            }
            $timer.css("fontSize", "2rem")
            $timer.text(`Time: ${this.time}`)
            this.checkLevel();
    }, 1000)
    },
    setUpLevel()
    {   
        
        if(this.level===1)
        {
            $('#levelH1').text('Level 1')
            $('#levelDisplay').text(`Level:${this.level}`);
            $('#playerDisplay').text(`Player:${this.playerDisplay}`);
            this.makeBigDipper();
            this.time=20;
        }
        else if(this.level===2)
        {
            $('#levelH1').text('Level 2')
            $('#levelDisplay').text(`Level:${this.level}`);
            $('#scoreDisplay').text('Score:0')
            $('#playerDisplay').text(`Player:${this.playerDisplay}`);
            this.makeLibra();
            this.time=15;
        }
        else if(this.level===3)
        {
            $('#levelH1').text('Level 3')
            $('#levelDisplay').text(`Level:${this.level}`);
            $('#playerDisplay').text(`Player:${this.playerDisplay}`);
            this.makeOrion();
            this.time=10;
        }
        else if(this.level===4)
        {
            $('#levelH1').text('Level 4')
            $('#levelDisplay').text(`Level:${this.level}`);
            $('#playerDisplay').text(`Player:${this.playerDisplay}`);
            this.makeAres();
            this.time=8;
        }
        else if(this.level===5)
        {
            $('#levelH1').text('Level 5')
            $('#levelDisplay').text(`Level:${this.level}`);
            $('#playerDisplay').text(`Player:${this.playerDisplay}`);
            this.makeGemini();
            this.time=10;
        }
        $('.title').hide();
        $("#levelH1").show();
    
    },
    clearBoard()
    {
        listStarC=$('.starC');
        for(let i=0;i<listStarC.length;i++)
        {
            listStarC[i].remove();
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
        
        $('#attach').append($div);
        $('#attach').append($div2);
        $('#attach').append($div3);
        $('#attach').append($div4);
        $('#attach').append($div5);
        $('#attach').append($div6);
        $('#attach').append($div7);
        $('#attach').append($div8);
        $('#attach').append($div9);
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
        //to do: create Gemini constellation 
    },
}

$("#levelH1").hide();

// displays Start screen modal
$('#start').on('click',()=>{
    if(game.playerAmt<=0)
    {
        $('#modal1').css('display', 'block');
        $('#start').hide();
    }
});

//begins counter if players have been created
$('#start').on('click',() =>{ 
    
    if(game.playerAmt>0)
    {
        game.setUpLevel();
        game.setTimer()
    }
});

//auto loads game with 1 player if 'X' is clicked on Start screen modal
$('.close').on('click',()=>{
    game.playerAmt=1;
    game.PlayerAmtSet();
    $('#modal1').hide();
    $('#startModal').hide();
    $('#startMessage').hide();
    $('#gameStart').hide();
    $('#start').show();
    $('.statBox').css('display', 'block');
    
} );

//loads game object with players
$('#gameStart').on('click',()=>{
    let playerAmt=$('#numPlayers').val();
    if(playerAmt)
    {
        game.playerAmt=playerAmt;
    }
    else
    {
        game.playerAmt=1;
    }
    game.PlayerAmtSet();
    $('#modal1').hide();
    $('#startModal').hide();
    $('#gameStart').hide();
    $('#startMessage').hide();
    $('#start').show();
    $('.statBox').css('display', 'block');
})
//$('').on('click')

//add star graphic to clicked star. augments score for player and checks win

$('body').on('click', e => {
    let curPlayer = game.whosTurn();
    
    if($(e.target).attr('class') === 'starC') {
        
        const $starImg=$('<img/>');
        
        game.score(curPlayer);//figure out which player's score to ++
        
        $('#scoreDisplay').text(`Score:${curPlayer.score}`);
        
        $starImg.attr('class','clickedStar');
        $starImg.attr('src','./css/clickedStar.svg');
        $(e.target).append($starImg);
        
        game.checkLevel(curPlayer);
    }
    else if($(e.target).attr('class') === 'container')
    {
        if(game.playerAmt>0)
        {
            curPlayer.clicksUp();
        }
    }
    //checkLevel();
});

//goes from one round to the next
$('#score').on('click', (e) =>{
    if(game.playerAmt>1)
    {
        game.playerDisplay++
    }
    $('#modal1').hide();
    game.clearBoard();
    game.setUpLevel();
    game.setTimer();
    $('#start').show();

    
   
});
// $('body').on('click', e => {
    //     console.log(e.target)
  // })
    
    
    // console.log(game);