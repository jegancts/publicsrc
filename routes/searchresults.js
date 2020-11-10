
const express = require('express');
const router = express.Router();
const axios = require('axios');
var request = require('request');

router.post('/',(req, res) => {

  const { spendingregion } = req.body;
  
  var  check_spendingregion   = spendingregion 
  
  console.log("check_spendingregion: " + check_spendingregion );

   // <--Prepare the JSON request to POST search fields!!!

//    let postbody = { 
//     beneficiaryName: text_beneficiaryname,
//     subsidyMeasureTitle:  text_subsidymeasuretitle, 
//     subsidyObjective: text_subsidyobjective,
//     spendingRegion: check_spendingregion 
    
// };

// let postbody = { 
//   "beneficiaryName": text_beneficiaryname,
//   "subsidyMeasureTitle": text_subsidymeasuretitle,
//   "susidyObjective": text_subsidyobjective,
//   "spendingRegion": "YORKSHIRE AND THE HUMBER"
// }


// request({
//     url: "https://subsidy-search-service.azurewebsites.net/searchResults",
//     method: "POST",
//     json: true,   
//     body: postbody,
// },  function (error, response, body){
//     console.log(response.body);
//     searchawards = response.body;
//     console.log(searchawards.awards[0].beneficiary.beneficiaryType);
// });




const data = {
  "beneficiaryName": text_beneficiaryname,
  "subsidyMeasureTitle": text_subsidymeasuretitle,
  "susidyObjective": text_subsidyobjective,
  "spendingRegion": "YORKSHIRE AND THE HUMBER"
};

createUser = async () => {
    try {
        const res = await axios.post('https://subsidy-search-service.azurewebsites.net/searchResults', data);
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
        searchawards = res.data
        var searchawards_api = res.data;
        console.log("searchawards" + searchawards_api );
        const seachawardstring = JSON.stringify(searchawards_api );
        console.log('seachawardstring' + seachawardstring );
        const seachawardJSON = JSON.parse(seachawardstring );
        console.log('seachawardJSON ' + seachawardJSON.awards[0]  );
        // console.log(searchawards.awards[0].beneficiary.beneficiaryType);
        // console.log(searchawards.awards[0].subsidyFullAmountExact);
    } catch (err) {
        console.error(err);
    }
};

createUser();
setTimeout(() => {
    res.render('publicusersearch/searchresults',{ 
      radio_subsidymeasuretitle,
      text_subsidymeasuretitle,
      radio_beneficiaryname,
      text_beneficiaryname
     
    
    }) }, 3000);


  });

module.exports = router;
