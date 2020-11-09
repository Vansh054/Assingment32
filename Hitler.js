class Hitler
{
    constructor(x,y,w,h){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,w,h,option) 
     this.width = w
     this.height = h
     this.image = loadImage("shinchan.png")
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();

        if (this.body.position.x > 1650 || this.body.position.x <0.50)
        {
          Matter.Body.setPosition(this.body,{x:0,y:500})
        }
    }
}