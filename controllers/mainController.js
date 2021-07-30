// home page
exports.index = (req, res) =>{
    res.render('index', { title: 'Express' });
};

// Sign-Up page: GET req
exports.sign_up_get = (req,res,next) => {
    res.send("SIGN-UP GET RESQUEST: NOT IMPLEMENTED");
};

// Sign-Up page: POST req
exports.sign_up_post = (req,res,next) => {
    res.send("SIGN-UP POST RESQUEST: NOT IMPLEMENTED");
};

// Login page: GET req
exports.login_get = (req,res,next) => {
    res.send("LOGIN GET RESQUEST: NOT IMPLEMENTED");
};

// Login page: POST req
exports.login_post = (req,res,next) => {
    res.send("LOGIN POST RESQUEST: NOT IMPLEMENTED");
};