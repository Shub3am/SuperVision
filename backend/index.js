const {error, json,Router, createCors} = require("itty-router")
const router = Router()
const {preflight, corsify} = createCors()

function convertToBionicRead(data) {
    let finalString = ""
    data = data.split(" ")
    for (let word of data) { 
        if (word.length > 1) {
            let impactWord = `<strong>${word.slice(0,(Math.ceil(word.length/2)))}</strong>`
            let mainWord = word.split(word.slice(0,(Math.ceil(word.length/2))))[1]
            
            let bionicWord = impactWord+mainWord
            finalString = finalString + bionicWord + " "

        } else {
            finalString = finalString + word + " "
        }
    }
    
    return ({"bionicRead": finalString}) }


router.all('*', preflight)

.get("/", (request)=> {
    return json("Speed Reading Tool Created By Shubham Vishwakarma, https://vshubham.xyz")
})

.post("/", async (request, env, ctx, data)=> {
    let requestBody = await request.json()
    console.log(requestBody.content)
    if (requestBody.content) {
        let data = requestBody.content
        return json(convertToBionicRead(data))
    } else {
        return json("No Data In Request")
    }
})


export default {
    fetch: (request, env, ctx) => router
                          .handle(request, env, ctx)
  
                          // transform unformed responses
                          .then(json)
  
                          // catch any errors
                          .catch(error)
  
                          // add CORS headers to all requests,
                          // including errors
                          .then(corsify)
  }



// const multer = require("multer")
// var upload = multer({ storage: storage }).single('file')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, 'public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })
// app.post("/speedread", (req,res)=> {

//     upload(req, res,  async function (err) {
//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
//            const filer = req.file


//             try {
//             let parser = new PdfDataParser({url: filer.path});
//             (async function convert() {
//                 let rows = await parser.parse()
//                 if (rows.length) {
//                     fs.unlinkSync(filer.path)
//                 res.json(convertToBionicRead(rows[0][0]))
//                 } else {
//                     res.json({"bionicRead":"Document Contains Complex Data, Try Another"})
//                 }
//             })() } catch(e) {
//                 res.json("Can't Parse This Document, Try Another")
//             }

          
//     })
// })