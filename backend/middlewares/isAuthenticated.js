import jwt from "jsonwebtoken";

const isAuthenticated=async (req,res,next)=>{
    try{
        const token=req.cookies.token;
        console.log("TOKEN RECEIVED:", token);
        if(!token){
            return res.status(401).json({
                message:'User not authenticated',
                success:false
            });
        }
        const decode=await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:'Invalid',
                success:false
            });
        }
        req.id=decode.userId;
        next();
    } catch(error){
        console.log(error);
    }
}
export default isAuthenticated;

// import jwt from "jsonwebtoken";

// const isAuthenticated = (req, res, next) => {
//     try {
//         const token = req.cookies.token;

//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false
//             });
//         }

//         // Verify Token
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);

//         if (!decoded) {
//             return res.status(401).json({
//                 message: "Invalid token",
//                 success: false
//             });
//         }

//         req.id = decoded.userId; // Attach userId to request
//         next(); // Proceed to the next middleware
//     } catch (error) {
//         console.error("Authentication Error:", error);
//         return res.status(500).json({
//             message: "Internal Server Error",
//             success: false
//         });
//     }
// };

// export default isAuthenticated;
