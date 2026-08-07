# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.09s
[2026-07-11 00:46](#error-2026-07-11t0046490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.02s
[2026-07-16 00:45](#error-2026-07-16t0045210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.07s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7800188Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-09T00:58:00.7803224Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-09T00:58:00.7858625Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-09T00:58:00.7860015Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:58:00.7870609Z         
2026-07-09T00:58:00.7871120Z         Error: error creating project: test-acc-tf-p-4182483530438712603
2026-07-09T00:58:00.7871531Z         
2026-07-09T00:58:00.7871867Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7872531Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7873137Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7873484Z         
2026-07-09T00:58:00.7874004Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7875497Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7876529Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7877064Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (105.91s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11

### Error 2026-07-11T00:46:49+00:00
```
2026-07-11T00:46:49.6222667Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6224403Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6237313Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-11T00:46:49.6238236Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:46:49.6238788Z         
2026-07-11T00:46:49.6239239Z         Error: error creating project: test-acc-tf-p-4850576470813807135
2026-07-11T00:46:49.6239727Z         
2026-07-11T00:46:49.6256763Z           with mongodbatlas_project.test,
2026-07-11T00:46:49.6257678Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:46:49.6258849Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:46:49.6259208Z         
2026-07-11T00:46:49.6259740Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:46:49.6260457Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:46:49.6261106Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:49.6261628Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (76.24s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 55 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16

### Error 2026-07-16T00:45:21+00:00
```
2026-07-16T00:45:21.7826475Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7828481Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7843503Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-16T00:45:21.7845233Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:45:21.7845985Z         
2026-07-16T00:45:21.7846529Z         Error: error creating project: test-acc-tf-p-1299730735756996492
2026-07-16T00:45:21.7847038Z         
2026-07-16T00:45:21.7847381Z           with mongodbatlas_project.test,
2026-07-16T00:45:21.7848137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:45:21.7848872Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:45:21.7849304Z         
2026-07-16T00:45:21.7849827Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:45:21.7850854Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:45:21.7851777Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:21.7852381Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (62.87s)
```

- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8195883Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-18T00:51:48.8197990Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-18T00:51:48.8250523Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-18T00:51:48.8251866Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:51:48.8253074Z         
2026-07-18T00:51:48.8253879Z         Error: error creating project: test-acc-tf-p-1810123470601836297
2026-07-18T00:51:48.8254577Z         
2026-07-18T00:51:48.8255160Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8256344Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8257446Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8258032Z         
2026-07-18T00:51:48.8259192Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8260457Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8261580Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8262715Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (63.66s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4007049Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-21T00:53:42.4008280Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-21T00:53:42.4027888Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-21T00:53:42.4028526Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:53:42.4028898Z         
2026-07-21T00:53:42.4029197Z         Error: error creating project: test-acc-tf-p-5428332941874086488
2026-07-21T00:53:42.4029469Z         
2026-07-21T00:53:42.4029715Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4030141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4030544Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4030771Z         
2026-07-21T00:53:42.4031108Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4031545Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4031950Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4032288Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (94.67s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9962751Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9964645Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9976574Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-07-23T00:48:14.9977304Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:48:14.9977831Z         
2026-07-23T00:48:14.9978362Z         Error: error creating project: test-acc-tf-p-4552314466780213507
2026-07-23T00:48:14.9978779Z         
2026-07-23T00:48:14.9979202Z           with mongodbatlas_project.test,
2026-07-23T00:48:14.9979819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:14.9980421Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:14.9980900Z         
2026-07-23T00:48:14.9981444Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:14.9982092Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:14.9982815Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9983336Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (62.10s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
