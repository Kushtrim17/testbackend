export class ReporterDto {
  name: string;
  surname: string;
  email: string;
}

export class ReporterGoogleAuthDto {
  googleId: string;
  accessToken: string;
  expiresAt: string;
  expiresIn: string;
  firstIssuedAt: string;
  idToken: string;
  imageUrl: string;
}

export class CreateReporterDto {
  reporter: ReporterDto;
  googleAuth: ReporterGoogleAuthDto;
}
