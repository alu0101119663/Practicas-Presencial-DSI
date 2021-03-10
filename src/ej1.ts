export function encodeMessage(mensaje: string) {
  const abecedario: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const abecedarioInv: string[] = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];

  let mensajeCodificado: string[] = [];
  let aux = 0;
  let contador: number = 0;
  for (let i: number = 0; i < mensaje.length; i++) {
    for (let j: number = 0; j < abecedario.length; j++) {
      if (mensaje[i] == abecedario[j]) {

        if (contador < 5) {
          mensajeCodificado[aux] += abecedarioInv[j];
          contador++;
        }else{
          aux++;
          contador = 0;
          mensajeCodificado[aux] += abecedarioInv[j];
        }
      }
    }
  }
  return mensajeCodificado;
}

export function decodeMessage(mensaje: string[]) {
  let copiaMensaje: string = '';

  const abecedario: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const abecedarioInv: string[] = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];

  for (let i: number = 0; i < mensaje.length; i++) {
    copiaMensaje += mensaje[i];
  }

  let mensajeDecodificado = '';
  for (let j: number = 0; j < copiaMensaje.length; j++) {
    for (let k: number = 0; k < abecedario.length; j++) {
      if (copiaMensaje[j] == abecedario[k]) {
        mensajeDecodificado += abecedarioInv[k];
      }
    }
    
  }
  return mensajeDecodificado;
}

console.log(`ejemplo: cadena holapacocomoestas ${encodeMessage("holapacocomoestas")}`);