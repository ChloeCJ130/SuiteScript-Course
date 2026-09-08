function clientFieldChanged(type, name, linenum) {
        if (name == 'custrecord_er_rate'){
            //area = 160;
            var areaPerSqm = parseFloat(nlapiGetFieldValue('custentity_area'));
            //rate = '200';
            var ratePerSqm = parseFloat(nlapiGetFieldValue('custentity_rate'));

            var totalAreaRate = areaPerSqm + ratePerSqm;

            nlapiSetFieldValue('custentity_total_area_rate', totalAreaRate);
        }
}