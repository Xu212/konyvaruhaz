class KosarModel{
    #kosarTomb = []
    constructor(){
        
    }
    getKosarTomb(){
        return this.#kosarTomb;
    }
    kosarba(elem){
        this.#kosarTomb.push(elem)
        console.log(this.#kosarTomb)
    }
}
export default KosarModel