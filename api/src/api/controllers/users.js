const express = require('express');
const User = require('../models/users');

exports.addUser = async (req, res) => {
    try {
        const { name, email, cell, age } = req.body;

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = new User({
            name,
            email,
            cell,
            age
        });

        await newUser.save();

        res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};