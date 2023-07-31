function displaytableContents(){
    const url = 'https://kontests.net/api/v1/all';
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        const addrows = document.getElementById("rows_body");
        addrows.innerHTML = "";
        data.forEach((records)=>{
            const row = `
                <tr>
                    <td>${records.name}</td>
                    <td>${records.url}</td>
                    <td>${records.start_time}</td>
                    <td>${records.end_time}</td>
                    <td>${records.duration}</td>
                    <td>${records.site}</td>
                    <td>${records.in_24_hours}</td>
                    <td>${records.status}</td>
                
                </tr>`;
            addrows.insertAdjacentHTML("beforeend", row);
        })
    })
    .catch((err)=>{
        console.log(`ERROR: ${err}`);
    })
}
displaytableContents();



