const flights = require("../flights.json")
const fs =  require("fs");
const addFlight = (req,res) =>{
    flights.push(req.body)
    let stringedData = JSON.stringify(flights,null,2)
    fs.writeFile('flights.json',stringedData,(err)=>{
      if(err){
        return res.status(500).json({message:err})
      }
    })
  return res.status(200).json({message:"new flight created"})
}
const getFlight = (req,res) =>{
    let id = req.params.id
 const foundflight =  flights.find(flight =>{
   return String(flight.id) === id
  })
  return res.status(200).json({foundflight})
}
const getAllFlight = (req,res) =>{
    res.status(200).json({ flights })
}
const updateFlight = (req,res) =>{
   
 const newFlight = flights.map((flight) => {
    if (String(flight.id) !== id) {
      flight.id = req.body.id
      flight.title = req.body.title
      flight.time = req.body.time
      flight.price = req.body.price
      flight.date = req.body.date
    }
   
  })
  let stringedData = JSON.stringify(flights,null,2)
  fs.writeFile('flights.json',stringedData,(err)=>{
    if(err){
      return res.status(500).json({message:err})
    }
  })
  res.status(200).json({message:"Flight updated"})







}
const deleteFlight = (req,res) =>{
    let id = req.params.id
    const deletedFlight = flights.filter(flight=>{
        return String(flight.id) !== id
    })
    let stringedData = JSON.stringify(flights,null,2)
    fs.writeFile('../flights.json',stringedData,(err)=>{
      if(err){
        return res.status(500).json({message:err})
      }
    })
  return res.status(200).json({message:`Flight with ${id} deleted`})

}
module.exports = {addFlight,getFlight,getAllFlight,updateFlight,deleteFlight}

