import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as MongoDBSession from 'connect-mongodb-session';
import * as passport from 'passport';
import flash = require('connect-flash');

const MongoDBStore = MongoDBSession(session);

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/historiajonesession',
  collection: 'reporterSession',
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({ credentials: true, origin: true });
  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  // app.enableCors({ credentials: true, origin: true });
  // app.use(
  //   session({
  //     secret: 'secret',
  //     resave: true,
  //     saveUninitialized: true,
  //     // rolling: true,
  //     cookie: {
  //       // secure: false,
  //       maxAge: 10000 * 60 * 60 * 24 * 7,
  //       httpOnly: true,
  //     },
  //     store,
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(flash());

  await app.listen(4000);
}
bootstrap();
