//baseUrl
const baseUrl = "https://kasir-api.belajarqa.com";

//initiating supertest
const request = require("supertest")(baseUrl);

//initiating chai
const expect = require("chai").expect;

//import data file
const userCred = require("../data/credentials");

//defined functions


describe("Store Registration - Auth", async () => {
    const response = request
    .post("/registration")
    .send({
        "name": userCred.user_cred.name,
        "email": userCred.user_cred.email,
        "password": userCred.user_cred.password
    })

    //Assertion
    it("Status equal 201 (created)", async function(){
        
        expect((await response).status).to.equal(201);
        console.log("Response StatusCode: "+(await response).statusCode);
  
    })
    it("Status Body equal 'Toko Berhasil didaftarkan", async function(){
        
        expect((await response).body.message).to.equal("Toko berhasil didaftarkan");
        console.log("Response Body 'Status': "+(await response).body.message);
  
    })

    console.log((await response).body);
})

