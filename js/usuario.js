class usuario {
  rut;
  nombre;
  apellidos;
  fecha;
  //mutadores//
  setRut(rut) {this.rut = rut;}
  setNombre(nombre) {this.nombre = nombre;}
  setApellidos(apellidos) {this.apellidos = apellidos;}
  setFecha(fecha) {this.fecha = fecha;}

  //accesadores//
  getRut(){return this.rut;}
  getNombre(){return this.nombre;}
  getApellidos(){return this.apellidos;}
  getFecha(){return this.fecha;}
  
  //metodos//
  imprimir(){
      return 'Nombre:' +this.nombre()+ ' Apellidos: '+this.apellidos()+' Rut: '+this.rut()
  }
  
}
