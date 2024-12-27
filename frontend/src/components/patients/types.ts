export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export enum Status {
  ACTIVE = "ACTIVE",
  REMOVED = "REMOVED",
}
export type Patient = {
  id: number;
  name: string;
  email?: string;
  phone: string;
  passport?: string;
  birthday?: string;
  gender?: Gender;
  status: Status;
};
export type TableField = {
  name: keyof Patient;
  title: string;
  sortable: boolean;
};
