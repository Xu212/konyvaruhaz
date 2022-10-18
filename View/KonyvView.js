class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        console.log("KonyvView");
        console.log(elem)
        //for
        //egy táblázat sort jelenítsen meg
        this.#elem = elem;
            szuloElem.append(`<tr><td>${elem.id}</td>
            <td>${elem.cim}</td>
            <td>${elem.szerzo}</td>
            <td>${elem.ar}</td>
            <td><button id="mod${elem.id}">modosít</button></td>
            <td><button id="del${elem.id}">töröl</button></td>
            </tr>`);
            this.sorElem = szuloElem.children("tr:last-child")
            console.log(this.sorElem)
            this.modositElem = $(`#mod${elem.id}`);
            this.torolElem = $(`#del${elem.id}`);
            this.esemenyAdas(this.modositElem,"modosit");
            this.esemenyAdas(this.torolElem,"torles");
        }
        esemenyAdas(elem,esemenyNev){
            elem.on("click",()=>{
                console.log(esemenyNev, "view")
                this.kattintasTrigger(esemenyNev);
            })
        }
        kattintasTrigger(esemenyNev){
            console.log(esemenyNev,"trigger");
            const modositEsemeny = new CustomEvent(esemenyNev, {detail:this.#elem.id})
            window.dispatchEvent(modositEsemeny);
        
        }
}

export default KonyvView;