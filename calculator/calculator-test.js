
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 10,
    rate: 10
  };
    expect(calculateMonthlyPayment(values)).toEqual('13.22');
    const values1 = {
      amount: 1000,
      years: 'adfasdf',
      rate: 10
    };
    expect(calculateMonthlyPayment(values1)).toEqual('NaN');
    
});


it("should return a result with 2 decimal places", function() {
  let values = { amount: 10, years: 10, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual('0.13');
});

