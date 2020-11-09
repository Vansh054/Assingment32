class Box
{
    constructor(x,y,w,h){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,w,h,option) 
     this.width = w
     this.height = h
     this.image = loadImage("chocochip.png")
     World.add(world,this.body)
    }
    display(){
         if (this.body.speed <= 5)
        {   
        var pos = this.body.position
        var angle = this.body.angle
        this.maxSpeed = 255
        push();
            translate(pos.x,pos.y)
            rotate(angle)
            imageMode(CENTER)
            fill("pink")
            image(this.image,0,0,this.width,this.height)
        pop();  
        } 
        else 
        {
            World.remove(world,this.body)
            push();
            tint(255,this.maxSpeed)
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
            this.maxSpeed = this.maxSpeed - 30
        pop();
        }
        
    }
    score(){
        if(this.maxSpeed<0 && this.maxSpeed>-105)
        {
            score++;
        }
        textSize(40)
        textFont("times new roman")
        fill("brown")
        stroke("brown")
        text("Score : "+score,800,60)
        console.log
    }
}
    