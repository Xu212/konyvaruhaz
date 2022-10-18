import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        console.log("könyvek")
        szuloElem.html(`<table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr>
        </thead>
        <tbody></tbody>
        </table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody")
        tomb.forEach(konyv => {
            const konyvem = new KonyvView(konyv, this.tbodyElem);
        });
    }
}

export default KonyvekView;