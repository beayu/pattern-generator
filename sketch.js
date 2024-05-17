let gridsize = 30; 
const jitter = 0.5; 
let slider, stext, generatebutton; 

function setup() {
  createCanvas(800, 800);
  noSmooth(); 
  colorMode(HSB);
  
  voronoiCellStrokeWeight(1); 
  voronoiSiteStrokeWeight(3); 
  voronoiCellStroke(0); 
  voronoiSiteStroke(0); 
  voronoiSiteFlag(false); 
  
//   voronoiRndSites(30, 50); 
//   voronoiSites([[200, 300, [240, 255, 255, 0.3]]]); 
  
//   voronoi(800, height - 50, true); 

  slider = createSlider(20, 100, 1, 1); 
  slider.position(width - 300, height - 30); 
  
  
  generatebutton = createButton('generate new pattern'); 
  generatebutton.style('font-family', 'courier new'); 
  generatebutton.style('font-size', '16px');
  // generatebutton.style('background-color', '#f7dfaf');
  generatebutton.position(50, height - 35); 
  generatebutton.mousePressed(generate);
}

function draw() {
  background(220); 
  
  textFont('courier new'); 
  textSize(16); 
  stext = text(slider.value() + ' cells', 650, height - 15); 
  
  voronoiDraw(0, 0, true, false); 
}

function generate() {
  voronoiClearSites(); 
  voronoiRndSites(slider.value(), 50); 
  voronoi(800, height - 50, true); 
}
