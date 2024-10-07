namespace Prueba {
    export class Alumno extends Persona {
        // Atributo protegido
        protected legajo: number;

        // Propiedad pública (Lectura y Escritura)
        public get Legajo(): number {
            return this.legajo;
        }

        public set Legajo(value: number) {
            this.legajo = value;
        }

        // Constructor con tres parámetros
        constructor(apellido: string, nombre: string, legajo: number) {
            super(apellido, nombre);
            this.legajo = legajo;
        }

        // Método de instancia (polimorfismo)
        public ToString(): string {
            return `${super.ToString()}, Legajo: ${this.legajo}`;
        }
    }
}
