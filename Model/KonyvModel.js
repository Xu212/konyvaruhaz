class KonyvModel {
    #konyvekTomb = [];

    constructor() {
        console.log("KonyvModel");
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatModosit(adat){
        console.log("modosít model",adat);
    }
    adatTorl(adat){
        console.log("törlés model",adat);
    }
    adatKosar(adat){
        console.log("kosar model", adat)
    }
}


export default KonyvModel;