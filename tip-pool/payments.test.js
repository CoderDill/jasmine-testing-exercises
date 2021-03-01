describe("Payments tests", function () {    
    beforeEach(function () {
        billAmt.value = 100;
        tipAmt.value = 20;
    })
        
    it ('should sumbit payment info', function () {
        let paymentId = 6;
        submitPaymentInfo();

        expect(paymentId).toEqual(6);
    });

    it ('should add new payment', function () {
        let billAmt = 100;
        let tipAmt = 20;
        submitPaymentInfo();

        expect(billAmt).toEqual(100);
        expect(tipAmt).toEqual(20);
        expect(calculateTipPercent(100, 20)).toEqual(20);

    })

    it ('should not add new payment', function () {
        billAmt.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        let billAmt = 100;
        let tipAmt = 20;
        appendPaymentTable(curPayment);
    
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
      });
    
      it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
      });
    
      it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
      });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});