let provArray = ['British_Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'New_Brusnwick', 'Nova_Scotia', 'Prince_Edward_Island', 'Newfoundland_and_Labrador', 'Nunavut', 'Northwest_Territories', 'Yukon'];

let results1996 = [25, 20, 4, 8, 30, 24, 3, 3, 4, 1, 1, 1, 1];
let x = 0;
let y = 0;

function changeColors(arrayYear) {
    for (i = 0; i < stateArray.length; i++) {
        let stateElement = document.getElementById(stateArray[i]);
        for (j = 0; j < stateElement.childElementCount; j++) {
            if (arrayYear[i]) {
                stateElement.children[j].setAttribute('style', 'fill: #367DCF');
            } else {
                stateElement.children[j].setAttribute('style', 'fill: #A92B17');
            }
        }
    }
}

function updateInfo(province) {
    //info0 = Population
    //info1 = Population per sq km
    //info2 = Aboriginal Population
    //info3 = Median total income

    let info0, info1, info2, info3, info4, title;
    let sq = "2";

    if (province == 0) { //Yukon
        title = "Yukon";
        info0 = "35,874";
        info1 = "0.1 people/km" + sq.sup();
        info2 = "8,195";
        info3 = "$84,521";
    } else if (province == 1) { //BC
        title = "British Columbia";
        info0 = "4,648,055";
        info1 = "5.0 people/km" + sq.sup();
        info2 = "270,585";
        info3 = "$69,995";
    } else if (province == 2) { //Alberta
        title = "Alberta";
        info0 = "4,067,175";
        info1 = "6.4 people/km" + sq.sup();
        info2 = "258,645";
        info3 = "$93,835";
    } else if (province == 3) { //Sask
        title = "Saskatchewan";
        info0 = "1,098,352";
        info1 = "1.9 people/km" + sq.sup();
        info2 = "175,015";
        info3 = "$75,412";
    } else if (province == 4) { //Manitoba
        title = "Manitoba";
        info0 = "1,278,365";
        info1 = "2.3 people/km" + sq.sup();
        info2 = "223,305";
        info3 = "$68,147";
    } else if (province == 5) { //Ontario
        title = "Ontario";
        info0 = "13,448,494";
        info1 = "14.8 people/km" + sq.sup();
        info2 = "374,395";
        info3 = "$74,287";
    } else if (province == 6) { //Nunavut
        title = "Nunavut";
        info0 = "35,944";
        info1 = "0.0 people/km" + sq.sup();
        info2 = "30,555";
        info3 = "$97,441";
    } else if (province == 7) { //Quebec
        title = "Quebec";
        info0 = "8,164,361";
        info1 = "6.0 people/km" + sq.sup();
        info2 = "182,890";
        info3 = "$59,822";
    } else if (province == 8) { //NFL & L
        title = "Newfoundland & Labrador";
        info0 = "519,716";
        info1 = "1.4 people/km" + sq.sup();
        info2 = "45,725";
        info3 = "$67,272";
    } else if (province == 9) { //NS
        title = "Nova Scotia";
        info0 = "923,598";
        info1 = "17.4 people/km" + sq.sup();
        info2 = "51,490";
        info3 = "$60,794";
    } else if (province == 10) { //NB
        title = "New Brunswick";
        info0 = "747,101";
        info1 = "10.5 people/km" + sq.sup();
        info2 = "29,385";
        info3 = "$59,347";
    } else if (province == 11) { //PEI
        title = "Prince Edward Island";
        info0 = "142,907";
        info1 = "25.1 people/km" + sq.sup();
        info2 = "2,740";
        info3 = "$61,163";
    } else if (province == 12) { //NWT
        title = "Northwest Territories";
        info0 = "41,786";
        info1 = "0.0 people/km" + sq.sup();
        info2 = "20,860";
        info3 = "$117,688";
    } 


    var tableArea = document.getElementById('output-tbl');

    var investTable = document.createElement('table');
    investTable.setAttribute('class', 'table table-striped');
    investTable.setAttribute('id', 'mainTable');

    //<thead>
    //  <tr>
    //      <th>, <th>
    var thead = document.createElement('thead');
    var theadTR = document.createElement('tr');
    var th1 = theadTR.appendChild(document.createElement('th'));
    var th2 = theadTR.appendChild(document.createElement('th'));
    var th3 = theadTR.appendChild(document.createElement('th'));
    var th4 = theadTR.appendChild(document.createElement('th'));
    var th5 = theadTR.appendChild(document.createElement('th'));

    th1.innerHTML = 'Province';
    th2.innerHTML = 'Population';
    th3.innerHTML = 'Population per km' + sq.sup();
    th4.innerHTML = 'Aboriginal Population';
    th5.innerHTML = 'Median Income';

    theadTR.prepend(th1, th2, th3, th4, th5);
    thead.appendChild(theadTR);

    //<tbody>
    //  <tr>
    //      <th>, <th>
    var tbody = document.createElement('tbody');
    var tbodyTR = document.createElement('tr');
    var tbodyth1 = tbodyTR.appendChild(document.createElement('th'));
    var tbodyth2 = tbodyTR.appendChild(document.createElement('th'));
    var tbodyth3 = tbodyTR.appendChild(document.createElement('th'));
    var tbodyth4 = tbodyTR.appendChild(document.createElement('th'));
    var tbodyth5 = tbodyTR.appendChild(document.createElement('th'));

    tbodyth1.innerHTML = title;
    tbodyth2.innerHTML = info0;
    tbodyth3.innerHTML = info1;
    tbodyth4.innerHTML = info2;
    tbodyth5.innerHTML = info3;

    tbodyTR.prepend(tbodyth1, tbodyth2, tbodyth3, tbodyth4, tbodyth5);
    tbody.appendChild(tbodyTR);

    investTable.appendChild(thead);
    investTable.appendChild(tbody);
    document.getElementById("output-tbl").innerHTML = '';
    var tableDiv = document.getElementById("output-tbl");
    tableDiv.appendChild(investTable);
}