const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Налаштування шаблонізатора EJS
app.set('view engine', 'ejs');

// Налаштування обслуговування статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути
app.use('/', require('./routes/index'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/drugs', require('./routes/drug'));

// Старт сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
