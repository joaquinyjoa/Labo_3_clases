namespace Prueba {
    export class Persona {
        // Atributos protegidos
        protected apellido: string;
        protected nombre: string;

        // Propiedades públicas (Lectura y Escritura)
        public get Apellido(): string {
            return this.apellido;
        }

        public set Apellido(value: string) {
            this.apellido = value;
        }

        public get Nombre(): string {
            return this.nombre;
        }

        public set Nombre(value: string) {
            this.nombre = value;
        }

        // Constructor con dos parámetros
        constructor(apellido: string, nombre: string) {
            this.apellido = apellido;
            this.nombre = nombre;
        }

        // Método de instancia
        public ToString(): string {
            return `Apellido: ${this.apellido}, Nombre: ${this.nombre}`;
        }
    }
}
