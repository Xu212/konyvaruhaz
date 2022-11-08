class KosarView{
    #osszAr=0
    #vizsgaloTomb = []
    constructor(szuloElem, tomb){
        let txt = "";
        let db = 0;
        tomb.forEach(elem => {
            if(this.#vizsgaloTomb.includes(elem)){
                db++;
                this.#vizsgaloTomb[this.#vizsgaloTomb.length-1].peldany = db
            }
            else{
                this.#vizsgaloTomb.push({
                    id:elem.id,
                    cim:elem.cim,
                    szerzo:elem.szerzo,
                    ar:elem.ar,
                    peldany: db 
                })
            }
                this.#osszAr+=elem.ar;
        })
        console.log(this.#vizsgaloTomb)
    this.#vizsgaloTomb.forEach(obj => {
        txt+=`<div>id:${obj.id} cim:${obj.cim} szerzo:${obj.szerzo} ar:${obj.ar} peldany:${obj.peldany}></div>`
    });

        szuloElem.children("div:first-child").html(txt)
        szuloElem.children("div:last-child").html("Össz ár: "+this.#osszAr)
        }
}
export default KosarView