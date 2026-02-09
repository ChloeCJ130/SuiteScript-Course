/**
 * @NApiVersion 2.x
 * //will be a library file or 1.0 file if no version is specified
 * 
 * @NScriptType UserEventScript
 */

//use js dog tag to define the module
//the 2 is required

define(['N/redirect', 'N/record'], 
    
    function (redirect, record) {

    return {
        aftersubmit: function (context) {
            //log.debug('Hello World');
            /*var customer = context.newRecord;

            var cusID = customer.getText('entityid');
            var cusEmail = customer.getValue('email');
            var salesRepName = customer.getText('salesrep');
            var couponCode = customer.getValue('custentity_sdr_coupon_code');

            log.audit('Customer ID', cusID);
            log.audit('Customer Email', cusEmail);
            log.audit('Sale Rep Name', salesRepName);
            log.audit('Coupon Code', couponCode);*/

            var customer = context.newRecord;

            //will only trigger when a new customer is created
            if (context.type == context.UserEventType.CREATE) {
                redirect.toSuitelet({
                    scriptId: '93',
                    deploymentId: '1',
                    parameters: {
                        sdr_customerid: customer.id,
                        sdr_phone: customer.getValue('phone'),
                        sdr_email: customer.getValue('email'),
                        sdr_salesrep_id: customer.getValue('salesrep')
                    }
                });
            }
            
        }
    };
});
