import React, { useRef, useState } from 'react';
import './Membership.css'
import Select from "react-select"
function MembershipPage() {
  const [ amount , setAmount] = useState("50000");
  const [ memberCategory , setMemberCategory] = useState("Patron");
  const membershipItem1 = useRef(null);
  const membershipItem2 = useRef(null);
  const membershipItem3 = useRef(null);
  const membershipItem4 = useRef(null);

  const [activeMembership , setActiveMembership] = useState(membershipItem1);

  function activeClickHandler(e, reference, amount, membershipCategory){
    activeMembership.current.classList.remove("active-membership");
    reference.current.classList.add("active-membership");
    setAmount(amount);
    setActiveMembership(reference);
    setMemberCategory(membershipCategory);
  }
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];
  const countriesList = countryList.map( (country) => new Object({'value':country, 'label':country}));

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      borderRadius : 'none',

    }),
  }
  return (
    <>
      <div className='flex flex-col m-3 '>
          <div className='text-2xl font-bold text-center my-3'>Alumni Entitlement(ਸਾਬਕਾ ਵਿਦਿਆਰਥੀ ਅਧਿਕਾਰ)</div>
          <p className='mb-3 font-semibold'>The following categories of persons shall be entitled to be enrolled as members of the Association:<br></br>ਵਿਅਕਤੀਆਂ ਦੀਆਂ ਹੇਠ ਲਿਖੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਐਸੋਸੀਏਸ਼ਨ ਦੇ ਮੈਂਬਰਾਂ ਵਜੋਂ ਨਾਮਜ਼ਦ ਹੋਣ ਦੇ ਹੱਕਦਾਰ ਹੋਣਗੀਆਂ:</p>
          <ol className='ml-3 mb-3 text-justify'>
              <li> 1. Persons who have graduated from Punjabi University, Patiala.<span className='text-lg'>(ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ ਤੋਂ ਗ੍ਰੈਜੂਏਟ ਹੋਏ ਵਿਅਕਤੀ।)</span></li>
              <li> 2. Persons registered as students with Punjabi University, Patiala.<span className='text-lg'>(ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ ਵਿੱਚ ਵਿਦਿਆਰਥੀ ਵਜੋਂ ਰਜਿਸਟਰਡ ਵਿਅਕਤੀ।)</span></li>
              <li> 3. Persons who have obtained diploma of at least one year duration after graduation.<span className='text-lg'>(ਉਹ ਵਿਅਕਤੀ ਜਿਨ੍ਹਾਂ ਨੇ ਗ੍ਰੈਜੂਏਸ਼ਨ ਤੋਂ ਬਾਅਦ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਸਾਲ ਦੀ ਮਿਆਦ ਦਾ ਡਿਪਲੋਮਾ ਪ੍ਰਾਪਤ ਕੀਤਾ ਹੈ।)</span></li>
              <li> 4. Persons who have done Post Graduate Degree, M.Phil., M.Litt., Ph.D. from Punjabi University, Patiala.<span className='text-lg'>(ਉਹ ਵਿਅਕਤੀ ਜਿਨ੍ਹਾਂ ਨੇ ਪੋਸਟ ਗ੍ਰੈਜੂਏਟ ਡਿਗਰੀ, ਐਮ.ਫਿਲ., ਐਮ.ਲਿਟ., ਪੀ.ਐਚ.ਡੀ. ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ  ਤੋਂ ਕੀਤੀ ਹੈ।)</span></li>
              <li> 5. Graduates of other Universities (Indian or Foreign) on whom membership is conferred by the Executive Council of the Association.<span className='text-lg'>(ਹੋਰ ਯੂਨੀਵਰਸਿਟੀਆਂ (ਭਾਰਤੀ ਜਾਂ ਵਿਦੇਸ਼ੀ) ਦੇ ਗ੍ਰੈਜੂਏਟ ਜਿਨ੍ਹਾਂ ਨੂੰ ਐਸੋਸੀਏਸ਼ਨ ਦੀ ਕਾਰਜਕਾਰੀ ਕੌਂਸਲ ਦੁਆਰਾ ਮੈਂਬਰਸ਼ਿਪ ਪ੍ਰਦਾਨ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।)</span></li>
              <li> 6. Members of the teaching staff of the University or of its affiliated colleges even though they may not be graduates of this University.<span className='text-lg'>(ਯੂਨੀਵਰਸਿਟੀ ਜਾਂ ਇਸਦੇ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਕਾਲਜਾਂ ਦੇ ਅਧਿਆਪਨ ਅਮਲੇ ਦੇ ਮੈਂਬਰ ਭਾਵੇਂ ਉਹ ਇਸ ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਗ੍ਰੈਜੂਏਟ ਨਾ ਹੋਣ।)</span></li> 
          </ol>
          <p className="font-semibold">Note : All Former Vice-Chancellors and former Registrars will be members of the Association.<br></br><span className='text-lg'>(ਨੋਟ: ਸਾਰੇ ਸਾਬਕਾ ਵਾਈਸ-ਚਾਂਸਲਰ ਅਤੇ ਸਾਬਕਾ ਰਜਿਸਟਰਾਰ ਐਸੋਸੀਏਸ਼ਨ ਦੇ ਮੈਂਬਰ ਹੋਣਗੇ।)</span> </p>
          
        </div>

        <div className="m-8">
          <h1 className="text-xl font-bold ">Process(ਪ੍ਰਕਿਰਿਆ)</h1>
          <ul className="flex flex-col mt-3 gap-1 ml-5 text-justify">
            <div>
              {/* 1 icon circle */}
              <p>1. Choose the membership you want to enroll into.<span className='text-lg'>(ਉਹ ਮੈਂਬਰਸ਼ਿਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਦਾਖਲਾ ਲੈਣਾ ਚਾਹੁੰਦੇ ਹੋ।)</span></p>
            </div>
            <div>
              {/* 2 icon circle */}
              <p>2. Pay the contribution amount on the given account details.<span className='text-lg'>(ਦਿੱਤੇ ਗਏ ਖਾਤੇ ਦੇ ਵੇਰਵਿਆਂ 'ਤੇ ਯੋਗਦਾਨ ਦੀ ਰਕਮ ਦਾ ਭੁਗਤਾਨ ਕਰੋ।)</span></p>
            </div>
            <div>
              {/* 3 icon circle */}
              <p>3. Fill and submit the donor form along with payment details.<span className='text-lg'>(ਭੁਗਤਾਨ ਵੇਰਵਿਆਂ ਦੇ ਨਾਲ ਦਾਨੀ ਫਾਰਮ ਭਰੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰੋ।)</span></p>
            </div>
            <div>
              {/* 4 icon circle */}
              <p>4. Done<span className='text-lg'>(ਮੁਕੰਮਲ)</span></p>
            </div>
          </ul>
      </div>
      
      <div className='flex w-full mx-auto   justify-around bg-sky-50 py-10'>
        <div className="mx-16">
          <h1 className=" text-2xl font-[500]  text-justify">Choose membership in which you want to enroll(ਓਹ ਮੈਂਬਰਸ਼ਿਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਦਾਖਲਾ ਲੈਣਾ ਚਾਹੁੰਦੇ ਹੋ) :-</h1>
            <ul className='mt-5 flex flex-col gap-5'>
                <li className='cursor-pointer active-membership' name="50000" ref={membershipItem1} onClick={(e) => activeClickHandler(e,membershipItem1 , 50000, "Patron (ਸਰਪ੍ਰਸਤ)")}>
                  <h1 className='text-lg'>Patron(ਸਰਪ੍ਰਸਤ)</h1>
                  <p className='ml-1  text-sm text-justify'>A person may become a patron of this Association by donating a sum of at least of Rs. 50,000/- or more.<span className='text-lg'>(ਕੋਈ ਵਿਅਕਤੀ ਘੱਟੋ-ਘੱਟ 50,000 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਰੁਪਏ ਦੀ ਰਕਮ ਦਾਨ ਕਰਕੇ ਇਸ ਐਸੋਸੀਏਸ਼ਨ ਦਾ ਸਰਪ੍ਰਸਤ ਬਣ ਸਕਦਾ ਹੈ।)</span></p>
                </li>
                <li className='cursor-pointer' name="20000" ref={membershipItem2} onClick={ (e) =>activeClickHandler(e, membershipItem2 ,20000, "Donor Member (ਦਾਨੀ ਮੈਂਬਰ)")}>
                  <h1 className='text-lg'>Donor Member(ਦਾਨੀ ਮੈਂਬਰ)</h1>
                  <p className='ml-1  text-sm text-justify'>A person may become a donor member of this Association by donating a sum of at least of Rs. 20,000/- or more<span className='text-lg'>(ਕੋਈ ਵਿਅਕਤੀ ਘੱਟੋ-ਘੱਟ 20,000 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਰੁਪਏ ਦੀ ਰਕਮ ਦਾਨ ਕਰਕੇ ਇਸ ਐਸੋਸੀਏਸ਼ਨ ਦਾ ਦਾਨੀ ਮੈਂਬਰ ਬਣ ਸਕਦਾ ਹੈ।).</span></p>
                </li>
                <li className='cursor-pointer' name="1000"  ref={membershipItem3} onClick={(e)=> activeClickHandler(e, membershipItem3 ,1000, "Life Member (ਜੀਵਨ ਮੈਂਬਰ)")}>
                  <h1 className='text-lg'>Life Member(ਜੀਵਨ ਮੈਂਬਰ)</h1>
                  <p className='ml-1  text-sm text-justify'>A person may become a patron of this Association by donating a sum of Rs. 1000/-.<span className='text-lg'>(ਕੋਈ ਵਿਅਕਤੀ 1000/- ਰੁਪਏ ਦੀ ਰਕਮ ਦਾਨ ਕਰਕੇ ਇਸ ਐਸੋਸੀਏਸ਼ਨ ਦਾ ਸਰਪ੍ਰਸਤ ਬਣ ਸਕਦਾ ਹੈ।) </span></p>
                </li>
                <li className='cursor-pointer' name="100"  ref={membershipItem4} onClick={ (e)=> activeClickHandler(e, membershipItem4 ,100, "Ordinary Member (ਆਮ ਮੈਂਬਰ)")}>
                  <h1 className='text-lg'>Ordinary Member(ਆਮ ਮੈਂਬਰ)</h1>
                  <p className='ml-1  text-sm text-justify' >A person may become a patron of this Association by donating a sum of Rs. 100/- per anum.<span className='text-lg'>(ਕੋਈ ਵਿਅਕਤੀ 100/- ਪ੍ਰਤੀ ਸਾਲ ਰੁਪਏ ਦੀ ਰਕਮ ਦਾਨ ਕਰਕੇ ਇਸ ਐਸੋਸੀਏਸ਼ਨ ਦਾ ਸਰਪ੍ਰਸਤ ਬਣ ਸਕਦਾ ਹੈ।)</span> </p>
                </li>
            </ul>
        </div>

        <div>
          <div className='flex flex-col  mb-3 text-justify'>
            <h1 className='text-gray-900 font-medium  text-justify'>To Become a {memberCategory}, Pay <u>Rs. {amount}</u>/- on payment details given below:-</h1>
            <h1 className='text-gray-900 font-medium mb-2 text-justify'>ਬਣਨ ਲਈ {memberCategory}, ਭੁਗਤਾਨ ਕਰੋ <u>ਰੁਪਏ {amount}</u>/- ਹੇਠ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਤੇ ਭੁਗਤਾਨ ਕਰੋ ।:-</h1>
            <p>
              Bank : State Bank of India
            </p>
            <p>
              Account : 34563465xxxxx 
            </p>
            <p>
              IFSC code : SBI06xxx
            </p>
          </div>
          
          <div className="p-2 mr-10  bg-white">
            <div className=" w-[700px]  py-2 px-2">
            <h1 className='text-sm py-2 px-2 '> Fill the form below after the transaction we will contact you as soon as possible.<br></br>(ਲੈਣ-ਦੇਣ ਤੋਂ ਬਾਅਦ ਹੇਠਾਂ ਦਿੱਤੇ ਫਾਰਮ ਨੂੰ ਭਰੋ ਅਸੀਂ ਜਿੰਨੀ ਜਲਦੀ ਹੋ ਸਕੇ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।)</h1>
            <div className="mt-10 sm:mt-0">
              <h1 className="text-center text-lg font-bold">{memberCategory}</h1>
              <form action="#" method="POST">
                <div className="overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium ">
                          First name(ਪਹਿਲਾ ਨਾਂ)
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium ">
                          Last name(ਆਖਰੀ ਨਾਂ)
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium ">
                          Email address(ਈਮੇਲ ਖਾਤਾ)
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="mobile-no" className="block text-sm font-medium ">
                        Mobile No.(ਮੋਬਾਇਲ ਨੰਬਰ)
                        </label>
                        <input
                          type="number"
                          name="mobile-number"
                          id="mobile-number"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="transaction-id" className="block text-sm font-medium ">
                        Transaction Id(ਲੈਣ-ਦੇਣ ਆਈ.ਡੀ)
                        </label>
                        <input
                          type="text"
                          name="transaction-id"
                          id="transaction-id"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                          
                          
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Profession-id" className="block text-sm font-medium ">
                      Profession(ਕਿੱਤਾ)
                        </label>
                        <input
                          type="text"
                          name="Profession-id"
                          id="Profession-id"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                          
                          
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="mobile-no" className="block text-sm font-medium ">
                    Uni Registration No.(ਯੂਨੀਵਰਸਿਟੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ)
                        </label>
                        <input
                          type="number"
                          name="mobile-number"
                          id="mobile-number"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium ">
                          Country(ਦੇਸ਼)
                        </label>
                        <Select options={countriesList} styles={customStyles} isClearable={true} placeholder="" className="rounded-none"/>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium ">
                          Street address(ਗਲੀ ਦਾ ਪਤਾ)
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium ">
                          City(ਸ਼ਹਿਰ)
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium ">
                          State (ਰਾਜ)
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium ">
                          ZIP / Postal code(ਡਾਕ ਕੋਡ)
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <label htmlFor="city" className="block text-sm font-medium ">
                          Membership Category(ਸਦੱਸਤਾ ਸ਼੍ਰੇਣੀ)
                        </label>
                        <input
                          value={memberCategory}
                          disabled={true}
                          
                          type="text"
                          name="membership_category"
                          id="membership_category"
                          autoComplete="address-level2"
                          className="appearance-none border-none focus:outline-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label htmlFor="city" className="block text-sm font-medium ">
                          Amount(ਰਕਮ)
                        </label>
                        <input
                          type="text"
                          name="amount"
                          id="amount"
                          autoComplete="address-level2"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                      </div>
                    </div>
                  </div>
              
                </div>
              </form>
    
            </div>
            
            {/* Upload file */}
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className=" sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  
                  
                      <div>
                        <label className="block text-sm font-medium ">Proof of Payment(ਭੁਗਤਾਨ ਦਾ ਸਬੂਤ)</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                          
                            <div className="flex text-sm ">
                              <label
                                htmlFor="file-upload"
                                className="block text-sm font-medium "
                              >
                                <input id="file-upload" name="file-upload" type="file" />
                              <p><span>Upload a file</span> or drag and drop(Proof of payment)</p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </form>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-footercolor-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save(ਸੇਵ)
                      </button>
                    </div>
              </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default MembershipPage;