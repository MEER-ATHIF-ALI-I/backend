
//get Bookings API - /api/v1/booking
exports.getBooking=(req,res,next)=>{
    res.json({
        success: true,
        message: 'Get booking working!'
    })
   
}


//get Products API - /api/v1/booking/:id
exports.getBookingById=(req,res,next)=>{
    console.log(req.params.id, 'ID')
    res.json({
        success: true,
        message: 'Get booking By ID working!'
    })

}