describe("Ulitilies test", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });
    
      it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      });

      it('should convert bill and tip amount into a tip percentage', function () {
          expect(calculateTipPercent(100, 20)).toEqual(20);
          expect(calculateTipPercent(100, 43)).toEqual(43);
          expect(calculateTipPercent(undefined, 43)).toEqual(NaN);
      });

      it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
     
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})