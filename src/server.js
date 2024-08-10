import crypto from 'node:crypto';
import path from 'node:path';
import express, { response } from 'express';

const PORT = 3333;

const app = express();

app.get('/', (request, response) => {
	response.json({ message: 'ok' });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
