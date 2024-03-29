const File =require("../models/File");

module.exports.uploadImage=async(req,res)=>{
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        res.status(200).json({ path: `http://localhost:3001/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
}
module.exports.getImage=async(req, res) => {
    try {   
        const file = await File.findById(req.params.fileId);
        
        file.downloadCount++;

        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
}