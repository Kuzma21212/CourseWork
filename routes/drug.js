const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const drugController = require('../controllers/drugController');

// Отримання списку пацієнтів
router.get('/', auth, async (req, res) => {
    try {
        await drugController.getDrugs(req, res); // Використовуємо назву getDrugs для пацієнтів
    } catch (error) {
        console.error('Error fetching patients:', error.message);
        res.status(500).send('Помилка сервера');
    }
});

// Рендеринг форми додавання нового пацієнта
router.get('/add-drug', auth, (req, res) => {
    try {
        res.render('addDrug', { error: null }); // Використовуємо назву addDrug для пацієнтів
    } catch (error) {
        console.error('Error rendering addPatient form:', error.message);
        res.status(500).send('Помилка сервера');
    }
});

// Додавання нового пацієнта
router.post('/add', auth, async (req, res) => {
    try {
        await drugController.addDrug(req, res); // Використовуємо назву addDrug для пацієнтів
    } catch (error) {
        console.error('Error adding patient:', error.message);
        res.status(500).send('Помилка сервера');
    }
});

// Видалення пацієнта
router.get('/delete/:id', auth, async (req, res) => {
    try {
        await drugController.deleteDrug(req, res); // Використовуємо назву deleteDrug для пацієнтів
    } catch (error) {
        console.error('Error deleting patient:', error.message);
        res.status(500).send('Помилка сервера');
    }
});

module.exports = router;
