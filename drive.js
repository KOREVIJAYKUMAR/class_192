AFRAME.registerComponent('drive', {
    schema: {

    },

    init: function () {
        this.driveCar()
    },

    driveCar: function () {

        var wheel = document.querySelector("#steeringModel")
        var accImg = document.querySelector("#accImg")
        var brakeImg = document.querySelector("#brakeImg")

        var cameraRig = document.querySelector("#camera-rig") 
        // var camera = document.querySelector("#camera")

        var cameraRotation = cameraRig.getAttribute("rotation") 

        window.addEventListener("keydown", (e) => {
            if (e.code == "ArrowRight") {
                wheel.setAttribute("rotation", { x: 0, y: 0, z: -5 })
                cameraRotation.y-=5
                cameraRig.setAttribute("rotation",cameraRotation)
            }
            if (e.code == "ArrowLeft") {
                wheel.setAttribute("rotation", { x: 0, y: 0, z: 5 })
                cameraRotation.y+=5
                cameraRig.setAttribute("rotation",cameraRotation)
            }
            if (e.code == "ArrowUp") {
                accImg.setAttribute("material", { color: 'green' })
            }
            if (e.code == "Space") {
                brakeImg.setAttribute("material", { color: 'red' })
            }
        })

        window.addEventListener("keyup", (e) => {

            if (e.code == "ArrowUp") {
                accImg.setAttribute("material", {color:'gray'})
            }

            if (e.code == "Space") {
                brakeImg.setAttribute("material", {color:'gray'})
            }

        })



    },


});
