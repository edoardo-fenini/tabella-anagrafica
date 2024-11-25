const data = [];
const tabella = document.getElementById("tabella");
let i = 0;


function invia() {
    let Nome = document.getElementById("Nome").value;
    let Cognome = document.getElementById("Cognome").value;
    let Indirizzo = document.getElementById("Indirizzo").value;
    let Citta = document.getElementById("Citta").value;
    const dataT = [Nome, Cognome, Indirizzo, Citta];
    data.push(dataT);

    
    


    const riga = document.createElement("tr");

        dataT.forEach(Element => {
            const colonna = document.createElement("td");
            const contenuto = document.createTextNode(Element);

            colonna.appendChild(contenuto);
            riga.appendChild(colonna);
        });

        
    tabella.appendChild(riga);
    console.log(data);




    dataT.forEach(element => {
        localStorage.setItem(i, element); 
        i++;
    });
    
    
   


    localStorage.setItem("n_elem", i);

    document.getElementById("Nome").value = "";
    document.getElementById("Cognome").value = "";
    document.getElementById("Indirizzo").value = "";
    document.getElementById("Citta").value = "";
}