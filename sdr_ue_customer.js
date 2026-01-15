/**
 * @NApiVersion 2.x
 * //will be a library file or 1.0 file if no version is specified
 * 
 * @NScriptType UserEventScript
 */

//use js dog tag to define the module
//the 2 is required

define([], 
    
    function () {

    return {
        beforeLoad: function (context) {
            //log.debug('Hello World');
            var customer = context.newRecord;

            var cusID = customer.getText('entityid');
            var cusEmail = customer.getValue('email');
            var salesRepName = customer.getText('salesrep');
            var couponCode = customer.getValue('custentity_sdr_coupon_code');

            log.audit('Customer ID', cusID);
            log.audit('Customer Email', cusEmail);
            log.audit('Sale Rep Name', salesRepName);
            log.audit('Coupon Code', couponCode);
            
        }
    };
});
