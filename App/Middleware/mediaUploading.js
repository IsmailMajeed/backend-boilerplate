const multer = require('multer');

// IMAGE UPLOAD CODE IN NODE.JS
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
// FILE_FILTER WHICH IS PERMSSION FOR UPCOMING FILES FROM ANGULAR
const fileFilter = (req, file, cb) => {
  // ACCEPT OR REJECT A FILE
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// STORE THIS IMAGE IN A VARIABLE TO UPLOAD TO DATABASE
const upload = multer({
  storage: storage,
  //DEFINE THE SIZE OF IMAGE
  limits: {
    fileSize: 1024 * 1024 * 16  // 16MB Size
  },
  fileFilter: fileFilter
});
module.exports = upload;
//..............................// Image Upload Code In node Js//........................