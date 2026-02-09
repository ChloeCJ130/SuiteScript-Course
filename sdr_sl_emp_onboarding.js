/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/email', 'N/record', 'N/redirect', 'N/ui/serverWidget'],
    /**
 * @param{email} email
 * @param{record} record
 * @param{redirect} redirect
 * @param{serverWidget} serverWidget
 */
    (email, record, redirect, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} context
         * @param {ServerRequest} context.request - Incoming request
         * @param {ServerResponse} context.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (context) => {
            var request = context.request;
            var response = context.response;

            var empOnboardForm = serverWidget.createForm({
                title: 'Employee Onboarding'
            });

            var empInfoGrp = empOnboardForm.addFieldGroup({
                id: 'custpage_grp_employee',
                label: 'Employee Information'
            });

            var meetInfoGrp = empOnboardForm.addFieldGroup({
                id: 'custpage_grp_meeting_supervisor',
                label: 'Meeting with Supervisor'
            });

            var wlcmEmailGrp = empOnboardForm.addFieldGroup({
                id: 'custpage_grp_welcome_email',
                label: 'Welcome Email'
            });

            //Fields for Employee Information group

            var empFNameFld = empOnboardForm.addField({
                id: 'custpage_emp_first_name',
                type: serverWidget.FieldType.TEXT,
                label: 'First Name',
                container: 'custpage_grp_employee'
            });

            var empMNameFld = empOnboardForm.addField({
                id: 'custpage_emp_middle_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Middle Name',
                container: 'custpage_grp_employee'
            });

            var empLNameFld = empOnboardForm.addField({
                id: 'custpage_emp_last_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Last Name',
                container: 'custpage_grp_employee'
            });

            var empEmailFld = empOnboardForm.addField({
                id: 'custpage_emp_email',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email Address',
                container: 'custpage_grp_employee'
            });

            var empSupervisorFld = empOnboardForm.addField({
                id: 'custpage_emp_supervisor',
                type: serverWidget.FieldType.SELECT,
                label: 'Supervisor',
                source: 'employee',
                container: 'custpage_grp_employee'
            });

            var empSubsidiaryFld = empOnboardForm.addField({
                id: 'custpage_emp_subsidiary',
                type: serverWidget.FieldType.SELECT,
                label: 'Subsidiary',
                source: 'subsidiary',
                container: 'custpage_grp_employee'
            });

            //Fields for Meeting with Supervisor group

            var meetTitleFld = empOnboardForm.addField({
                id: 'custpage_meet_title',
                type: serverWidget.FieldType.TEXT,
                label: 'Meeting Title',
                container: 'custpage_grp_meeting_supervisor'
            });

            var meetMsgFld = empOnboardForm.addField({
                id: 'custpage_meet_msg',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Meeting Message',
                container: 'custpage_grp_meeting_supervisor'
            });

            //Fields for Welcome Email group

            var wlcmSubjFld = empOnboardForm.addField({
                id: 'custpage_wlcm_subject',
                type: serverWidget.FieldType.TEXT,
                label: 'Email Subject',
                container: 'custpage_grp_welcome_email'
            });

            var wlcmMsgFld = empOnboardForm.addField({
                id: 'custpage_wlcm_message',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Email Message',
                container: 'custpage_grp_welcome_email'
            });

            empOnboardForm.addSubmitButton({
                label: 'Submit'
            });

            response.writePage(empOnboardForm);

        }

        return {onRequest}

    });
