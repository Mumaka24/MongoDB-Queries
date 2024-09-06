1. // Sample_analytics=> $gt and $lt
 // Sort data by transaction_count 
// { transaction_count: { $gt: 5 } }
//{ $and: [{ transaction_count: { $gt: 6 } }, { transaction_count: { $lt: 9 } }] }


//------------------------------------------------------------------------
2. // Sample_training => $not and $nor
// sort transaction by zip nor state
// { $nor: [{ zip: "35045"}, { state: "AL"}] }

//------------------------------------------------------------------------


3. // Sample_mflix => $not 
//sort transaction movies
//{ runtime: { $not: /11/ } 
//------------------------------------------------------------------------


4. // Sample_guides.planets=> $eq and $ne
   // Sort data by False
   //{hasRings: { $ne: "false" } }
   //{ hasRings: { $eq: "false" } }

//-----------------------------------------------------------------
// Sample_airbnb.listingsAndReviews =>$in and $nin
//sort data by listingsAnd Reviews
// { room_type: { $in: ["Entire home/apt", "Private room"] } }
// { room_type: { $nin: ["Entire home/apt", "Private room"] } }

//------------------------------------------------------------------------


    
    
    