
const inputEl = document.getElementById('input-el');
const inputEl2 = document.getElementById('input-el-2');
const hotelInfoContainer = document.getElementById('hotel-info-container');

async function searchQuerybyhotelname() {
    const hotelName = inputEl.value;

    try {
       // const response = await fetch(`http://localhost:3000/Employees/${employeeName}`);
        const response = await fetch(`http://localhost:3000/Hotels/${hotelName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        hotelInfoContainer.textContent= `${data}`;
        
        console.log("Data from server:", data);

        

        const formattedData = Object.entries(data).map(([key, value]) => `${key}\t${JSON.stringify(value)}`).join('\n');
        console.log("Formatted Data:", formattedData);
        
        // hotelInfoContainer.textContent= `Location : ${data.Location_name}`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function searchQuerybyhotelplace() {
    const placeName = inputEl2.value;

    try {
       // const response = await fetch(`http://localhost:3000/Employees/${employeeName}`);
        const response = await fetch(`http://localhost:3000/Hotels/${placeName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data from server:", data);

        // Convert data into a string (Modify this part based on your data structure)
        const formattedData = Object.entries(data).map(([key, value]) => `${key}\t${JSON.stringify(value)}`).join('\n');
        console.log("Formatted Data:", formattedData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// const inputEl = document.getElementById('input-el');

// //console.log(inputEl);

// async function searchQuery(){
//     const employeeName = inputEl.value;

//      const response= await fetch(`/Employees/${employeeName}`);
//     // const data = await response.json();
//     const data =await response.json();
//     console.log(data);
//    // console.log(employeeName);
// }
