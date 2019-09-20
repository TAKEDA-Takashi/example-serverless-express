import * as awsServerlessExpress from 'aws-serverless-express';
import 'source-map-support/register';

import { app } from './src/app';

const proxy = awsServerlessExpress.createServer(app);

export const server = (event, context) => {
  awsServerlessExpress.proxy(proxy, event, context);
}

if (require.main === module) {
  // called directly i.e. "node app"
  app.listen(3000, (err) => {
    if (err) console.error(err);
    console.log('server listening on 3000');
  });
}
