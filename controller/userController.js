const User = require('../models/userSchema');

const { setUser, getUser } = require('../services/auth');



const registerUser = async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  console.log("Request Body:", req.body);

  try {
    let user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      console.log("User already exists:", user);
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      firstname,
      lastname,
      email,
      username,
      password,
    });

    await newUser.save();

    console.log("User registered successfully:", newUser);
    res.send({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const login = async (req,res) => {
  const { username, password } = req.body;

  console.log("reqested body ", req.body);
  console.log("username ", username, password);


  try {
    const user = await User.findOne({ $or: [{ username }, { password }] });
    
    if(!user){
      return res.status(400).json({message:'username or password is wrong'})
    }
    console.log(user);
    const token = setUser(user);
      
    res.send({ message: 'User Login successfully',token});

  }catch(error){
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
const verify = async (req,res) => {
  console.log("request in veryfincation ",req)
  const token = req.headers.authorization;
  const user = getUser(token);
  if(!user){
    return res.status(400).json({message:'token is wrong'})
  }
  console.log("user in verify ",user);
  res.send({ message: 'User Login successfully',user});
  
}
module.exports = { registerUser, login ,verify };
