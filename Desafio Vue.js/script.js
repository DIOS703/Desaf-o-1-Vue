class Producto {
  constructor ( producto = {}){
    this.nombre = producto.nombre || ""
    this.descripcion =  producto.descripcion || ""
    this.precio = producto.precio || ""
  }
}

var app = new Vue({
    el: '#app',
    data: {
      Producto: [
        {
          "nombre":"Uranio",
          "descripcion": "Para uso casero",
          "precio":"10000"
        },
        {
          "nombre":"AK-47",
          "descripcion": "Cartuchos WWII",
          "precio":"1000"
        },
        {
          "nombre":"Unicornio",
          "descripcion": "3 Meses 2 Cuernos",
          "precio":"20000"
        },
        {
          "nombre":"Dinosaurio",
          "descripcion": "Velociraptor 5 Metros",
          "precio":"5000"
        }
      ],
      errors: [],
      Nnombre: null,
      Ndescripcion: null,
      Nprecio: null,
      NEnombre: null,
      NEdescripcion: null,
      NEprecio: null,
      editkey: -1
    },
    methods:{ 
      editProd(key){
        this.editkey = key;
      },
      updateProd(key){
        this.Producto[key].nombre = this.NEnombre;
        this.Producto[key].descripcion = this.NEdescripcion;
        this.Producto[key].precio = this.NEprecio;
        this.editkey = -1;
        this.NEnombre = null,
        this.NEdescripcion = null,
        this.NEprecio = null
      },
      deleteProd(index){
        this.Producto.splice(index, 1);
      },
      agregarProd() {
          this.Producto.push( new Producto ({
            nombre:this.Nnombre,
            descripcion: this.Ndescripcion,
            precio:this.Nprecio
          }
          )),
          this.Nnombre = null,
          this.Ndescripcion = null,
          this.Nprecio = null
          },
      checkearForm(){
          if (this.Nnombre && this.Ndescripcion && (this.Nprecio>0)) {
            this.errors = [];
            return this.agregarProd();
          }
          this.errors = [];
          if (!this.Nnombre) {
            this.errors.push('El nombre es obligatorio.');
          }
          if (!this.Ndescripcion) {
            this.errors.push('La descripcion es obligatoria.');
          }
          if (!this.Nprecio) {
            this.errors.push('El precio debe ser mayor a 0.');
          }
        },
        checkearForm2(key){
          if (this.NEnombre && this.NEdescripcion && (this.NEprecio>0)) {
            this.errors = [];
            return this.updateProd(key);
          }
          this.errors = [];
          if (!this.NEnombre) {
            this.errors.push('El nombre es obligatorio.');
          }
          if (!this.NEdescripcion) {
            this.errors.push('La descripcion es obligatoria.');
          }
          if (!this.NEprecio) {
            this.errors.push('El precio debe ser mayor a 0.');
          }
        }
    }
  });