AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables
        var posX = Math.random() * 300 + (-100);      
        var posY = Math.random() * 2 + (-1);
        var posZ = Math.random() * 300 + -100;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createcoins(id, position);
      }
    },
  
    createcoins: function(id,position) {
      var environment = document.querySelector("#environment");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("material","color","#ff9100");
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("gltf-model",{src:"assets/coin/source/model.gltf"});
      coinEl.setAttribute("scale",{x:2,y:2,z:2})
      coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})   
      coinEl.setAttribute("game-play",{elementId:`#${id}`})
          
      environment.appendChild(coinEl);
    }
  });
  