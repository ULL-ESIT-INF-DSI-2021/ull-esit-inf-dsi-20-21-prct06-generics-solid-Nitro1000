/* eslint-disable max-len */


export class RandomNumber {
  private randNumF01: number;
  private randNumFNM: number=0;
  private randNumINM: number=0;

  private static ramdomNumber: RandomNumber;

  private constructor() {
    this.randNumF01=Math.random();
  }

  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.ramdomNumber) {
      RandomNumber.ramdomNumber = new RandomNumber();
    }
    return RandomNumber.ramdomNumber;
  }


  public getRandNumF01() : number {
    return RandomNumber.ramdomNumber.randNumF01;
  }
  public setRandNumF01() : number {
    return RandomNumber.ramdomNumber.randNumF01=Math.random();
  }
  public getRandNumFNM() : number {
    return RandomNumber.ramdomNumber.randNumFNM;
  }
  public setRandNumFNM(N:number, M:number) : number {
    return RandomNumber.ramdomNumber.randNumFNM=Math.random()*(M-N)+N;
  }
  public getRandNumINM() : number {
    return Math.floor(RandomNumber.ramdomNumber.randNumINM);
  }
  public setRandNumINM(N:number, M:number) : number {
    return RandomNumber.ramdomNumber.randNumINM=Math.floor(Math.random()*(M-N)+N);
  }
}
