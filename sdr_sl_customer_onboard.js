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

            // field order will display based on the order they are created in the script
            
            // Create a form
            var form = serverWidget.createForm({
                title: 'Customer Onboarding'
            });

            // Add a field to the form
            //field group is a visual container for fields
            var customerInfoGroup = form.addFieldGroup({
                id: 'custpage_grp_customer' /*important to prefix custpage_*/,
                label: 'Customer Information'
            });

            var taskGrp = form.addFieldGroup({
                id: 'custpage_grp_tasks',
                label: 'Onboarding Tasks'
            });

            var emailGrp = form.addFieldGroup({
                id: 'custpage_grp_email',
                label: 'Welcome Email'
            });

            // Add fields to the form
            var nameFld = form.addField({
                id: 'custpage_nfo_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Customer Name',
                container: 'custpage_grp_customer'
            });

            var salesRepFld = form.addField({
                id: 'custpage_nfo_salesrep',
                type: serverWidget.FieldType.SELECT,
                label: 'Sales Rep',
                source: 'employee',
                container: 'custpage_grp_customer'
            });

            var phoneFld = form.addField({
                id: 'custpage_nfo_phone',
                type: serverWidget.FieldType.PHONE,
                label: 'Phone Number',
                container: 'custpage_grp_customer'
            });

            var tskTitleFld = form.addField({
                id: 'custpage_tsk_title',
                type: serverWidget.FieldType.TEXT,
                label: 'Task Title',
                container: 'custpage_grp_tasks'
            });

            var tskNotesFld = form.addField({
                id: 'custpage_tsk_notes',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Task Notes',
                container: 'custpage_grp_tasks'
            });

            var emSubjectFld = form.addField({
                id: 'custpage_em_subject',
                type: serverWidget.FieldType.TEXT,
                label: 'Subject',
                container: 'custpage_grp_email'
            });

            var emBodyFld = form.addField({
                id: 'custpage_em_body',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Email Body',
                container: 'custpage_grp_email'
            });

            var noteFld = form.addField({
                id: 'custpage_impt_note',
                type: serverWidget.FieldType.HELP,
                label: 'Note: These tasks are important customer onboarding tasks.'
            });

            // Add a submit button to the form
            form.addSubmitButton({
                label: 'Submit'
            });

            nameFld.updateDisplayType({
                displayType: serverWidget.FieldDisplayType.DISABLED
                //disable the field so user cannot edit
            });
            salesRepFld.updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
                //inline display type makes field appear as text
            });
            phoneFld.updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            });

            emBodyFld.updateDisplaySize({
                height: 20,
                width: 85
            });

            noteFld.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDEABOVE
            });

            tskTitleFld.isMandatory = true;
            tskNotesFld.isMandatory = true;
            emSubjectFld.isMandatory = true;
            emBodyFld.isMandatory = true;

            response.writePage(form);

        }

        return {onRequest}

    });
