import { Children } from "./children";

export interface Node {
  id: number
  name: string
  children?: Children[]
}
