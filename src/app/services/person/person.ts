import {Address} from "./address";

export interface Person{
  id?: number
  name: string
  birthdate: string
  address: Address[]
}
