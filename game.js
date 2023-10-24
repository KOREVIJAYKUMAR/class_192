AFRAME.registerComponent('game', {
    schema: {
        
    },

    init: function () {
      var duration = 120
      var timer = document.querySelector('#timer')
      this.startTimer(duration,timer)
    },

    startTimer:function(duration,timer){

        var minutes,seconds;
        setInterval(()=>{
            if(duration>=0){
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
                if(minutes<10){
                    minutes="0"+minutes
                }
                if(seconds<10){
                    seconds="0"+seconds
                }
                console.log(seconds)
                timer.setAttribute("text",{value:minutes+":"+seconds})
                duration=duration-1
            }
            else{
                var gameOver = document.querySelector('#gameOver')
                gameOver.setAttribute("visible",true)
            }
        },1000)

    }
    
  
});
