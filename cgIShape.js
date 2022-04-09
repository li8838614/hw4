class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube (subdivisions)  {

        this.addTriangle (0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5);
        this.addTriangle (0.5,0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5);
        this.addTriangle (-0.5, 0.5, -0.5,-0.5, -0.5, 0.5,  -0.5, -0.5, -0.5);
        this.addTriangle (-0.5, -0.5, 0.5,-0.5,0.5, -0.5, -0.5, 0.5, 0.5);
        this.addTriangle (0.5, 0.5, -0.5,-0.5, 0.5, 0.5,  -0.5, 0.5, -0.5);
        this.addTriangle (-0.5, 0.5, 0.5,0.5, 0.5, -0.5,  0.5, 0.5, 0.5);
        this.addTriangle (-0.5, -0.5, 0.5,0.5, -0.5, -0.5,  -0.5, -0.5, -0.5);
        this.addTriangle (0.5, -0.5, -0.5,-0.5, -0.5, 0.5,  0.5, -0.5, 0.5);
        this.addTriangle (-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5);
        this.addTriangle (0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
        this.addTriangle ( 0.5, -0.5, -0.5,-0.5, 0.5, -0.5, -0.5, -0.5, -0.5);
        this.addTriangle ( -0.5, 0.5, -0.5,0.5, -0.5, -0.5, 0.5, 0.5, -0.5);


        this.addTriangle (0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5);
        this.addTriangle (0.5, -0.5, 0.5,0.5,0.5, -0.5,  0.5, 0.5, 0.5);
        this.addTriangle (-0.5, -0.5, 0.5,-0.5, 0.5, -0.5,  -0.5, -0.5, -0.5);
        this.addTriangle (-0.5,0.5, -0.5,-0.5, -0.5, 0.5, -0.5, 0.5, 0.5);
        this.addTriangle (-0.5, 0.5, 0.5,0.5, 0.5, -0.5,  -0.5, 0.5, -0.5);
        this.addTriangle (0.5, 0.5, -0.5,-0.5, 0.5, 0.5,  0.5, 0.5, 0.5);
        this.addTriangle (0.5, -0.5, -0.5,-0.5, -0.5, 0.5,  -0.5, -0.5, -0.5);
        this.addTriangle (-0.5, -0.5, 0.5,0.5, -0.5, -0.5,  0.5, -0.5, 0.5);
        this.addTriangle (0.5, -0.5, 0.5,-0.5, 0.5, 0.5,  -0.5, -0.5, 0.5);
        this.addTriangle (-0.5, 0.5, 0.5,0.5, -0.5, 0.5,  0.5, 0.5, 0.5);
        this.addTriangle ( -0.5, 0.5, -0.5,0.5, -0.5, -0.5, -0.5, -0.5, -0.5);
        this.addTriangle ( 0.5, -0.5, -0.5,-0.5, 0.5, -0.5, 0.5, 0.5, -0.5);
   
        
        
        // fill in your cube code here.
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision,heightdivision){
        let degree=360/radialdivision
        for (let i=0;i<radialdivision;i++){
            this.addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), 0.5,0, 0, 0.5,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), 0.5);
            this.addTriangle (0, 0, -0.5, 0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), -0.5, 0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), -0.5);
            for (let j=-0.5;j<0.5;j=j+1/heightdivision){
                this.addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j,0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j+1/heightdivision,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j);
                this.addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j+1/heightdivision,0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j+1/heightdivision,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j);
    
            }
    
        }
        
    
        // fill in your cylinder code here
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
        let degree=360/radialdivision
        for (let i=0;i<radialdivision;i++){  
            this.addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), 0.5,0, 0, 0.5,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), 0.5);
            //this.addTriangle (0, 0, 0.5,0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), 0.5,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), 0.5);
            for (let v=0;v<heightdivision;v++){
                let j=-0.5+v/heightdivision;
                this.addTriangle ((v/heightdivision)*0.5*Math.cos(radians(i*degree)),(v/heightdivision)*0.5*Math.sin(radians(i*degree)), j,((v+1)/heightdivision)*0.5*Math.cos(radians(i*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians(i*degree)), j+1/heightdivision,  (v/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),(v/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j);
                this.addTriangle (((v+1)/heightdivision)*0.5*Math.cos(radians(i*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians(i*degree)), j+1/heightdivision,((v+1)/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j+1/heightdivision,  (v/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),(v/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j);
            }
        }     
        
    
        
    
    
        // Fill in your cone code here.
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        slices=slices+1;
        stacks=stacks+1;
        for (let i=0;i<slices;i++){
            for (let j=0;j<stacks+1;j++){
                let x1=0.5*Math.cos(radians(360*i/slices))*Math.sin(radians(180*j/stacks));
                let y1=0.5*Math.sin(radians(360*i/slices))*Math.sin(radians(180*j/stacks));
                let z1=0.5*Math.cos(radians(180*j/stacks));
                let x2=0.5*Math.cos(radians(360*(i+1)/slices))*Math.sin(radians(180*j/stacks));
                let y2=0.5*Math.sin(radians(360*(i+1)/slices))*Math.sin(radians(180*j/stacks));
                let z2=0.5*Math.cos(radians(180*j/stacks));
                let x3=0.5*Math.cos(radians(360*i/slices))*Math.sin(radians(180*(j+1)/stacks));
                let y3=0.5*Math.sin(radians(360*i/slices))*Math.sin(radians(180*(j+1)/stacks));
                let z3=0.5*Math.cos(radians(180*(j+1)/stacks));
                let x4=0.5*Math.cos(radians(360*(i+1)/slices))*Math.sin(radians(180*(j+1)/stacks));
                let y4=0.5*Math.sin(radians(360*(i+1)/slices))*Math.sin(radians(180*(j+1)/stacks));
                let z4=0.5*Math.cos(radians(180*(j+1)/stacks));
                this.addTriangle(x2,y2,z2,x1,y1,z1,x3,y3,z3);
                this.addTriangle(x1,y1,z1,x2,y2,z2,x3,y3,z3);
                this.addTriangle(x4,y4,z4,x2,y2,z2,x3,y3,z3);
                this.addTriangle(x2,y2,z2,x4,y4,z4,x3,y3,z3);
            }
        }
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

