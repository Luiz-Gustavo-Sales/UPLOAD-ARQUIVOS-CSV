// const path = require("path");
// const multer = require("multer");

// export default function upload3(req, res) {
//   const storage = multer.diskStorage({
//     destination: "./public/uploads/",
//     filename: function (req, file, cb) {
//       cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
//     },
//   });
//   const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 },
//   }).single("myImage");

//   console.log("Request ---", req.body);
//   console.log("Request file ---", req.file); //Here you get file.
//   /*Now do where ever you want to do*/
//   return res.send(200).end();
// }
