class KonyvPublicView{
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
            szuloElem.append(`<div class="konyv">
            <h2>${elem.cim}</h2>
            <p>${elem.szerzo}</p>
            <p>${elem.ar}</p>
            <button id="kosar${elem.id}">modosít</button>
            </div>`);
            this.kosarElem = $(`#kosar${elem.id}`);
            this.kosarElem.on("click",()=>{
                console.log("kosar view")
                this.kattintasTrigger();
            })
        }
        kattintasTrigger(){
            console.log("kosar trigger")
            const esemeny = new CustomEvent("kosar",{detail:this.#elem});
            window.dispatchEvent(esemeny);
        }
}
export default KonyvPublicView