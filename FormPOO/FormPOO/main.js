  const rangeInput = document.getElementById('rangeInput');
  const rangeValue = document.getElementById('rangeValue');
  
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
  });
class lapiz{
    #marca
    constructor({color="#F0D000",
                dimension="19",
                borrador="true", 
                material= "Madera", 
                marca="mongol"}){
            this.color= color;
            this.dimension= dimension;
            this.borrador= borrador;
            this.material= material;
            this.#marca= marca; 


    }
  getColor(){
    return this.color;
  }
  getDimension(){
    return this.dimension;
  }
  getBorrador(){
    return this.borrador;
  }
  getMaterial(){
    return this.material;
  }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`)
let dimension = document.querySelector(`[name="range"]`)
let borrador = tiene.checked= true;
let material = Madera.checked = true ;

addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color;
    dimension.value = obj.dimension;
    material.getElementById("Madera") = obj.material; 
    borrador.getElementById("tiene") = obj.borrador;


})