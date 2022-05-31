let validation = false;

function identificar_datos() {

  validation = true;
  var waterClass = document.getElementById("datosClase").value;
  validarWaterClass(waterClass);

  if (!validation) {
      alert("error al ingresar datos");
  }

}

function  validarWaterClass(waterClass){
  let expresion = ""
  const palabraReservadaEstructuraPrincipal = ['CUERPOACUOSO','temperatura','grasas','huevosHelmintos','fecales','PH','UT']
  const atributoCuerpoAguayFecales = ['ARROLLO','RIO','CANAL']
  const grasasValidas = ['SST','DO','CO','F','N']
  const atributoHuevosHelmintos = ['AP','NA']
  const delimitador = [':',';','-']
  const contenedorAtributos = ['(',')','<','>']
  const limitadorDeClase = ['{','}']

  var tokenValidos = []

  expresion = waterClass

  for (const iterator of palabraReservadaEstructuraPrincipal) {
    if (expresion.includes(iterator)){
      tokenValidos.push(iterator)
     expresion =  expresion.replaceAll(iterator,"")
     console.log(expresion);
    }
  }
  let x=expresion
  for(const iterator of atributoCuerpoAguayFecales){
    if (x.includes(iterator)){
      console.log("entro");
      tokenValidos.push(iterator)
     x = x.replaceAll(iterator,"")
      console.log(x);

    }
  }
  console.log(x);

  for(const item of atributoHuevosHelmintos){
    if (x.includes(item)){
      tokenValidos.push(item)
     x =  x.replaceAll(item,"")
     console.log(x);
    }
  }

  for (const item of grasasValidas){
    if (x.includes(item)){
      tokenValidos.push(item)
     x =  x.replaceAll(item,"")
     console.log(x);
    }
  }

  for(const item of delimitador){
    if (x.includes(item)){
      tokenValidos.push(item)
     x =  x.replaceAll(item,"")
     console.log(x);
    }
  }
  for(const item of contenedorAtributos){
    if (x.includes(item)){
      tokenValidos.push(item)
     x =  x.replaceAll(item,"")
     console.log(x);
    }
  }
  for(const item of limitadorDeClase){
    if (x.includes(item)){
      tokenValidos.push(item)
     x =  x.replaceAll(item,"")
     console.log(x);
    }
  }
  console.log(x);

  let g = x.split("\n")
  console.log(g);
  if(g.length>2){
    console.log("heeeee");
    console.log(g);
  let c = []
  for (const item of g){
    let v = item.trim()
    c.push(v)
  }

  console.log(c);
  for (const iterator of c) {
    if (iterator >=24 && iterator <=35 ) {
      tokenValidos.push(iterator)
      x = x.replaceAll(iterator,"")
    }else if (iterator >=100 && iterator <=180){
      tokenValidos.push(iterator)
      x = x.replaceAll(iterator,"")

    }else if ((iterator >=200 && iterator <=250)||(iterator >=340 && iterator <=400)||(iterator >=460 && iterator <=500)){
      tokenValidos.push(iterator)
      x = x.replaceAll(iterator,"")

    }else if (iterator >=6 && iterator <=9){
      tokenValidos.push(iterator)
      x = x.replaceAll(iterator,"")

    }else if (iterator >=2 && iterator <=5){
      tokenValidos.push(iterator)
      x = x.replaceAll(iterator,"")

    }
  }
  }else{
    console.log("eheheh");
    for (let i=24; i<=35; i++){
        if(x.includes(i)){
          tokenValidos.push(i)
          x = x.replaceAll(i,"")
        }
    }
  }
  


  console.log(x);
  console.log('Token validos: '+tokenValidos);
  console.log('token Invalidos: '+x);
  
}

