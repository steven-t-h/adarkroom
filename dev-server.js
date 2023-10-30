import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('.'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
