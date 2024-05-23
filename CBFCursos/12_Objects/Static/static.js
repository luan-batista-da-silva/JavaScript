class Npc {
    static alerta = false;
    constructor(energia) {
        this.energia = energia;
    }
    info() {
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${Npc.alerta ? "Sim":"Não"}`);
        console.log(`-----------------------------------------`);
    }
    static alertar() {
        Npc.alerta = true;
    }
    /*
        Ao definir o membro como static definimos ele como membro da classe e não das instâncias das classes
    */
}

const npc1 = new Npc(100);
const npc2 = new Npc(50);
const npc3 = new Npc(20);


npc1.info();
npc2.info();
npc3.info();
