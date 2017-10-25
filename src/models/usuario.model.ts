export class Usuario {

    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        public uid: string,
        public senha?: string
    ) { }
}