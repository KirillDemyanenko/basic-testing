import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(5000).getBalance()).toBe(5000);
    expect(getBankAccount(1111).getBalance()).toBe(1111);
    expect(getBankAccount(999).getBalance()).toBe(999);
    expect(getBankAccount(777).getBalance()).toBe(777);
    expect(getBankAccount(9000).getBalance()).toBe(9000);
  }, 30000);

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(5000).withdraw(6000)).toThrow(
      InsufficientFundsError,
    );
    expect(() => getBankAccount(2).withdraw(3)).toThrow(InsufficientFundsError);
    expect(() => getBankAccount(1).withdraw(1000000)).toThrow(
      InsufficientFundsError,
    );
  }, 30000);

  test('should throw error when transferring more than balance', () => {
    const accountToTransfer = getBankAccount(0);
    expect(() =>
      getBankAccount(5000).transfer(6000, accountToTransfer),
    ).toThrow(InsufficientFundsError);
    expect(() => getBankAccount(2).transfer(3, accountToTransfer)).toThrow(
      InsufficientFundsError,
    );
    expect(() =>
      getBankAccount(1).transfer(1000000, accountToTransfer),
    ).toThrow(InsufficientFundsError);
  }, 30000);

  test('should throw error when transferring to the same account', () => {
    const accountToTransfer = getBankAccount(999999999);
    expect(() => accountToTransfer.transfer(6000, accountToTransfer)).toThrow(
      TransferFailedError,
    );
    expect(() => accountToTransfer.transfer(3, accountToTransfer)).toThrow(
      TransferFailedError,
    );
    expect(() =>
      accountToTransfer.transfer(1000000, accountToTransfer),
    ).toThrow(TransferFailedError);
  }, 30000);

  test('should deposit money', () => {
    expect(getBankAccount(0).deposit(1000).getBalance()).toBe(1000);
    expect(getBankAccount(0).deposit(50).getBalance()).toBe(50);
    expect(getBankAccount(0).deposit(100).getBalance()).toBe(100);
  }, 30000);

  test('should withdraw money', () => {
    expect(getBankAccount(1000).withdraw(1000).getBalance()).toBe(0);
    expect(getBankAccount(150).withdraw(50).getBalance()).toBe(100);
    expect(getBankAccount(999).withdraw(99).getBalance()).toBe(900);
  }, 30000);

  test('should transfer money', () => {
    const accountToTransfer = getBankAccount(0);
    expect(
      getBankAccount(1000).transfer(1000, accountToTransfer).getBalance(),
    ).toBe(0);
    expect(accountToTransfer.getBalance()).toBe(1000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    await expect(getBankAccount(0).fetchBalance()).resolves.toEqual(
      expect.any(Number),
    );
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(0);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(100);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(100);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(0);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
