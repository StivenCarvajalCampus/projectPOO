  const rangeInput = document.getElementById('rangeInput');
  const rangeValue = document.getElementById('rangeValue');
  
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
  });
class lapiz{
    #marca
    constructor({color="#F0D000",
                dimension="15",
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
  getMarca(){
    return this.#marca;

  }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`)
let dimension = document.querySelector(`[name="range"]`)
let borrador = tiene.checked= true;
let material = Madera.checked = true ;
let marca = Mongo.checked = true;

addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color;
    dimension.value = obj.getDimension;
    document.getElementById("Madera").innerHTML = obj.getMaterial(); 
    document.getElementById("tiene").innerHTML = obj.getBorrador();
    document.getElementById("Mongo").innerHTML = obj.getMarca();

    const form = document.querySelector("#formulario")
    const table = document.querySelector("#table")

    formulario.addEventListener("submit",(e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const colorData = formData.get("color");
      const dimensionData = formData.get("range");
      const marcaData = formData.get("marca");
      const borradorData = formData.get("borrador");
      const materialData = formData.get("material");

      const pencil1 = new lapiz ({color: colorData, dimension: dimensionData, marca: marcaData,borrador: borradorData, material: materialData})

      let pencil = new lapiz({}) ;
      document.querySelector(`#table`).insertAdjacentHTML("beforeend",` 
      <tr>
      <th style = "background-color:${pencil1.getColor()}">${pencil1.getColor()}</th>
      <th>${pencil1.getDimension()}</th>
      <th>${pencil1.getMarca()}</th>
      <th>${pencil1.getBorrador()}</th>
      <th>${pencil1.getMaterial()}</th>
    </tr>
    `)
    
    
            })

})