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
        afterSubmit: function (context) {
            //context contains info about the event
            //log.debug('Hello World');

            var employee = context.newRecord;
            //initialize variables
            //get the current employee record fields

            var empCode = employee.getValue('custentity_sdr_employee_code');
            //get the employee ID code using getValue method

            var superName = employee.getText('supervisor');
            //get the supervisor name using getText method

            var superID = employee.getValue('supervisor');
            //get the supervisor ID using getValue method

            log.debug('Employee Code: ', empCode);
            log.debug('Supervisor Name: ', superName);
            log.debug('Supervisor ID: ', superID);
        }
    };
});
