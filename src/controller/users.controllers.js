import User from './../models/user.js';
import { querySerch, querySelect } from './commons.js';

const fields = ['phone', 'firstName', 'lastName', 'isActive', 'address'];

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error find User' });
  }
}

export const filterUsers = async (req, res) => {
  try {
    const { select, ...filters } = req.query;
    const users = await User.find(querySerch(filters, fields), querySelect(select));
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error find User' });
  }
}

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
      phone: req.body.phone,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      isActive: req.body.isActive,
      address: req.body.address,
    });
    const UserSaved = await newUser.save();
    res.json(UserSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error create User' });
  }
}

export const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "User was updated" });
  } catch (error) {
    res.status(500).json({ message: error.message || 'error update User' });
  }
}

export const findOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error find User' });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User were deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message || 'error delete User' });
  }
}
