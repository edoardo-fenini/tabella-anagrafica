const data = [];                                //matrice con i gruppi
const dataP = [];                               //vettore riempito con tutti i valori
const tabella = document.getElementById("tabella");



function ricarica() {
    const data = [];
    const dataP = [];
    tabella.innerHTML = "";

    const rigaH1 = document.createElement("th");
    const h1 = document.createTextNode("Nome");
    const rigaH2 = document.createElement("th");
    const h2 = document.createTextNode("Cognome");
    const rigaH3 = document.createElement("th");
    const h3 = document.createTextNode("Indirizzo");
    const rigaH4 = document.createElement("th");
    const h4 = document.createTextNode("Citta");


    rigaH1.appendChild(h1);
    tabella.appendChild(rigaH1);
    rigaH2.appendChild(h2);
    tabella.appendChild(rigaH2);
    rigaH3.appendChild(h3);
    tabella.appendChild(rigaH3);
    rigaH4.appendChild(h4);
    tabella.appendChild(rigaH4);
    


    
    const n_element = localStorage.getItem("n_elem");



    
    
    for (let i = 0; i < n_element; i++) {       //for per riempire dataP //USARE n_element IN QUANTO dataP E' VUOTO E NON PERMETTEREBBE I CICLI
        dataP.push(localStorage.getItem(i));
    }
    
    console.log(dataP);
    

    for (let i = 0; i < dataP.length; i+=4) {   //for che cicla a step di 4, ma intanto incrementa i es(0, 4, 8, 12)
        const dataT = dataP.slice(i, i+4);      //raggruppamento di data, tramite lo slice dall'indice i al i+4 es(0-4, 4-8, 8-12) il secodno numero non è mai incluso
        data.push(dataT)                        //push sull'array data

    }




   
        




   data.forEach(element => {
    const riga = document.createElement("tr");

    element.forEach(dato => {
        const contenuto = document.createTextNode(dato);
        const colonna = document.createElement("td");

        colonna.appendChild(contenuto);
        riga.appendChild(colonna);
    });
    tabella.appendChild(riga);


});
    











}