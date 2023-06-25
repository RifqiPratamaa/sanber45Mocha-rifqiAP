//baseUrl
const baseUrl = "https://kasir-api.belajarqa.com";

//initiating supertest
const request = require("supertest")(baseUrl);

//initiating chai
const expect = require("chai").expect;

const { use } = require("chai");
//import data file
const userCred = require("../data/credentials");

//defined functions


//Endpoint Store Registration
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
    it("Status Body equal 'Toko Berhasil didaftarkan'", async function(){
        
        expect((await response).body.message).to.equal("Toko berhasil didaftarkan");
        console.log("Response Body 'Status': "+(await response).body.message);
  
    })

    console.log((await response).body);
})

//Endpoint Login
describe("POST Auth - Login User", () => {
    it("Login with VALID credentials (Success) - Status Code 201", async function(){
        const response = await request
            .post("/authentications")
            .send({
                "email": userCred.user_cred.email,
                "password": userCred.user_cred.password
            })
        
        expect(await response.statusCode).to.eql(201);
        console.log(await response.body)
    })

    it("Login with INVALID credentials (Failed) - Status Code 401", async function(){
        const response = await request
            .post("/authentications")
            .send({
                "email": "rifqirifqi@yopmail.com",
                "password": "inipassword"
            })
        
        expect(await response.statusCode).to.eql(401);
        console.log(await response.body)
    })

})