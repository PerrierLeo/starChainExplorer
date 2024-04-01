class Contract {
  constructor(contract) {
    this.arbiter = contract["arbiter"];
    this.beneficiary = contract["beneficiary"];
    this.value = contract["value"];
  }
}

export default Contract;
