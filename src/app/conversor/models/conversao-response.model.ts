export class ConversaoResponse {
  constructor(
    public base?: string,
    public date?: string,
    public rates?: any,
    public amount?: number
  ) {}
}

// {
//   "base": "USD",
//   "date": "2020-06-09",
//   "rates": {
//     "BRL": 3.818
//   }
// }
