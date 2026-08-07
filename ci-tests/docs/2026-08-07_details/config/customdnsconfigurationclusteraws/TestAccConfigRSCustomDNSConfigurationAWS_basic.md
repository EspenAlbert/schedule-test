# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.02s
[2026-07-11 00:46](#error-2026-07-11t0046490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 116.07s
[2026-07-16 00:45](#error-2026-07-16t0045210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.03s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7801721Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-09T00:58:00.7804215Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-09T00:58:00.7825487Z   
2026-07-09T00:58:00.7826543Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:58:00.7827511Z         
2026-07-09T00:58:00.7828289Z         Error: error creating project: test-acc-tf-p-7960587286593220074
2026-07-09T00:58:00.7828971Z         
2026-07-09T00:58:00.7829528Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7830686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7831775Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7832336Z         
2026-07-09T00:58:00.7833216Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7834451Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7835761Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7836633Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (86.22s)
```

- 2026-07-10 PASS 21 seconds
- 2026-07-11

### Error 2026-07-11T00:46:49+00:00
```
2026-07-11T00:46:49.6223549Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6224834Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6236504Z    test_terraform_path=/home/runner/work/_temp/6bfb0cbb-6316-410c-9d2e-a1b3dac4e565/terraform test_working_directory=/tmp/plugintest3032468056 test_step_number=1
2026-07-11T00:46:49.6274154Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6274945Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:46:49.6275493Z         
2026-07-11T00:46:49.6275952Z         Error: error creating project: test-acc-tf-p-3804968167970931360
2026-07-11T00:46:49.6276351Z         
2026-07-11T00:46:49.6276680Z           with mongodbatlas_project.test,
2026-07-11T00:46:49.6277529Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:46:49.6278329Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:46:49.6278666Z         
2026-07-11T00:46:49.6279172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:46:49.6279868Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:46:49.6280493Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:49.6281000Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (116.74s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 16 seconds
- 2026-07-16

### Error 2026-07-16T00:45:21+00:00
```
2026-07-16T00:45:21.7827501Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7829078Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7843014Z   
2026-07-16T00:45:21.7870035Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7871342Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-16T00:45:21.7872175Z         
2026-07-16T00:45:21.7872880Z         Error: error creating project: test-acc-tf-p-4467624945467966272
2026-07-16T00:45:21.7873473Z         
2026-07-16T00:45:21.7873999Z           with mongodbatlas_project.test,
2026-07-16T00:45:21.7875070Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:45:21.7876068Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:45:21.7876599Z         
2026-07-16T00:45:21.7877113Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:45:21.7878060Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:45:21.7878722Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:21.7879229Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (81.36s)
```

- 2026-07-17 PASS 14 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8196968Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-18T00:51:48.8198603Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-18T00:51:48.8218143Z   
2026-07-18T00:51:48.8219178Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-18T00:51:48.8220143Z         
2026-07-18T00:51:48.8220939Z         Error: error creating project: test-acc-tf-p-6166765535858253495
2026-07-18T00:51:48.8221627Z         
2026-07-18T00:51:48.8222200Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8223477Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8224480Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8225075Z         
2026-07-18T00:51:48.8225997Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8227188Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8228259Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8229114Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (62.42s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4007664Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-21T00:53:42.4008647Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-21T00:53:42.4015752Z    test_name=TestAccConfigRSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/c5ad7357-3fdc-4e6e-97cb-cf6a6514b6de/terraform
2026-07-21T00:53:42.4016425Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:53:42.4016769Z         
2026-07-21T00:53:42.4017077Z         Error: error creating project: test-acc-tf-p-6621569770740005534
2026-07-21T00:53:42.4017344Z         
2026-07-21T00:53:42.4017583Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4018017Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4018497Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4018733Z         
2026-07-21T00:53:42.4019058Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4019505Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4019915Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4020258Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (93.25s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9963713Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9965122Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9975691Z    test_step_number=1 test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/3a1058f9-c255-4ede-a2d2-e5d503048ce9/terraform test_working_directory=/tmp/plugintest2525978053
2026-07-23T00:48:14.9994575Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9995249Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:48:14.9995807Z         
2026-07-23T00:48:14.9996272Z         Error: error creating project: test-acc-tf-p-6162186173497736453
2026-07-23T00:48:14.9996667Z         
2026-07-23T00:48:14.9997045Z           with mongodbatlas_project.test,
2026-07-23T00:48:14.9997693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:14.9998256Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:14.9998661Z         
2026-07-23T00:48:14.9999152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:14.9999833Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:15.0000386Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:15.0001000Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (67.91s)
```

- 2026-07-24 PASS 18 seconds
- 2026-07-25 PASS 14 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 21 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31 PASS 16 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 16 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 18 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
