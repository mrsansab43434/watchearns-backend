<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: 'https://watchearns.online'
}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Schemas
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    earnings: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    referrer: String,
    adEnabled: { type: Boolean, default: true },
    taskStatus: String
});
const AdSchema = new mongoose.Schema({
    ad1: String,
    ad2: String,
    ad3: String
});
const TaskSchema = new mongoose.Schema({
    task1: String,
    task2: String,
    task3: String
});
const PayoutSchema = new mongoose.Schema({
    username: String,
    email: String,
    accountName: String,
    accountNumber: String,
    bankName: String,
    date: String,
    status: String
});
const ClickSchema = new mongoose.Schema({
    email: String,
    clicks: Number
});

// Models
const User = mongoose.model('User', UserSchema);
const Ad = mongoose.model('Ad', AdSchema);
const Task = mongoose.model('Task', TaskSchema);
const Payout = mongoose.model('Payout', PayoutSchema);
const Click = mongoose.model('Click', ClickSchema);

// USERS
app.get('/api/users', async (req, res) => {
    res.json(await User.find());
});
app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});
app.put('/api/users/:email', async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
    res.json(user);
});

// ADS
app.get('/api/ads', async (req, res) => {
    let ads = await Ad.findOne();
    if (!ads) ads = await new Ad({ ad1: '', ad2: '', ad3: '' }).save();
    res.json(ads);
});
app.post('/api/ads', async (req, res) => {
    let ads = await Ad.findOne();
    if (!ads) ads = new Ad();
    ads.ad1 = req.body.ad1;
    ads.ad2 = req.body.ad2;
    ads.ad3 = req.body.ad3;
    await ads.save();
    res.json(ads);
});

// TASKS
app.get('/api/tasks', async (req, res) => {
    let tasks = await Task.findOne();
    if (!tasks) tasks = await new Task({ task1: '', task2: '', task3: '' }).save();
    res.json(tasks);
});
app.post('/api/tasks', async (req, res) => {
    let tasks = await Task.findOne();
    if (!tasks) tasks = new Task();
    tasks.task1 = req.body.task1;
    tasks.task2 = req.body.task2;
    tasks.task3 = req.body.task3;
    await tasks.save();
    res.json(tasks);
});

// PAYOUTS
app.get('/api/payouts', async (req, res) => {
    res.json(await Payout.find());
});
app.post('/api/payouts', async (req, res) => {
    const payout = new Payout(req.body);
    await payout.save();
    res.json(payout);
});
app.put('/api/payouts/:id', async (req, res) => {
    const payout = await Payout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(payout);
});

// CLICKS
app.get('/api/clicks', async (req, res) => {
    res.json(await Click.find());
});
app.post('/api/clicks/:email', async (req, res) => {
    let click = await Click.findOne({ email: req.params.email });
    if (!click) click = new Click({ email: req.params.email, clicks: 0 });
    click.clicks = req.body.clicks;
    await click.save();
    res.json(click);
});

// Start server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
=======
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: 'https://watchearns.online'
}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Schemas
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    earnings: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    referrer: String,
    adEnabled: { type: Boolean, default: true },
    taskStatus: String
});
const AdSchema = new mongoose.Schema({
    ad1: String,
    ad2: String,
    ad3: String
});
const TaskSchema = new mongoose.Schema({
    task1: String,
    task2: String,
    task3: String
});
const PayoutSchema = new mongoose.Schema({
    username: String,
    email: String,
    accountName: String,
    accountNumber: String,
    bankName: String,
    date: String,
    status: String
});
const ClickSchema = new mongoose.Schema({
    email: String,
    clicks: Number
});

// Models
const User = mongoose.model('User', UserSchema);
const Ad = mongoose.model('Ad', AdSchema);
const Task = mongoose.model('Task', TaskSchema);
const Payout = mongoose.model('Payout', PayoutSchema);
const Click = mongoose.model('Click', ClickSchema);

// USERS
app.get('/api/users', async (req, res) => {
    res.json(await User.find());
});
app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});
app.put('/api/users/:email', async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
    res.json(user);
});

// ADS
app.get('/api/ads', async (req, res) => {
    let ads = await Ad.findOne();
    if (!ads) ads = await new Ad({ ad1: '', ad2: '', ad3: '' }).save();
    res.json(ads);
});
app.post('/api/ads', async (req, res) => {
    let ads = await Ad.findOne();
    if (!ads) ads = new Ad();
    ads.ad1 = req.body.ad1;
    ads.ad2 = req.body.ad2;
    ads.ad3 = req.body.ad3;
    await ads.save();
    res.json(ads);
});

// TASKS
app.get('/api/tasks', async (req, res) => {
    let tasks = await Task.findOne();
    if (!tasks) tasks = await new Task({ task1: '', task2: '', task3: '' }).save();
    res.json(tasks);
});
app.post('/api/tasks', async (req, res) => {
    let tasks = await Task.findOne();
    if (!tasks) tasks = new Task();
    tasks.task1 = req.body.task1;
    tasks.task2 = req.body.task2;
    tasks.task3 = req.body.task3;
    await tasks.save();
    res.json(tasks);
});

// PAYOUTS
app.get('/api/payouts', async (req, res) => {
    res.json(await Payout.find());
});
app.post('/api/payouts', async (req, res) => {
    const payout = new Payout(req.body);
    await payout.save();
    res.json(payout);
});
app.put('/api/payouts/:id', async (req, res) => {
    const payout = await Payout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(payout);
});

// CLICKS
app.get('/api/clicks', async (req, res) => {
    res.json(await Click.find());
});
app.post('/api/clicks/:email', async (req, res) => {
    let click = await Click.findOne({ email: req.params.email });
    if (!click) click = new Click({ email: req.params.email, clicks: 0 });
    click.clicks = req.body.clicks;
    await click.save();
    res.json(click);
});

// Start server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
>>>>>>> 8ee2f17d153dec7ce03f36d1c1d15227dc678454
