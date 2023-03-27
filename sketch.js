let points =[[1, 11], [4, 10], [7, 10],[11,9],[13,8],[15,5],[15,3],[16,1],[16,-1],[15,-1],[11,1],[9,2],[7,1],[5,-1],[1,-1],[0,0],[3,1],[1,1],[-2,0],[-6,-2],[-9,-6],[-9,-7],[-7,-9],[-7,-11],[-8,-12],[-9,-11],[-11,-10],[-13,-11],[-15,-11],[-17,-12],[-17,-10],[-15,-7],[-12,-6],[-11,-6],[-10,-3],[-8,2],[-5,6],[-3,9],[-4,10],[-5,10],[-2,12]];  

function setup() {  
  createCanvas(windowWidth, windowHeight);  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;  
    }
  }
}

function draw() {  
  background(255); 
  translate(width/2, height/2); 
  scale(1, -1); 
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);  
}