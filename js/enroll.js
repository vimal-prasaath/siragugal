var places;
places = {
    "states": [
        {
            "state": "-",
            "districts": [
                "-"
            ]
        },
        {
            "state": "Andhra Pradesh",
            "districts": [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
                "Srikakulam",
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "YSR Kadapa"
            ]
        },
        {
            "state": "Arunachal Pradesh",
            "districts": [
                "Tawang",
                "West Kameng",
                "East Kameng",
                "Papum Pare",
                "Kurung Kumey",
                "Kra Daadi",
                "Lower Subansiri",
                "Upper Subansiri",
                "West Siang",
                "East Siang",
                "Siang",
                "Upper Siang",
                "Lower Siang",
                "Lower Dibang Valley",
                "Dibang Valley",
                "Anjaw",
                "Lohit",
                "Namsai",
                "Changlang",
                "Tirap",
                "Longding"
            ]
        },
        {
            "state": "Assam",
            "districts": [
                "Baksa",
                "Barpeta",
                "Biswanath",
                "Bongaigaon",
                "Cachar",
                "Charaideo",
                "Chirang",
                "Darrang",
                "Dhemaji",
                "Dhubri",
                "Dibrugarh",
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup Metropolitan",
                "Kamrup",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Dima Hasao",
                "Sivasagar",
                "Sonitpur",
                "South Salmara-Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong"
            ]
        },
        {
            "state": "Bihar",
            "districts": [
                "Araria",
                "Arwal",
                "Aurangabad",
                "Banka",
                "Begusarai",
                "Bhagalpur",
                "Bhojpur",
                "Buxar",
                "Darbhanga",
                "East Champaran (Motihari)",
                "Gaya",
                "Gopalganj",
                "Jamui",
                "Jehanabad",
                "Kaimur (Bhabua)",
                "Katihar",
                "Khagaria",
                "Kishanganj",
                "Lakhisarai",
                "Madhepura",
                "Madhubani",
                "Munger (Monghyr)",
                "Muzaffarpur",
                "Nalanda",
                "Nawada",
                "Patna",
                "Purnia (Purnea)",
                "Rohtas",
                "Saharsa",
                "Samastipur",
                "Saran",
                "Sheikhpura",
                "Sheohar",
                "Sitamarhi",
                "Siwan",
                "Supaul",
                "Vaishali",
                "West Champaran"
            ]
        },
        {
            "state": "Chandigarh (UT)",
            "districts": [
                "Chandigarh"
            ]
        },
        {
            "state": "Chhattisgarh",
            "districts": [
                "Balod",
                "Baloda Bazar",
                "Balrampur",
                "Bastar",
                "Bemetara",
                "Bijapur",
                "Bilaspur",
                "Dantewada (South Bastar)",
                "Dhamtari",
                "Durg",
                "Gariyaband",
                "Janjgir-Champa",
                "Jashpur",
                "Kabirdham (Kawardha)",
                "Kanker (North Bastar)",
                "Kondagaon",
                "Korba",
                "Korea (Koriya)",
                "Mahasamund",
                "Mungeli",
                "Narayanpur",
                "Raigarh",
                "Raipur",
                "Rajnandgaon",
                "Sukma",
                "Surajpur  ",
                "Surguja"
            ]
        },
        {
            "state": "Dadra and Nagar Haveli (UT)",
            "districts": [
                "Dadra & Nagar Haveli"
            ]
        },
        {
            "state": "Daman and Diu (UT)",
            "districts": [
                "Daman",
                "Diu"
            ]
        },
        {
            "state": "Delhi (NCT)",
            "districts": [
                "Central Delhi",
                "East Delhi",
                "New Delhi",
                "North Delhi",
                "North East  Delhi",
                "North West  Delhi",
                "Shahdara",
                "South Delhi",
                "South East Delhi",
                "South West  Delhi",
                "West Delhi"
            ]
        },
        {
            "state": "Goa",
            "districts": [
                "North Goa",
                "South Goa"
            ]
        },
        {
            "state": "Gujarat",
            "districts": [
                "Ahmedabad",
                "Amreli",
                "Anand",
                "Aravalli",
                "Banaskantha (Palanpur)",
                "Bharuch",
                "Bhavnagar",
                "Botad",
                "Chhota Udepur",
                "Dahod",
                "Dangs (Ahwa)",
                "Devbhoomi Dwarka",
                "Gandhinagar",
                "Gir Somnath",
                "Jamnagar",
                "Junagadh",
                "Kachchh",
                "Kheda (Nadiad)",
                "Mahisagar",
                "Mehsana",
                "Morbi",
                "Narmada (Rajpipla)",
                "Navsari",
                "Panchmahal (Godhra)",
                "Patan",
                "Porbandar",
                "Rajkot",
                "Sabarkantha (Himmatnagar)",
                "Surat",
                "Surendranagar",
                "Tapi (Vyara)",
                "Vadodara",
                "Valsad"
            ]
        },
        {
            "state": "Haryana",
            "districts": [
                "Ambala",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gurgaon",
                "Hisar",
                "Jhajjar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Kurukshetra",
                "Mahendragarh",
                "Mewat",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Rewari",
                "Rohtak",
                "Sirsa",
                "Sonipat",
                "Yamunanagar"
            ]
        },
        {
            "state": "Himachal Pradesh",
            "districts": [
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Kangra",
                "Kinnaur",
                "Kullu",
                "Lahaul &amp; Spiti",
                "Mandi",
                "Shimla",
                "Sirmaur (Sirmour)",
                "Solan",
                "Una"
            ]
        },
        {
            "state": "Jammu and Kashmir",
            "districts": [
                "Anantnag",
                "Bandipore",
                "Baramulla",
                "Budgam",
                "Doda",
                "Ganderbal",
                "Jammu",
                "Kargil",
                "Kathua",
                "Kishtwar",
                "Kulgam",
                "Kupwara",
                "Leh",
                "Poonch",
                "Pulwama",
                "Rajouri",
                "Ramban",
                "Reasi",
                "Samba",
                "Shopian",
                "Srinagar",
                "Udhampur"
            ]
        },
        {
            "state": "Jharkhand",
            "districts": [
                "Bokaro",
                "Chatra",
                "Deoghar",
                "Dhanbad",
                "Dumka",
                "East Singhbhum",
                "Garhwa",
                "Giridih",
                "Godda",
                "Gumla",
                "Hazaribag",
                "Jamtara",
                "Khunti",
                "Koderma",
                "Latehar",
                "Lohardaga",
                "Pakur",
                "Palamu",
                "Ramgarh",
                "Ranchi",
                "Sahibganj",
                "Seraikela-Kharsawan",
                "Simdega",
                "West Singhbhum"
            ]
        },
        {
            "state": "Karnataka",
            "districts": [
                "Bagalkot",
                "Ballari (Bellary)",
                "Belagavi (Belgaum)",
                "Bengaluru (Bangalore) Rural",
                "Bengaluru (Bangalore) Urban",
                "Bidar",
                "Chamarajanagar",
                "Chikballapur",
                "Chikkamagaluru (Chikmagalur)",
                "Chitradurga",
                "Dakshina Kannada",
                "Davangere",
                "Dharwad",
                "Gadag",
                "Hassan",
                "Haveri",
                "Kalaburagi (Gulbarga)",
                "Kodagu",
                "Kolar",
                "Koppal",
                "Mandya",
                "Mysuru (Mysore)",
                "Raichur",
                "Ramanagara",
                "Shivamogga (Shimoga)",
                "Tumakuru (Tumkur)",
                "Udupi",
                "Uttara Kannada (Karwar)",
                "Vijayapura (Bijapur)",
                "Yadgir"
            ]
        },
        {
            "state": "Kerala",
            "districts": [
                "Alappuzha",
                "Ernakulam",
                "Idukki",
                "Kannur",
                "Kasaragod",
                "Kollam",
                "Kottayam",
                "Kozhikode",
                "Malappuram",
                "Palakkad",
                "Pathanamthitta",
                "Thiruvananthapuram",
                "Thrissur",
                "Wayanad"
            ]
        },
        {
            "state": "Lakshadweep (UT)",
            "districts": [
                "Agatti",
                "Amini",
                "Androth",
                "Bithra",
                "Chethlath",
                "Kavaratti",
                "Kadmath",
                "Kalpeni",
                "Kilthan",
                "Minicoy"
            ]
        },
        {
            "state": "Madhya Pradesh",
            "districts": [
                "Agar Malwa",
                "Alirajpur",
                "Anuppur",
                "Ashoknagar",
                "Balaghat",
                "Barwani",
                "Betul",
                "Bhind",
                "Bhopal",
                "Burhanpur",
                "Chhatarpur",
                "Chhindwara",
                "Damoh",
                "Datia",
                "Dewas",
                "Dhar",
                "Dindori",
                "Guna",
                "Gwalior",
                "Harda",
                "Hoshangabad",
                "Indore",
                "Jabalpur",
                "Jhabua",
                "Katni",
                "Khandwa",
                "Khargone",
                "Mandla",
                "Mandsaur",
                "Morena",
                "Narsinghpur",
                "Neemuch",
                "Panna",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rewa",
                "Sagar",
                "Satna",
                "Sehore",
                "Seoni",
                "Shahdol",
                "Shajapur",
                "Sheopur",
                "Shivpuri",
                "Sidhi",
                "Singrauli",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha"
            ]
        },
        {
            "state": "Maharashtra",
            "districts": [
                "Ahmednagar",
                "Akola",
                "Amravati",
                "Aurangabad",
                "Beed",
                "Bhandara",
                "Buldhana",
                "Chandrapur",
                "Dhule",
                "Gadchiroli",
                "Gondia",
                "Hingoli",
                "Jalgaon",
                "Jalna",
                "Kolhapur",
                "Latur",
                "Mumbai City",
                "Mumbai Suburban",
                "Nagpur",
                "Nanded",
                "Nandurbar",
                "Nashik",
                "Osmanabad",
                "Palghar",
                "Parbhani",
                "Pune",
                "Raigad",
                "Ratnagiri",
                "Sangli",
                "Satara",
                "Sindhudurg",
                "Solapur",
                "Thane",
                "Wardha",
                "Washim",
                "Yavatmal"
            ]
        },
        {
            "state": "Manipur",
            "districts": [
                "Bishnupur",
                "Chandel",
                "Churachandpur",
                "Imphal East",
                "Imphal West",
                "Jiribam",
                "Kakching",
                "Kamjong",
                "Kangpokpi",
                "Noney",
                "Pherzawl",
                "Senapati",
                "Tamenglong",
                "Tengnoupal",
                "Thoubal",
                "Ukhrul"
            ]
        },
        {
            "state": "Meghalaya",
            "districts": [
                "East Garo Hills",
                "East Jaintia Hills",
                "East Khasi Hills",
                "North Garo Hills",
                "Ri Bhoi",
                "South Garo Hills",
                "South West Garo Hills ",
                "South West Khasi Hills",
                "West Garo Hills",
                "West Jaintia Hills",
                "West Khasi Hills"
            ]
        },
        {
            "state": "Mizoram",
            "districts": [
                "Aizawl",
                "Champhai",
                "Kolasib",
                "Lawngtlai",
                "Lunglei",
                "Mamit",
                "Saiha",
                "Serchhip"
            ]
        },
        {
            "state": "Nagaland",
            "districts": [
                "Dimapur",
                "Kiphire",
                "Kohima",
                "Longleng",
                "Mokokchung",
                "Mon",
                "Peren",
                "Phek",
                "Tuensang",
                "Wokha",
                "Zunheboto"
            ]
        },
        {
            "state": "Odisha",
            "districts": [
                "Angul",
                "Balangir",
                "Balasore",
                "Bargarh",
                "Bhadrak",
                "Boudh",
                "Cuttack",
                "Deogarh",
                "Dhenkanal",
                "Gajapati",
                "Ganjam",
                "Jagatsinghapur",
                "Jajpur",
                "Jharsuguda",
                "Kalahandi",
                "Kandhamal",
                "Kendrapara",
                "Kendujhar (Keonjhar)",
                "Khordha",
                "Koraput",
                "Malkangiri",
                "Mayurbhanj",
                "Nabarangpur",
                "Nayagarh",
                "Nuapada",
                "Puri",
                "Rayagada",
                "Sambalpur",
                "Sonepur",
                "Sundargarh"
            ]
        },
        {
            "state": "Puducherry (UT)",
            "districts": [
                "Karaikal",
                "Mahe",
                "Pondicherry",
                "Yanam"
            ]
        },
        {
            "state": "Punjab",
            "districts": [
                "Amritsar",
                "Barnala",
                "Bathinda",
                "Faridkot",
                "Fatehgarh Sahib",
                "Fazilka",
                "Ferozepur",
                "Gurdaspur",
                "Hoshiarpur",
                "Jalandhar",
                "Kapurthala",
                "Ludhiana",
                "Mansa",
                "Moga",
                "Muktsar",
                "Nawanshahr (Shahid Bhagat Singh Nagar)",
                "Pathankot",
                "Patiala",
                "Rupnagar",
                "Sahibzada Ajit Singh Nagar (Mohali)",
                "Sangrur",
                "Tarn Taran"
            ]
        },
        {
            "state": "Rajasthan",
            "districts": [
                "Ajmer",
                "Alwar",
                "Banswara",
                "Baran",
                "Barmer",
                "Bharatpur",
                "Bhilwara",
                "Bikaner",
                "Bundi",
                "Chittorgarh",
                "Churu",
                "Dausa",
                "Dholpur",
                "Dungarpur",
                "Hanumangarh",
                "Jaipur",
                "Jaisalmer",
                "Jalore",
                "Jhalawar",
                "Jhunjhunu",
                "Jodhpur",
                "Karauli",
                "Kota",
                "Nagaur",
                "Pali",
                "Pratapgarh",
                "Rajsamand",
                "Sawai Madhopur",
                "Sikar",
                "Sirohi",
                "Sri Ganganagar",
                "Tonk",
                "Udaipur"
            ]
        },
        {
            "state": "Sikkim",
            "districts": [
                "East Sikkim",
                "North Sikkim",
                "South Sikkim",
                "West Sikkim"
            ]
        },
        {
            "state": "Tamil Nadu",
            "districts": [
                "Ariyalur",
                "Chennai",
                "Coimbatore",
                "Cuddalore",
                "Dharmapuri",
                "Dindigul",
                "Erode",
                "Kanchipuram",
                "Kanyakumari",
                "Karur",
                "Krishnagiri",
                "Madurai",
                "Nagapattinam",
                "Namakkal",
                "Nilgiris",
                "Perambalur",
                "Pudukkottai",
                "Ramanathapuram",
                "Salem",
                "Sivaganga",
                "Thanjavur",
                "Theni",
                "Thoothukudi (Tuticorin)",
                "Tiruchirappalli",
                "Tirunelveli",
                "Tiruppur",
                "Tiruvallur",
                "Tiruvannamalai",
                "Tiruvarur",
                "Vellore",
                "Viluppuram",
                "Virudhunagar"
            ]
        },
        {
            "state": "Telangana",
            "districts": [
                "Adilabad",
                "Bhadradri Kothagudem",
                "Hyderabad",
                "Jagtial",
                "Jangaon",
                "Jayashankar Bhoopalpally",
                "Jogulamba Gadwal",
                "Kamareddy",
                "Karimnagar",
                "Khammam",
                "Komaram Bheem Asifabad",
                "Mahabubabad",
                "Mahabubnagar",
                "Mancherial",
                "Medak",
                "Medchal",
                "Nagarkurnool",
                "Nalgonda",
                "Nirmal",
                "Nizamabad",
                "Peddapalli",
                "Rajanna Sircilla",
                "Rangareddy",
                "Sangareddy",
                "Siddipet",
                "Suryapet",
                "Vikarabad",
                "Wanaparthy",
                "Warangal (Rural)",
                "Warangal (Urban)",
                "Yadadri Bhuvanagiri"
            ]
        },
        {
            "state": "Tripura",
            "districts": [
                "Dhalai",
                "Gomati",
                "Khowai",
                "North Tripura",
                "Sepahijala",
                "South Tripura",
                "Unakoti",
                "West Tripura"
            ]
        },
        {
            "state": "Uttarakhand",
            "districts": [
                "Almora",
                "Bageshwar",
                "Chamoli",
                "Champawat",
                "Dehradun",
                "Haridwar",
                "Nainital",
                "Pauri Garhwal",
                "Pithoragarh",
                "Rudraprayag",
                "Tehri Garhwal",
                "Udham Singh Nagar",
                "Uttarkashi"
            ]
        },
        {
            "state": "Uttar Pradesh",
            "districts": [
                "Agra",
                "Aligarh",
                "Allahabad",
                "Ambedkar Nagar",
                "Amethi (Chatrapati Sahuji Mahraj Nagar)",
                "Amroha (J.P. Nagar)",
                "Auraiya",
                "Azamgarh",
                "Baghpat",
                "Bahraich",
                "Ballia",
                "Balrampur",
                "Banda",
                "Barabanki",
                "Bareilly",
                "Basti",
                "Bhadohi",
                "Bijnor",
                "Budaun",
                "Bulandshahr",
                "Chandauli",
                "Chitrakoot",
                "Deoria",
                "Etah",
                "Etawah",
                "Faizabad",
                "Farrukhabad",
                "Fatehpur",
                "Firozabad",
                "Gautam Buddha Nagar",
                "Ghaziabad",
                "Ghazipur",
                "Gonda",
                "Gorakhpur",
                "Hamirpur",
                "Hapur (Panchsheel Nagar)",
                "Hardoi",
                "Hathras",
                "Jalaun",
                "Jaunpur",
                "Jhansi",
                "Kannauj",
                "Kanpur Dehat",
                "Kanpur Nagar",
                "Kanshiram Nagar (Kasganj)",
                "Kaushambi",
                "Kushinagar (Padrauna)",
                "Lakhimpur - Kheri",
                "Lalitpur",
                "Lucknow",
                "Maharajganj",
                "Mahoba",
                "Mainpuri",
                "Mathura",
                "Mau",
                "Meerut",
                "Mirzapur",
                "Moradabad",
                "Muzaffarnagar",
                "Pilibhit",
                "Pratapgarh",
                "RaeBareli",
                "Rampur",
                "Saharanpur",
                "Sambhal (Bhim Nagar)",
                "Sant Kabir Nagar",
                "Shahjahanpur",
                "Shamali (Prabuddh Nagar)",
                "Shravasti",
                "Siddharth Nagar",
                "Sitapur",
                "Sonbhadra",
                "Sultanpur",
                "Unnao",
                "Varanasi"
            ]
        },
        {
            "state": "West Bengal",
            "districts": [
                "Alipurduar",
                "Bankura",
                "Birbhum",
                "Burdwan (Bardhaman)",
                "Cooch Behar",
                "Dakshin Dinajpur (South Dinajpur)",
                "Darjeeling",
                "Hooghly",
                "Howrah",
                "Jalpaiguri",
                "Kalimpong",
                "Kolkata",
                "Malda",
                "Murshidabad",
                "Nadia",
                "North 24 Parganas",
                "Paschim Medinipur (West Medinipur)",
                "Purba Medinipur (East Medinipur)",
                "Purulia",
                "South 24 Parganas",
                "Uttar Dinajpur (North Dinajpur)"
            ]
        }
    ]
};

var uId = sessionStorage.getItem('userid');
var usrDetailsPrePopulated;
(function () {
    var noOfStates, i, value;
    var nativeStateList = document.getElementById("vol-state");
    var permanenetStateList = document.getElementById("vol-state-per");
    var currentStateList = document.getElementById("vol-state-cur");

    noOfStates = places["states"].length;
    for (i = 0; i < noOfStates; i++) {
        value = places["states"][i]["state"];
        nativeStateList.options[i] = new Option(value, value, 0, 0);
        permanenetStateList.options[i] = new Option(value, value, 0, 0);
        currentStateList.options[i] = new Option(value, value, 0, 0);
    }
    var volunteer = {};
    volunteer['userId'] = uId;
    // Get the Volunteer Details if already filled
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
        if (xhr.readyState == 4) {
            // console.log(xhr.response);
            usrDetailsPrePopulated = JSON.parse(xhr.response);
            var response = JSON.parse(xhr.response);
            if (usrDetailsPrePopulated["statusCode"] == '0') {
                document.getElementById("vol-mobile").value = usrDetailsPrePopulated["contactInfo"]["phoneNumber"];
                document.getElementById("vol-w-mobile").value = usrDetailsPrePopulated["contactInfo"]["whatsappNumber"];
                document.getElementById("vol-email").value = usrDetailsPrePopulated["contactInfo"]["emailId"];
            }
        }
    });
    xhr.open('POST', '/siragugal/api/volunteer/getVolunteer.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xhr.send(JSON.stringify(volunteer));



})();
var selectState = document.getElementById("vol-state");
selectState.addEventListener("change", selectDistrict);
function selectDistrict() {
    var noOfStates, i=0, value;
    var nativeStateList = document.getElementById("vol-state");
    noOfStates = places["states"].length;
    var selectedState = document.getElementById("vol-state").value;
    for (i = 0; i < noOfStates; i++) {
        value = places["states"][i]["state"];
        if (value == selectedState) {
            break;
        }
    }
    var districtlength = places["states"][i].districts.length;
    var districtvalue;
    var nativeDistrictList = document.getElementById("vol-district");
    var noptions = nativeDistrictList.options;
    var noptionsLeng = noptions.length
    for (var k = 0; k < noptionsLeng; k++) {
        nativeDistrictList.remove(noptions[0]);
    }
    for (var j = 0; j < districtlength; j++) {
        districtvalue = places["states"][i].districts[j];
        nativeDistrictList.options[j] = new Option(districtvalue, districtvalue, 0, 0);
    }

}

var selectStatePer = document.getElementById("vol-state-per");
selectStatePer.addEventListener("change", selectDistrictPer);
function selectDistrictPer() {
    var noOfStates, i=0, value;
    var nativeStateList = document.getElementById("vol-state-per");
    noOfStates = places["states"].length;
    var selectedState = document.getElementById("vol-state-per").value;
    for (i = 0; i < noOfStates; i++) {
        value = places["states"][i]["state"];
        if (value == selectedState) {
            break;
        }
    }
    var districtlength = places["states"][i].districts.length;
    var districtvalue;
    var nativeDistrictList = document.getElementById("vol-district-per");
    var noptions = nativeDistrictList.options;
    var noptionsLeng = noptions.length
    for (var k = 0; k < noptionsLeng; k++) {
        nativeDistrictList.remove(noptions[0]);
    }
    for (var j = 0; j < districtlength; j++) {
        districtvalue = places["states"][i].districts[j];
        nativeDistrictList.options[j] = new Option(districtvalue, districtvalue, 0, 0);
    }

}

var selectStateCur = document.getElementById("vol-state-cur");
selectStateCur.addEventListener("change", selectDistrictCur);
function selectDistrictCur() {
    var noOfStates, i, value;
    var nativeStateList = document.getElementById("vol-state-cur");
    noOfStates = places["states"].length;
    var selectedState = document.getElementById("vol-state-cur").value;
    for (i = 0; i < noOfStates; i++) {
        value = places["states"][i]["state"];
        if (value == selectedState) {
            break;
        }
    }
    var districtlength = places["states"][i].districts.length;
    var districtvalue;
    var nativeDistrictList = document.getElementById("vol-district-cur");
    var noptions = nativeDistrictList.options;
    var noptionsLeng = noptions.length
    for (var k = 0; k < noptionsLeng; k++) {
        nativeDistrictList.remove(noptions[0]);
    }
    for (var j = 0; j < districtlength; j++) {
        districtvalue = places["states"][i].districts[j];
        nativeDistrictList.options[j] = new Option(districtvalue, districtvalue, 0, 0);
    }

}

var volunteers = document.getElementsByClassName('volunteer');
var count, prePopulate = 0, nextContent = 1;
(function () {
    count = 0;
}());
function nextSlide() {
    
    // var len = volunteers.length;
    if (count == 0) {
        contactDetails();
    }
    else if (count == 1) {
        personalInfo();
    }

    else if (count == 2) {
        addresInfo();
        document.getElementsByClassName("next-button")[0].innerHTML = "Submit"
    }
    else if ((count) == 3) {
        eduInfo();
    }

}
function contactDetails() {
    var contactDetail = {
        "userId": "",
        "phoneNumber": "",
        "whatsappNumber": "",
        "emailId": ""
    }

    contactDetail["userId"] = uId;
    contactDetail["phoneNumber"] = document.getElementById("vol-mobile").value;
    contactDetail["whatsappNumber"] = document.getElementById("vol-w-mobile").value;
    contactDetail["emailId"] = document.getElementById("vol-email").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
        if (xhr.readyState == 4) {
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            if (response['statusCode'] == '0') {
                // console.log(response);

                volunteers[count].classList.remove("d-none");
                if (usrDetailsPrePopulated["personalInfo"]["gender"]) {
                    document.querySelector('input[value="' + usrDetailsPrePopulated["personalInfo"]["gender"] + '"]').checked = true;
                }

                document.getElementById("vol-b-group").value = usrDetailsPrePopulated["personalInfo"]["bloodGroup"];

                document.getElementById("vol-fname").value = usrDetailsPrePopulated["personalInfo"]["fatherName"];

                document.getElementById("vol-mname").value = usrDetailsPrePopulated["personalInfo"]["motherName"];

                document.getElementById("vol-dob").value = usrDetailsPrePopulated["personalInfo"]["dob"];
                // prePopulate++;


                count++;
                return;
            } else {
                alert(response['errorMessage']);
                return;
            }

        }
    });
    xhr.open('POST', '/siragugal/api/volunteer/addContact.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xhr.send(JSON.stringify(contactDetail));


}
function personalInfo() {
    var personalInformation = {
        "userId": "",
        "gender": "",
        "bloodGroup": "",
        "fatherName": "",
        "motherName": "",
        "dob": ""
    }

    personalInformation["userId"] = uId;
    if (null!=document.querySelector('input[name="gender"]:checked')) {
        personalInformation["gender"] = document.querySelector('input[name="gender"]:checked').value;
    }

    personalInformation["bloodGroup"] = document.getElementById("vol-b-group").value;

    personalInformation["fatherName"] = document.getElementById("vol-fname").value;

    personalInformation["motherName"] = document.getElementById("vol-mname").value;

    personalInformation["dob"] = document.getElementById("vol-dob").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
        if (xhr.readyState == 4) {
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            if (response['statusCode'] == '0') {

                volunteers[count].classList.remove("d-none");

                document.getElementById("vol-state").value = usrDetailsPrePopulated["address"]["nativeState"];
                if(null!=usrDetailsPrePopulated["address"]["nativeState"]) {
                    selectDistrict();
                }
                
                document.getElementById("vol-district").value = usrDetailsPrePopulated["address"]["nativeDistrict"];
                document.getElementById("vol-taluk").value = usrDetailsPrePopulated["address"]["nativeRegion"];
                document.getElementById("vol-address-per").value = usrDetailsPrePopulated["address"]["permanentAddress"];
                document.getElementById("vol-state-per").value = usrDetailsPrePopulated["address"]["permanentState"];
                if(null!=usrDetailsPrePopulated["address"]["permanentState"]) {
                    selectDistrictPer();
                }
                
                document.getElementById("vol-district-per").value = usrDetailsPrePopulated["address"]["permanentDistrict"];

                document.getElementById("vol-pin-per").value = usrDetailsPrePopulated["address"]["permanentPincode"];
                document.getElementById("vol-address-cur").value = usrDetailsPrePopulated["address"]["currentAddress"];
                document.getElementById("vol-state-cur").value = usrDetailsPrePopulated["address"]["currentState"];
                if(null!=usrDetailsPrePopulated["address"]["currentState"]) {
                    selectDistrictCur();
                }
                
                document.getElementById("vol-district-cur").value = usrDetailsPrePopulated["address"]["currentDistrict"];

                document.getElementById("vol-pin-cur").value = usrDetailsPrePopulated["address"]["currentPincode"];
                // prePopulate++;


                count++;
                return;
            } else {
                alert(response['errorMessage']);

                return;
            }

        }
    });
    xhr.open('POST', '/siragugal/api/volunteer/addInfo.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xhr.send(JSON.stringify(personalInformation));

}
function addresInfo() {
    var addressInformation = {
        "userId": "",

        "nativeState": "",
        "nativeDistrict": "",
        "nativeRegion": "",

        "permanentAddress": "",
        "permanentDistrict": "",
        "permanentState": "",
        "permanentPincode": "",

        "currentAddress": "",
        "currentDistrict": "",
        "currentState": "",
        "currentPincode": ""
    }

    addressInformation["userId"] = uId;
    addressInformation["nativeState"] = document.getElementById("vol-state").value;
    addressInformation["nativeDistrict"] = document.getElementById("vol-district").value;
    addressInformation["nativeRegion"] = document.getElementById("vol-taluk").value;
    addressInformation["permanentAddress"] = document.getElementById("vol-address-per").value;
    addressInformation["permanentDistrict"] = document.getElementById("vol-district-per").value;
    addressInformation["permanentState"] = document.getElementById("vol-state-per").value;
    addressInformation["permanentPincode"] = document.getElementById("vol-pin-per").value;
    addressInformation["currentAddress"] = document.getElementById("vol-address-cur").value;
    addressInformation["currentDistrict"] = document.getElementById("vol-district-cur").value;
    addressInformation["currentState"] = document.getElementById("vol-state-cur").value;
    addressInformation["currentPincode"] = document.getElementById("vol-pin-cur").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
        if (xhr.readyState == 4) {
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            if (response['statusCode'] == '0') {
                volunteers[count].classList.remove("d-none");

                count++;
                return;
            } else {
                alert(response['errorMessage']);
                
                return;
            }

        }
    });
    xhr.open('POST', '/siragugal/api/volunteer/addAddress.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xhr.send(JSON.stringify(addressInformation));

}
function eduInfo() {
    var educationInformation = {
        "userId": "",
        "degree": "",

        "itiInstitute": "",
        "itiPlace": "",
        "itiCmpYear": "",
        "itiCourse": "",
        "itiBranch": "",

        "ugInstitute": "",
        "ugPlace": "",
        "ugCmpYear": "",
        "ugCourse": "",
        "ugBranch": "",

        "pgInstitute": "",
        "pgPlace": "",
        "pgCmpYear": "",
        "pgCourse": "",
        "pgBranch": ""
    }

    educationInformation["userId"] = uId;
    educationInformation["degree"] = document.getElementById("degree").value;

    educationInformation["itiInstitute"] = document.getElementById("iti-institute").value;
    educationInformation["itiPlace"] = document.getElementById("iti-place").value;
    educationInformation["itiCmpYear"] = document.getElementById("iti-year").value;
    educationInformation["itiCourse"] = document.getElementById("iti-course").value;
    educationInformation["itiBranch"] = document.getElementById("iti-branch").value;

    educationInformation["ugInstitute"] = document.getElementById("ug-institute").value;
    educationInformation["ugPlace"] = document.getElementById("ug-place").value;
    educationInformation["ugCmpYear"] = document.getElementById("ug-year").value;
    educationInformation["ugCourse"] = document.getElementById("ug-course").value;
    educationInformation["ugBranch"] = document.getElementById("ug-branch").value;

    educationInformation["pgInstitute"] = document.getElementById("pg-institute").value;
    educationInformation["pgPlace"] = document.getElementById("pg-place").value;
    educationInformation["pgCmpYear"] = document.getElementById("pg-year").value;
    educationInformation["pgCourse"] = document.getElementById("pg-course").value;
    educationInformation["pgBranch"] = document.getElementById("pg-branch").value;


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
        if (xhr.readyState == 4) {
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            if (response['statusCode'] == '0') {
                alert("Submitted Successfully");
                window.location.assign("/home.html");

                return;
            } else {
                nextContent = 1;
                alert(response['errorMessage']);
            }

        }
    });
    xhr.open('POST', '/siragugal/api/volunteer/addEducation.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xhr.send(JSON.stringify(educationInformation));
}