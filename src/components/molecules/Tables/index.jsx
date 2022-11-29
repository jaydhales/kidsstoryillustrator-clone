import React from "react";
import {useEffect, useState} from "react";
import "./Tables.css"
import TableRow from "../TableRow";
import {CiSearch} from "react-icons/ci";

const Table = () => {

  const TableData= [

  {
      email: "cyntianduka@unimaid.edu.ng",
      firstName: "Cynthia",
      lastName: "Nduka",
      userType: "Premium",
      location: "Imo State",
  },

  {
      email: "markessien@hng.zuri.ng",
      firstName: "Mark",
      lastName: "Essien",
      userType: "Premium",
      location: "Imo State",
  },
  {
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo State",
  },
  {
    email: "joyokoh@unimaid.edu.ng",
    firstName: "Joy",
    lastName: "Okoh",
    userType: "freemium",
    location: "Lagos State",
  },
  {
    email: "Olayinkaayo@gmail.com",
    firstName: "Ayo",
    lastName: "Olayinka",
    userType: "premium",
    location: "Osun State",
  },
  {
    email: "prosper@hng.com",
    firstName: "Prosper",
    lastName: "Nduka",
    userType: "Premium",
    location: "Enugu State",
  },
  {
    email: "markessien@gmail.com",
    firstName: "Mark",
    lastName: "Essien",
    userType: "Premium",
    location: "Lagos State",
  },
  {
    email: "kikyrolad@gmail.com",
    firstName: "Kiki",
    lastName: "Roland",
    userType: "Premium",
    location: "Kwara State",
  },
  {
    email: "Ukanahdean@gmail.com",
    firstName: "Ukanah",
    lastName: "Dean",
    userType: "Premium",
    location: "Abia State",
  },
  {
    email: "tolulopemalomo@gmail.com",
    firstName: "Tolulope",
    lastName: "Malomo",
    userType: "freemium",
    location: "Kogi State",
  },
  {
    email: "dfsdxcwsfc@gmail.com",
    firstName: "Shaw",
    lastName: "Ghost",
    userType: "Premium",
    location: "Kaduna State",
  },
  {
    email: "pearlsj@gmail.com",
    firstName: "Pearls",
    lastName: "Nduka",
    userType: "Premium",
    location: "Lagos State",
  },
  {
    email: "kikifaro@gmail.com",
    firstName: "Kiki",
    lastName: "Faro",
    userType: "freemium",
    location: "Oyo State",
  },
  {
    email: "MusaAhmed@nuc.edu.ng",
    firstName: "Ahmed",
    lastName: "Musa",
    userType: "Premium",
    location: "Kano State",
  },
  {
    email: "das4l@gmail.com",
    firstName: "Joy",
    lastName: "Chuks",
    userType: "Premium",
    location: "Lagos State",
  },
  {
    email: "obaniyimariam@gmail.com",
    firstName: "Obaniyi",
    lastName: "Mariam",
    userType: "Premium",
    location: "Rivers State",
  },
  {
    email: "Hassanatbo@gmail.com",
    firstName: "Hassanat",
    lastName: "Zanny",
    userType: "Premium",
    location: "Adamawa State",
  },
  {
    email: "AdeyemoSamuel@yahoo.co.uk",
    firstName: "Samuel",
    lastName: "Adeyemo",
    userType: "Premium",
    location: "United Kingdom",
  },
  {
    email: "aguhenry@gmail.com",
    firstName: "Henry",
    lastName: "Agu",
    userType: "freemium",
    location: "Abuja",
  },
  {
    email: "ayenipeter@gmail.com",
    firstName: "Peter",
    lastName: "Ayeni",
    userType: "Premium",
    location: "Ondo State",
  },
  {
    email: "johnbosco@gmail.com",
    firstName: "John",
    lastName: "Okeke",
    userType: "freemium",
    location: "Kenya",
  },
  {
    email: " glowriaagbor@yahoo.com",
    firstName: "Glory",
    lastName: "Agbor",
    userType: "freemium",
    location: "Anambra State",
  },
  {
    email: "shalomoseni@outlook.com",
    firstName: "Shalom",
    lastName: "Oseni",
    userType: "Premium",
    location: "USA",
  },
  {
    email: "opeyemiarrin@unimaid.edu.ng",
    firstName: "Arinola",
    lastName: "Opeyemi",
    userType: "Premium",
    location: "Ekiti",
  },
  {
    email: "Charlessmith@gmail.com",
    firstName: "Charles",
    lastName: "Smith",
    userType: "Premium",
    location: "Kwara State",
  },
  {
    email: "AyobamiFelix@yahoo.com",
    firstName: "Ayobami",
    lastName: "Felix",
    userType: "freemium",
    location: "Portugal",
  },
  {
    email: "amalsingh@hotmail.com",
    firstName: "Amal",
    lastName: "Sighn",
    userType: "Premium",
    location: "Mumbai",
  },
  {
    email: "Ifeanyistephen@gmail.com",
    firstName: "Ifeanyi",
    lastName: "Stephen",
    userType: "Premium",
    location: "UAE",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "margaretplies@gmail.com",
    firstName: "Magaret",
    lastName: "Ayo",
    userType: "freemium",
    location: "SouthAfrica",
  },
  {
    email: "graceajoke@gmail.com",
    firstName: "Grace",
    lastName: "Asamu",
    userType: "premium",
    location: "Germany",
  },
  {
    email: "Justintimberlake@gmail.com",
    firstName: "Justin",
    lastName: "Timberlake",
    userType: "freemium",
    location: "China",
  },
  {
    email: "faithjoseph@gmail.com",
    firstName: "Joseph",
    lastName: "Russel",
    userType: "freemium",
    location: "Adamawa State",
  },
  {
    email: "Awolowoayorinde@gmail.com",
    firstName: "Ayo",
    lastName: "Awolowo",
    userType: "premium",
    location: "Enugu",
  },
  {
    email: "edwinokeys@gmail.com",
    firstName: "Okechuwku",
    lastName: "Edwin",
    userType: "freemium",
    location: "Enugu State",
  },
  {
    email: "tresurematthews26@gmail.com",
    firstName: "Treasure",
    lastName: "Matthews",
    userType: "freemium",
    location: "Lagos State",
  },
  {
    email: "capveeny14@gmail.com",
    firstName: "Oyinlola",
    lastName: "Double",
    userType: "premium",
    location: "Japan",
  },
  {
    email: "fikay756@gmail.com",
    firstName: "Fikayo",
    lastName: "Ansaru",
    userType: "premium",
    location: "Ogun State",
  },
  {
    email: "romosswealth78@gmail.com",
    firstName: "Remi",
    lastName: "Ahmed",
    userType: "freemium",
    location: "Gombe State",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "premium",
    location: "Ogun state",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "John",
    lastName: "Gilbet",
    userType: "premium",
    location: "Oyo state",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Enugu State",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Shawn",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Kaduna State",
  },
  {
    email: "mgdfgilberet@gmail.com",
    firstName: "Mrte",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Ogun State",
  },
  {
    email: "hunfgberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "premium",
    location: "Ondo State",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "afolayanoluwatomi@gmail.com",
    firstName: "Oluwatomi",
    lastName: "Afolayan",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "marygilberet@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "christopherokoro@gmail.com",
    firstName: "Christopher",
    lastName: "Okoro",
    userType: "freemium",
    location: "Canada",
  },
  {
    email: "jamesosunkiyesi@gmail.com",
    firstName: "James",
    lastName: "Osunkiyesi",
    userType: "freemium",
    location: "Kebbi State",
  },
  {
    email: "maryanlberet@gmail.com",
    firstName: "Maryan",
    lastName: "Gipet",
    userType: "premium",
    location: "Katsina State",
  },
  {
    email: "maygilbet@gmail.com",
    firstName: "Mariam",
    lastName: "Gibet",
    userType: "freemium",
    location: "Jigawa State",
  },
  {
    email: "ilberet@gmail.com",
    firstName: "Miyy",
    lastName: "Gilbet",
    userType: "premium",
    location: "Imo State",
  },
  {
    email: "marret@gmail.com",
    firstName: "Mry",
    lastName: "Gibet",
    userType: "freemium",
    location: "Taraba State",
  },
  {
    email: "marberet@gmail.com",
    firstName: "Mant",
    lastName: "Gilbet",
    userType: "freemium",
    location: "Plateau State",
  },
  {
    email: "lincon@gmail.com",
    firstName: "Mary",
    lastName: "Gilbet",
    userType: "premium",
    location: "Osun State",
  },
  {
    email: "papitee@gmail.com",
    firstName: "Rose",
    lastName: "Lawrence",
    userType: "freemium",
    location: "London",
  },
];


const[tableItems, setTableItems] = useState(TableData);
const [pageData, setpageData] = useState([]);
const [pageCounter, setpageCounter] =useState(10);
const [queryInputValue, setqueryInputValue]=useState ("")

useEffect(()=>{
  const arr=[];
  if (tableItems.length >0){
  for (let index = pageCounter; index < (pageCounter+10); index++) {
    if (tableItems[index]){
    arr.push(tableItems[index])
    }
  } 
  }

  
  setpageData(arr);

},[pageCounter,tableItems])

const handleSearchQuery =(e)=>{
  const query = e.target.value;

  const result = TableData.filter((item)=>item.email.includes(query));
  setqueryInputValue(e.target.value)
    setTableItems(result);

}
function paginate(a, pageIndex, pageSize) {
  var endIndex = Math.min((pageIndex + 1) * pageSize, a.length);
  return a.slice(Math.max(endIndex - pageSize, 0), endIndex);
}


const paginatedData = TableData.filter((users) => {
  if (queryInputValue === "") {
    return users;
  } else if (
    users.email
      .toString()
      .toLocaleLowerCase()
      .includes(queryInputValue.toLocaleLowerCase())
  ) {
    return users;
  }
});

  return (     
  <div className="table-wrapper">
    <div className="header-wrapper_container">
      <p>USERS LIST</p>
    <div className="search-wrapper">
    <input type="text" onChange={(e)=>handleSearchQuery(e)} placeholder="Search..."/><CiSearch className="search_icon"/>
    </div>
    </div>
    <div className="sort-page-container">
      <div className="sort">
      <img src="/assets/images/sort.svg" id="sort_icon" alt="sort-img" />
        <p>Sort by</p>
      </div>
      <div className="pagnation-action">
      <p>Showing page 1-14 of 2000</p>
        <img src="/assets/images/Vector.svg" alt="previous" 
        />
        <img src="/assets/images/Vector-table2.svg" alt="next" />
      </div>
    </div>
    
    <div className="table_f-wrap">

   <table className="min-w-full_divide-y-divide-gray-200">
    <tr >
      <td>Email</td>
      <td>First Name</td>
      <td>Last Name</td>
      <td>User Type</td>
      <td>Location</td>
    </tr>


    {paginate(paginatedData, 0, 10).map((row, index) => (
    <TableRow key={index} data={row} />

    )
  
)}

  </table> 
  </div>
  </div> );
};
export default Table;