//tableaux de stockage

let peopleTransports=[];//déplacements domicile travail
let gasT=[]; //différents carburants
let peopleWtransport=[]; //déplacement cadre travail
let gasW=[];// différents carburants cadre travail
let peopleItransport=[]; //déplacements invités
let gasI=[]; //différents carburants invités

//variables totales de calcul
let totalCO2 = 0;
let co2DeplacementsDomicileTravail=0;
let co2DeplacementsDomicileTravailCarburant=0;
let co2DeplacementsCadreTravail = 0;
let co2DeplacementsCadreTravailCarburant=0;
let co2DeplacementsInvites=0;
let co2DeplacementsInvitesCarburant=0;
//fonction d'ajout et de mises à jours des listes

//déplacement domicile travail

function addPeopleTransport(){

    const mode = document.getElementById("deplacementdtmode").value;
    const distance = parseFloat(document.getElementById("distancedt").value);
    const number = parseInt(document.getElementById("peopledt").value);

//-------------------------REvoir la gestion des erreurs correctement-------//
    if (mode && !isNaN(distance) && distance > 0) {
        if (isNaN(number) || number < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

    
       peopleTransports.push({mode: mode, distance: distance, number: number});
       updatePeopleTransportList();
}
}

function updatePeopleTransportList(){
    const list = document.getElementById("people-transport-list");
    list.innerHTML='';
    peopleTransports.forEach(pt=>{
        const li = document.createElement('li');
        li.textContent= `Mode: ${pt.mode}, Distance: ${pt.distance} km, ${pt.mode === "voitureEssence" || pt.mode === "voitureDiesel" || pt.mode === "hybride" || pt.mode ==="electrique" ? "Voitures" : "Personnes"}: ${pt.number}`;
        list.appendChild(li);
    });
}

function updatePeopleNumberLabel() {
    const mode = document.getElementById("deplacementdtmode").value;
    const label = document.getElementById("peoplenumber"); // On récupère l'élément label

    // On compare directement la valeur
    if (mode === "voitureEssence" || mode === "voitureDiesel" || mode ==="hybride" || mode ==="electrique") {
        label.textContent = "Nombre de voitures :";
    } else {
        label.textContent = "Nombre de personnes :";
    }

    
}

function addGas(){
    const type = document.getElementById("gas").value;
    const quantity = parseFloat(document.getElementById("gas-quantity").value);
//rajouter correctement la gestion des erreurs

// --------------------------------//
    if(type && !isNaN(quantity) && quantity>0){
        if (isNaN(quantity) || quantity < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

        gasT.push({type: type, quantity: quantity});
        updateGasList();
      
    }
}

function updateGasList(){
    const list = document.getElementById("gas-list");
    list.innerHTML='';
    gasT.forEach(gt=>{
        const li = document.createElement('li');
        li.textContent = `Carburant: ${gt.type}, Quantité: ${gt.quantity} L`;
        list.appendChild(li);
    });
}

//--- fonction pour les déplacements cadre de travail-------
function addPeopleWTransport(){

    const mode = document.getElementById("deplacementctmode").value;
    const distance = parseFloat(document.getElementById("distancect").value);
    const number = parseInt(document.getElementById("peoplect").value);

//-------------------------REvoir la gestion des erreurs correctement-------//
    if (mode && !isNaN(distance) && distance > 0) {
        if (isNaN(number) || number < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

    
        peopleWtransport.push({mode: mode, distance: distance, number: number});
       updatePeopleWTransportList();
}
}

function updatePeopleWTransportList(){
    const list = document.getElementById("peoplework-transport-list");
    list.innerHTML='';
    peopleWtransport.forEach(pt=>{
        const li = document.createElement('li');
        li.textContent= `Mode: ${pt.mode}, Distance: ${pt.distance} km, ${pt.mode === "voitureEssence" || pt.mode === "voitureDiesel" || pt.mode === "hybride" || pt.mode ==="electrique" ? "Voitures" : "Personnes"}: ${pt.number}`;
        list.appendChild(li);
    });
}

function updatePeopleWNumberLabel() {
    const mode = document.getElementById("deplacementctmode").value;
    const label = document.getElementById("peopleworknumber"); // On récupère l'élément label

    // On compare directement la valeur
    if (mode === "voitureEssence" || mode === "voitureDiesel" || mode ==="hybride" || mode ==="electrique") {
        label.textContent = "Nombre de voitures :";
    } else if(mode ==="avion1court" || mode==="avionmoyen1"|| mode==="avionlong1") {
        label.textContent ="Nombre de voyages";
       
    } else{
        label.textContent = "Nombre de personnes :";
    }
   

    
}

function addGasW(){
    const type = document.getElementById("gasw").value;
    const quantity = parseFloat(document.getElementById("gasw-quantity").value);
//rajouter correctement la gestion des erreurs

// --------------------------------//
    if(type && !isNaN(quantity) && quantity>0){
        if (isNaN(quantity) || quantity < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

        gasW.push({type: type, quantity: quantity});
        updateGasWList();
      
    }
}

function updateGasWList(){
    const list = document.getElementById("gasw-list");
    list.innerHTML='';
    gasW.forEach(g=>{
        const li = document.createElement('li');
        li.textContent = `Carburant: ${g.type}, Quantité: ${g.quantity} L`;
        list.appendChild(li);
    });
}
/*---------------------------//fonctions pour déplacements d'invités---------------------------------------------------------
----------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
*/

function addPeopleITransport(){

    const mode = document.getElementById("deplacementimode").value;
    const distance = parseFloat(document.getElementById("distancei").value);
    const number = parseInt(document.getElementById("peoplei").value);

//-------------------------REvoir la gestion des erreurs correctement-------//
    if (mode && !isNaN(distance) && distance > 0) {
        if (isNaN(number) || number < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

    
        peopleItransport.push({mode: mode, distance: distance, number: number});
       updatePeopleITransportList();
}
}

function updatePeopleITransportList(){
    const list = document.getElementById("peopleinvite-transport-list");
    list.innerHTML='';
    peopleItransport.forEach(pt=>{
        const li = document.createElement('li');
        li.textContent= `Mode: ${pt.mode}, Distance: ${pt.distance} km, ${pt.mode === "voitureEssence" || pt.mode === "voitureDiesel" || pt.mode === "hybride" || pt.mode ==="electrique" ? "Voitures" : "Personnes"}: ${pt.number}`;
        list.appendChild(li);
    });
}

function updatePeopleINumberLabel() {
    const mode = document.getElementById("deplacementimode").value;
    const label = document.getElementById("peopleinvitenumber"); // On récupère l'élément label

    // On compare directement la valeur
    if (mode === "voitureEssence" || mode === "voitureDiesel" || mode ==="hybride" || mode ==="electrique") {
        label.textContent = "Nombre de voitures :";
    } else if(mode ==="avion1court" || mode==="avionmoyen1"|| mode==="avionlong1") {
        label.textContent ="Nombre de voyages";
       
    } else{
        label.textContent = "Nombre de personnes :";
    }
   

    
}

function addGasI(){
    const type = document.getElementById("gasi").value;
    const quantity = parseFloat(document.getElementById("gasi-quantity").value);
//rajouter correctement la gestion des erreurs

// --------------------------------//
    if(type && !isNaN(quantity) && quantity>0){
        if (isNaN(quantity) || quantity < 1) {
            alert("Veuillez renseigner un nombre valide (>=1).");
            return;
        }

        gasI.push({type: type, quantity: quantity});
        updateGasIList();
      
    }
}

function updateGasIList(){
    const list = document.getElementById("gasi-list");
    list.innerHTML='';
    gasI.forEach(g=>{
        const li = document.createElement('li');
        li.textContent = `Carburant: ${g.type}, Quantité: ${g.quantity} L`;
        list.appendChild(li);
    });
}



//fonctions de calculs

//calcul émission déplacement domiciles travail (Moyen de déplacement + Carburant)

function calculatePeopleTransport(){
    const factors ={  //à modifier
        voitureEssence:0.178,
        voitureDiesel:0.227,
        hybride:0.175,
        electrique:0.160,
        tramway:0.0253,
        bus:0.027,
        marche:0,
        velo:0,
        train:0.0253
        

    };

    let total=0;
    peopleTransports.forEach(pt=>{
        let factor = factors[pt.mode] || 0;
        total += pt.distance * factor * pt.number;
    });
    return total;
}

function calculateGasPeople(){
    const factors={ //à modifier
        essence: 0.12,
        essence1: 0.157,
        gazole: 0.78,
        biodiesel:0.78,
        bioethanol:0.45,
        gnl:0.36
    };
    let total=0;
    gasT.forEach(gt=>{
        let factor = factors[gt.type] || 0; 
        total += gt.quantity * factor;
    });
   return total;
}

//------------------------Calcul emissions cadre travail----//

function calculatePeopleWTransport(){
    const factors ={  //à modifier
        voitureEssence:0.178,
        voitureDiesel:0.227,
        hybride:0.175,
        electrique:0.160,
        tramway:0.0253,
        bus:0.027,
        marche:0,
        velo:0,
        train:0.0253
        

    };

    let total=0;
    peopleWtransport.forEach(pt=>{
        let factor = factors[pt.mode] || 0;
        total += pt.distance * factor * pt.number;
    });
    return total;
}

function calculateGasWPeople(){
    const factors={ //à modifier
        essence: 0.12,
        essence1: 0.157,
        gazole: 0.78,
        biodiesel:0.78,
        bioethanol:0.45,
        gnl:0.36
    };
    let total=0;
    gasW.forEach(gt=>{
        let factor = factors[gt.type] || 0; 
        total += gt.quantity * factor;
    });
   return total;
}

//----------------------------------calculs émissions invités------//

function calculatePeopleITransport(){
    const factors ={  //à modifier
        voitureEssence:0.178,
        voitureDiesel:0.227,
        hybride:0.175,
        electrique:0.160,
        tramway:0.0253,
        bus:0.027,
        marche:0,
        velo:0,
        train:0.0253,
        avioncourt:0.227,
        avionmoyen:0.200,
        avionlong:0.178,
        avion1court:0.220,
        avionmoyen1:0.205,
        avionlong1:0.180
        

    };

    let total=0;
    peopleItransport.forEach(pt=>{
        let factor = factors[pt.mode];
        total += pt.distance * factor * pt.number;
    });
    return total;
}

function calculateGasIPeople(){
    const factors={ //à modifier
        essence: 0.12,
        essence1: 0.157,
        gazole: 0.78,
        biodiesel:0.78,
        bioethanol:0.45,
        gnl:0.36
    };
    let total=0;
    gasI.forEach(gt=>{
        let factor = factors[gt.type] || 0; 
        total += gt.quantity * factor;
    });
   return total;
}

//-------------Fonction affichage graphique----------------//
function displayCarbonChart(co2DeplacementsDomicileTravail,co2DeplacementsCadreTravail,co2DeplacementsInvites){
    const ctx = document.getElementById('co2').getContext('2d');

   // Création du graphique
   new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Déplacements Domicile Travail', 'Déplacements Cadre Travail','Déplacements invités'],
        datasets: [{
            label: 'Répartion des Émissions carbone (kg CO₂e)',
            data: [co2DeplacementsDomicileTravail.toFixed(2), co2DeplacementsCadreTravail.toFixed(2), co2DeplacementsInvites.toFixed(2)],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(80, 24, 192, 0.6)' ],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(80, 24, 192, 1)' ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,                 // Afficher le titre
                text: 'Répartition des Émissions Carbone', // Texte du titre
                font: {
                    size: 18,                  // Taille de la police
                    weight: 'bold',            // Poids de la police (gras)
                },
                padding: {
                    top: 20                   // Espacement au-dessus du titre (ajustable)
                },
                position: 'bottom',             // Position du titre en bas
            },
            legend: {
                display: true // Masquer la légende (si vous ne la voulez pas)
            }
        }
    }
});
}

//----------exportation Excel----
function exportExcel(){
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formatteddate = `${day}-${month}-${year}`;

    const worksheetData = [
        ["Bilan Carbone Total (kg CO₂e)", "Déplacements Domicile-Travail", "Déplacements Cadre-Travail","Déplacements invités", "Date"],
        [totalCO2.toFixed(2), co2DeplacementsDomicileTravail.toFixed(2), co2DeplacementsCadreTravail.toFixed(2), co2DeplacementsInvites.toFixed(2), formatteddate]
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Résultats Bilan Carbone");
    const fileName = `Bilan_Carbone_${formatteddate}.xlsx`;
    XLSX.writeFile(workbook, fileName);
}

//-----------------------------------calcul global-----------------------//
function calculateCO2(){
    //calcul émissions par section
    co2DeplacementsDomicileTravail = calculatePeopleTransport();
    co2DeplacementsDomicileTravailCarburant = calculateGasPeople();
    co2DeplacementsCadreTravail = calculatePeopleWTransport();
    co2DeplacementsCadreTravailCarburant=calculateGasWPeople();
    co2DeplacementsInvites = calculatePeopleITransport();
    co2DeplacementsInvitesCarburant = calculateGasIPeople();

    totalCO2 = co2DeplacementsDomicileTravail + co2DeplacementsDomicileTravailCarburant + co2DeplacementsCadreTravail + co2DeplacementsCadreTravailCarburant + co2DeplacementsInvites + co2DeplacementsInvitesCarburant;
    let resultHTML= `
    <p> Le bilan carbone total est de <strong>${totalCO2.toFixed(2)}</strong></p>
    <p> Emissions liés au déplacement domicile-trvail: <strong> ${co2DeplacementsDomicileTravail.toFixed(2)} </strong> et conso de carburant :<strong> ${co2DeplacementsDomicileTravailCarburant}</strong></p>
    <p> Emissions déplacement de personnes dans le cadre du travail: <strong>${co2DeplacementsCadreTravail.toFixed(2)}</strong> , en termes de carburant : <strong>${co2DeplacementsCadreTravailCarburant}</strong></p>
    <p> Emissions déplacement de personnes des invités/visiteurs: <strong>${co2DeplacementsInvites.toFixed(2)}</strong> , en termes de carburant : <strong>${co2DeplacementsInvitesCarburant}</strong></p>

    `
    document.getElementById('result').innerHTML= resultHTML;

    displayCarbonChart(co2DeplacementsDomicileTravail,co2DeplacementsCadreTravail,co2DeplacementsInvites);

    document.getElementById('formulaire').style.display='none';
    document.getElementById('result-section').style.display='block';
}

function goBack(){
    document.getElementById('result-section').style.display='none';
    document.getElementById('formulaire').style.display='block'
}
