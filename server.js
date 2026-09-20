/**
 * Convince the AI - backend server.
 *
 * Skeleton stage: exposes POST /message and echoes the input back.
 * Will be replaced with a real call to the Claude API in the next step.
 */

const express = require('express');

const app = express();
app.use(express.json());

/**
 * POST /message
 * @body {string} message - the player's chat message
 * @returns {{ reply: string }}
 */
app.post('/message', (req, res) => {
	const userMessage = req.body.message;
	res.json({ reply: `you said: ${userMessage}` });
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server listening on http://localhost:${PORT}`);
});
