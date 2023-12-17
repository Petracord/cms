import express from 'express';
import payload from 'payload';
import { config } from 'dotenv';

config();
const app = express();

app.get('/', (_, res) => {
	res.redirect('/admin');
});

const start = async (): Promise<void> => {
	await payload.init({
		secret: process.env.PAYLOAD_SECRET!,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		}
	});

	app.listen(3000);
};

void start();
