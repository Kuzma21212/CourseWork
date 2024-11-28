const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Завантаження змінних середовища
dotenv.config();

const connectDB = async () => {
    try {
        // Підключення до MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Додаємо інформацію про хост
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Завершуємо процес у випадку невдачі
    }
};

module.exports = connectDB;
