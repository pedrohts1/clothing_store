const express = require('express');
const mongoose = require('mongoose');
const app = express.app();
const PORT = 8003;
app.get('/', (req, res) => {
    console.log("HEIII");
});
app.listen(PORT, () => {
});
//# sourceMappingURL=index.js.map