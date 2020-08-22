export interface Reporter {
  id?: string;
  name: string;
  surname: string;
  email: string;
  city: string;
  state: string;
  isAnonymous: boolean;
  joinDate: Date;
}
