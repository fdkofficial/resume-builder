
class Constants {
    
    // token = "Token "+ '295044cd0703622dbe75de2f234277c771979391'
    token = "Token "+ '8fdf0869587cf55439784d479ca086c1c0d116f4'
    // token = "Token "+ 'ae63268879d2181114dfa880c4f2b9b21a38c216'
    base_url = 'http://localhost:8000/'
    
    
    // key = localStorage.getItem('infogate_key')
    // token = "Token "+this.key
    login           = this.base_url+'api-auth/login/'
    logout          = this.base_url+'api-auth/logout/'
    getUser         = this.base_url+"list-users/"

    listPatients = this.base_url+'list-patients/'
    listEncounter = this.base_url+'encounters/'
    searchpatient = this.base_url+'search-patients/'
    listMedications = this.base_url+'list-medication/'
    listMar_summary = this.base_url+'list-mar-summary/'
    listOrders = this.base_url+'list-order/'
    listallergies = this.base_url+'list-allergies/'
    listdocuments = this.base_url+'list-document/'
    listtemplates = this.base_url+'list-templates/'
    listprocedures = this.base_url+'list-procedures/'
    listdiagnosis = this.base_url+'list-diagnosis/'
    listproblems = this.base_url+'list-problem/'
    listformbrowser = this.base_url+'form-browser/'
    
    
    // Laboratory
    listdictionary = this.base_url+'list-dictionary/'
    list_test_result = this.base_url+'list-test-result/'
    list_test_section = this.base_url+'list-test-section/'
    list_type_sample_panel = this.base_url+'list-type-sample-panel/'
    list_type_sample = this.base_url+'list-type-sample/'
    list_type_sample_test = this.base_url+'list-type-sample-test/'
    unit_of_measure = this.base_url+'unit-of-measure/'
    type_of_test = this.base_url+'type-of-test/'
    sample = this.base_url+'sample/'
    listmethod = this.base_url+'list-method/'
    listpanel = this.base_url+'list-panel/'
    listpanelitem = this.base_url+'list-panel-item/'
    listresultlimits = this.base_url+'list-result-limits/'
    listsiteinfo = this.base_url+'list-site-info/'
    sampleentryconf = this.base_url+'sample-entry-conf/'
    listprintedreports = this.base_url+'list-printed-reports/'
    listtest = this.base_url+'list-test/'
    listqa = this.base_url+'list-qa/'
    listresults = this.base_url+'list-lab-result/'


    // Pharmacy
    search_pharmacy = this.base_url + 'search-pharmacy/'
    list_med_order = this.base_url + 'list-med-order/'
    list_physician = this.base_url + 'list-physicians/'
    list_pharmacy_medication = this.base_url + 'pharmacy-medication/'
    list_medication_category = this.base_url + 'medication-category/'
    list_dispence_location = this.base_url + 'list-dispence-location/'
    list_retail_orders = this.base_url + 'list-retail_orders/'
    list_label_request = this.base_url + 'list-label-request/'
    list_drugs = this.base_url + 'list-drugs/'
    list_demography = this.base_url + 'list-demography/'


     // Appointment
    list_appointment  = this.base_url + 'list-appointments/'
    list_appointment_type  = this.base_url + 'list-appointments-type/'
    list_location  = this.base_url + 'list-location/'
    list_practitioner  = this.base_url + 'list-practitioner/'
    list_schedule  = this.base_url + 'list-schedule/'
    list_checkin  = this.base_url + 'list-checkin/'
    list_lab_request  = this.base_url + 'list-lab-request/'
    list_new_born  = this.base_url + 'list-new-born/'
    list_bed_management  = this.base_url + 'list-bed-management/'
    list_discharge  = this.base_url + 'list-discharge/'
    list_isolation  = this.base_url + 'list-isolation/'
    
    // Revenue Cycle
    list_follow_ups  = this.base_url + 'list-follow_ups/'
    list_insurance_balance  = this.base_url + 'list-insurance_balance/'
    list_self_pay_balance  = this.base_url + 'list-list_self_pay_balance/'
    list_charge  = this.base_url + 'list-charge/'
    list_insuranced_transection  = this.base_url + 'list-insuranced_transection/'
    list_balance  = this.base_url + 'list-balance/'
    list_batch  = this.base_url + 'list-batch/'
    list_report  = this.base_url + 'list-report/'
    account  = this.base_url + 'account/'
    list_non_medication  = this.base_url + 'list-non-medication/'
    list_plans  = this.base_url + 'list-plans/'

    add_report_table = this.base_url + 'add-report-table/'
    add_form = this.base_url + 'add-form/'
    add_report = this.base_url + 'add-report/'
    add_form_name = this.base_url + 'add-form-name/'
    
    list_forms = this.base_url + 'add-form/'
    list_form_names = this.base_url + 'add-form-name/'
    list_parameters = this.base_url + 'list-parameters/'
    list_report = this.base_url + 'add-report/'
    list_categories = this.base_url + 'add-categories/'

    list_result = this.base_url + 'add-result/'
    list_result_names = this.base_url + 'add-result-name/'
    // list_parameters = this.base_url + 'list-parameters/'
    
    list_result_categories = this.base_url + 'add-result-categories/'
    
    
    // list_report_table = this.base_url + 'add-report-table/'
    update_report = this.base_url + 'update-report/'
    check_form = this.base_url + 'check-form/'


}

export default Constants;