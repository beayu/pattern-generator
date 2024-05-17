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

  slider = createSlider(5, 100, 1, 1); 
  slider.position(width - 300, height - 30); 
  
  
  generatebutton = createButton('generate new pattern'); 
  generatebutton.style('font-family', 'courier new'); 
  generatebutton.style('font-size', '16px');
  generatebutton.position(50, height - 35); 
  generatebutton.mousePressed(generate);
}

function draw() {
  background(220); 
  
  textFont('courier new'); 
  textSize(16); 
  stext = text(slider.value() * slider.value() + ' cells', 650, height - 15); 
  
  voronoiDraw(0, 0, true, false); 
}

function generate() {
  voronoiClearSites(); 
  let jx = (width / slider.value()) / 2; 
  let jy = (height / slider.value()) / 2; 
  for (let i = 0; i < slider.value(); i++) {
    for (let j = 0; j < slider.value(); j++) {
      let jitterx = random(-jx, jx); 
      let jittery = random(-jy, jy); 
      voronoiSite((i * width / slider.value()) + jitterx, (j * height / slider.value()) + jittery, color(random(0, 256), 255, 255));
    }
  }
  voronoi(800, height - 50, true); 
}
