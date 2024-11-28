const Drug = require('../models/Drug');

// Отримання списку пацієнтів
exports.getDrugs = async (req, res) => {
    try {
        const drugs = await Drug.find(); 
        res.render('drugs', { drugs });
    } catch (err) {
        console.error('Помилка отримання пацієнтів:', err.message);
        res.status(500).send('Помилка сервера');
    }
};

// Додавання нового пацієнта
exports.addDrug = async (req, res) => {
    const { name, quantity, expirationDate, department } = req.body; 

    try {
        const newPatient = new Drug({
            name,
            quantity,
            expirationDate,
            department
        });

        await newPatient.save();
        res.redirect('/api/drugs'); 
    } catch (err) {
        console.error('Помилка додавання пацієнта:', err.message);
        res.status(500).send('Помилка сервера');
    }
};

// Рендеринг форми редагування пацієнта
exports.editDrugForm = async (req, res) => {
    try {
        const drug = await Drug.findById(req.params.id); 
        if (!drug) {
            return res.status(404).send('Пацієнт не знайдений');
        }
        res.render('editDrug', { drug });
    } catch (err) {
        console.error('Помилка завантаження форми редагування:', err.message);
        res.status(500).send('Помилка сервера');
    }
};

// Оновлення інформації про пацієнта
exports.updateDrug = async (req, res) => {
    const { name, quantity, expirationDate, department } = req.body;

    try {
        let drug = await Drug.findById(req.params.id);

        if (!drug) {
            return res.status(404).send('Пацієнт не знайдений');
        }

        drug.name = name;
        drug.quantity = quantity;
        drug.expirationDate = expirationDate;
        drug.department = department;

        await drug.save(); 
        res.redirect('/api/drugs'); 
    } catch (err) {
        console.error('Помилка оновлення пацієнта:', err.message);
        res.status(500).send('Помилка сервера');
    }
};

// Видалення пацієнта
exports.deleteDrug = async (req, res) => {
    try {
        const drug = await Drug.findById(req.params.id);

        if (!drug) {
            return res.status(404).send('Пацієнт не знайдений');
        }

        await Drug.deleteOne({ _id: req.params.id }); 
        res.redirect('/api/drugs'); 
    } catch (err) {
        console.error('Помилка видалення пацієнта:', err.message);
        res.status(500).send('Помилка сервера');
    }
};
