exports.getBootcamps=(req,res,next)=>{
   res.status(200).json({success:true,msg:'Show all bootcamps',hello:req.hello});
}
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Show bootcamp ${req.params.id}`});
 }
exports.createBootcamp=(req,res,next)=>{
    console.log(req.body)
    res.status(200).json({success:true,msg:'Create new bootcamp'});

}
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamp ${req.params.id}`});

}

exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete bootcamp ${req.params.id}`});

}