import express from 'express'
import router from './routes'

const app = express();

router(app);

app.listen(1245, () => {})

export default app
