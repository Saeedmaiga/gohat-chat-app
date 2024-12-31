async function userDetails(req, res){
    try{
        const token = req.cookies.token || "";
        const user = await getUserDetailsFromToken(token);
        return res.status(200).json({
            message : "User Details",
            data : user,
            success : true
        });
}catch(error){
    console.error('Error in userDetails:', error);
    return res.status(500).json({
        message: 'Server Error',
        error : true,
    });
}
}

module.exports =userDetails