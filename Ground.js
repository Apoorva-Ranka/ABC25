class Ground {
    constructor (x,y,width,height){
      var ground_options={
        isStatic:true,
        restitution:0.5,
        friction:0.3,
        density:1
      }

      this.ground = Bodies.rectangle(x,y,width,height,ground_options)
      this.groundwidth = width
      this.groundheight= height

      World.add(myworld,this.ground)
    }

    display(){
      var pos = this.ground.position
      fill("brown")
      rectMode(CENTER)
      rect(pos.x,pos.y,this.groundwidth,this.groundheight)
    }
  };