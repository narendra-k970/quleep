import Settings from "../models/settings.js";

export const uploadModel = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.json({
    success: true,
    url: fileUrl,
  });
};

export const saveSettings = async (req, res) => {
  const { backgroundColor, wireframe } = req.body;

  try {
    const newSetting = new Settings({
      backgroundColor,
      wireframe,
    });

    await newSetting.save();

    res.json({ success: true, setting: newSetting });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.find().sort({ timestamp: -1 }).limit(1);

    res.json({
      success: true,
      settings: settings[0] || null,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
