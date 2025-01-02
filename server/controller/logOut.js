async function logOut(req, res){
    try{
    const cookieOptions = {
        httpOnly : true,
        secure : true
    }
    return res.cookie('token', "",cookieOptions).status(200).json({
        message : "logged out",
        success : true
    })
    
}
catch(error){
        console.error('Error in logOut:', error);
        return res.status(500).json({
            message : "Server Error",
            error : true
        })
    }
}

module.exports = logOut;