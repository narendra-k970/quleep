import multer from "multer";

// Storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// File filter (only .glb / .gltf allowed)
const fileFilter = (req, file, cb) => {
  const allowed = ["model/gltf-binary", "model/gltf+json"];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only GLB/GLTF allowed."), false);
  }
};

const upload = multer({
  storage,
  // fileFilter,
});

export default upload;
