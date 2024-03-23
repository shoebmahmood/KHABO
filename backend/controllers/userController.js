import asyncHandler from '../middleware/asyncHandler.js';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }

});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('reg user');
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = (req, res) => {
    res.send('reg user');
//   res.clearCookie('jwt');
//   res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('user profile');
//   const user = await User.findById(req.user._id);

//   if (user) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user');
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;

//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get all');
//   const users = await User.find({});
//   res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('del user');
//   const user = await User.findById(req.params.id);

//   if (user) {
//     if (user.isAdmin) {
//       res.status(400);
//       throw new Error('Can not delete admin user');
//     }
//     await User.deleteOne({ _id: user._id });
//     res.json({ message: 'User removed' });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
//   const user = await User.findById(req.params.id).select('-password');

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
//   const user = await User.findById(req.params.id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.isAdmin = Boolean(req.body.isAdmin);

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
