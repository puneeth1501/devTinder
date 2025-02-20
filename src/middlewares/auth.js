const adminauth=(req, res, next) => {
    console.log("Checking admin token");
    const token="xyz";
    const authorization=token==="xyz";
    if(!authorization){
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
};

const userauth=(req, res, next) => {
    console.log("Checking admin token");
    const token="xyz";
    const authorization=token==="xyzmmm";
    if(!authorization){
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
};

module.exports={adminauth,userauth};
