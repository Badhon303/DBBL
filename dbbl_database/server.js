const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

// mongoose.connect("mongodb://localhost:27017/dbblBankDatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Alam:asdfgh11@cluster0.z3hy9m6.mongodb.net/dbblBankDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    )
    console.log("mongoDB connected: ", conn.connection.host)
  } catch (error) {
    console.log("mongoError: ", error.message)
    process.exit(1)
  }
}

connectDB()

const dbblSchema = mongoose.Schema(
  {
    id: String,
    customerId: String,
    emailAddress: String,
    fullName: String,
    fatherName: String,
    motherName: String,
    spouseName: String,
    dateOfBirth: String,
    phoneNumber: String,
    tinNumber: String,
    nationalIdNumber: String,
    passportNumber: String,
    gender: String,
    presentAddress: String,
    parmanentAddress: String,
    villageOrHouse: String,
    postOffice: String,
    policeStation: String,
    district: String,
    accountNumber: String,
    accountTitle: String,
    accountType: String,
    accountOpenDate: String,
    currency: String,
    balance: String,
    balanceInWord: String,
    photo: String,
  },
  {
    timestamps: true,
  }
)

const Dbbl = mongoose.model("Dbbl", dbblSchema)

const app = express()

app.use(cors())
// create application/json parser
var jsonParser = bodyParser.json()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/certificate/:id", async function (req, res) {
  const id = req.params.id
  // console.log("customer number holo " + id)

  const certificateDetails = await Dbbl.findOne(
    { customerId: id },
    { _id: 0, __v: 0 }
  )

  res.status(200).json({
    status: "success",
    customerInfo: certificateDetails,
  })
})

app.post("/certificate", jsonParser, async function (req, res) {
  req.body.id = Math.floor(100000 + Math.random() * 900000000)
  const certificate = await Dbbl.create(req.body)

  res.status(201).json({
    status: "success",
    data: certificate,
  })
})

app.listen(4000, function () {
  console.log(`DBBL Bank database is running on http://localhost:4000`)
})
