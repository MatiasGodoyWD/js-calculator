class Display {
  constructor(displayValorActual, displayValorAnterior) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.signos = {
      resta: "-",
      suma: "+",
      multiplicacion: "*",
      division: "/",
    };
  }
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.imprimirValores();
  }
  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;

    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }
  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.operacion] || ""
    }`;
  }
  calcular() {
    const valAnterior = parseFloat(this.valorAnterior);
    const valActual = parseFloat(this.valorActual);
    if (isNaN(valActual) || isNaN(valAnterior)) return;
    if (
      Number.isInteger(this.calculator[this.operacion](valAnterior, valActual))
    ) {
      this.valorActual = this.calculator[this.operacion](
        valAnterior,
        valActual
      );
    } else {
      this.valorActual = this.calculator[this.operacion](
        valAnterior,
        valActual
      ).toFixed(2);
    }
  }
  computar(operation) {
    this.operacion !== "igual" && this.calcular();
    this.operacion = operation;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }
}
