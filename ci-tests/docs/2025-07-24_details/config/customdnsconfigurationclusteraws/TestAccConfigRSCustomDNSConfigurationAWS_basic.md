# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40d7267b5775b68330e/limits | qa | flaky_500 | 36.03s
[2025-07-10 13:08](#error-2025-07-10t1308210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb11fd583001f9eebd6c/limits | qa | flaky_500 | 42.03s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3943426db7026b5b1f45/limits | qa | flaky_500 | 32.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 12 seconds
- 2025-06-26 PASS 17 seconds
- 2025-06-27 PASS 21 seconds
- 2025-06-28 PASS 9 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 22 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 22 seconds
  - PASS 10 seconds
  - PASS 19 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 19 seconds
- 2025-07-04 PASS 13 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8444644Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8446812Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8472770Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8474544Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:17.8476089Z         
2025-07-06T00:33:17.8476941Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8478583Z         
2025-07-06T00:33:17.8480198Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8481657Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8482824Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8483518Z         
2025-07-06T00:33:17.8484495Z         error getting project (6869c40d7267b5775b68330e): error getting project's
2025-07-06T00:33:17.8485857Z         limits (6869c40d7267b5775b68330e):
2025-07-06T00:33:17.8487243Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40d7267b5775b68330e/limits
2025-07-06T00:33:17.8488739Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8489914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8490757Z         BadRequestDetail: 
2025-07-06T00:33:17.8507523Z   
2025-07-06T00:33:17.8522329Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (36.31s)
```

- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 22 seconds
- 2025-07-09 PASS 20 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL 42 seconds

### Error 2025-07-10T13:08:21+00:00
```
2025-07-10T13:08:21.1425794Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1427944Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1488788Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1490123Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:08:21.1491044Z         
2025-07-10T13:08:21.1491731Z         Error: error when getting project properties after create
2025-07-10T13:08:21.1492280Z         
2025-07-10T13:08:21.1492767Z           with mongodbatlas_project.test,
2025-07-10T13:08:21.1493800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:21.1494741Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:21.1495202Z         
2025-07-10T13:08:21.1495941Z         error getting project (686fbb11fd583001f9eebd6c): error getting project's
2025-07-10T13:08:21.1496900Z         limits (686fbb11fd583001f9eebd6c):
2025-07-10T13:08:21.1497870Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb11fd583001f9eebd6c/limits
2025-07-10T13:08:21.1498979Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:21.1499990Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:21.1500732Z         BadRequestDetail: 
2025-07-10T13:08:21.1502141Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (42.35s)
```

- 2025-07-11 PASS 15 seconds
- 2025-07-12 PASS 19 seconds
- 2025-07-13 PASS 9 seconds
- 2025-07-14 PASS 23 seconds
- 2025-07-15 PASS 20 seconds
- 2025-07-16 PASS 20 seconds
- 2025-07-17 PASS 21 seconds
- 2025-07-18 PASS 16 seconds
- 2025-07-19 PASS 19 seconds
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2524367Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2525147Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2540284Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2541258Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-07-20T00:35:10.2541736Z         
2025-07-20T00:35:10.2542215Z         Error: error when getting project properties after create
2025-07-20T00:35:10.2542541Z         
2025-07-20T00:35:10.2542938Z           with mongodbatlas_project.test,
2025-07-20T00:35:10.2543613Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:35:10.2544154Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:35:10.2544674Z         
2025-07-20T00:35:10.2545256Z         error getting project (687c3943426db7026b5b1f45): error getting project's
2025-07-20T00:35:10.2545725Z         limits (687c3943426db7026b5b1f45):
2025-07-20T00:35:10.2546401Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3943426db7026b5b1f45/limits
2025-07-20T00:35:10.2547171Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:35:10.2547853Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:35:10.2548236Z         BadRequestDetail: 
2025-07-20T00:35:10.2548704Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (32.69s)
```

- 2025-07-21 PASS 23 seconds
- 2025-07-22 PASS 21 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 23 seconds
- 2025-07-24 PASS 16 seconds