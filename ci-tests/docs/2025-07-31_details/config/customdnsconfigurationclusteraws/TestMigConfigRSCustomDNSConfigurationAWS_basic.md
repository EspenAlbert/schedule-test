# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40e690ae45e168bd778/limits | qa | flaky_500 | 36.01s
[2025-07-10 13:08](#error-2025-07-10t1308210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb13fd583001f9eebeb7/limits | qa | flaky_500 | 42.03s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3944823af9166ef91b92/limits | qa | flaky_500 | 35.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 19 seconds
- 2025-07-04 PASS 13 seconds
- 2025-07-05 PASS 22 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8443262Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8447461Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8507981Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8509446Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:33:17.8510353Z         
2025-07-06T00:33:17.8511161Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8511722Z         
2025-07-06T00:33:17.8512246Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8513282Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8514572Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8515091Z         
2025-07-06T00:33:17.8516126Z         error getting project (6869c40e690ae45e168bd778): error getting project's
2025-07-06T00:33:17.8516912Z         limits (6869c40e690ae45e168bd778):
2025-07-06T00:33:17.8517911Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40e690ae45e168bd778/limits
2025-07-06T00:33:17.8519076Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8520074Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8520743Z         BadRequestDetail: 
2025-07-06T00:33:17.8521336Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (36.11s)
```

- 2025-07-07 PASS 14 seconds
- 2025-07-08 PASS 19 seconds
- 2025-07-09 PASS 20 seconds
- 2025-07-10
  - PASS 13 seconds
  - FAIL 42 seconds

### Error 2025-07-10T13:08:21+00:00
```
2025-07-10T13:08:21.1424444Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1428619Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1452837Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1454170Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-10T13:08:21.1455071Z         
2025-07-10T13:08:21.1455714Z         Error: error when getting project properties after create
2025-07-10T13:08:21.1456266Z         
2025-07-10T13:08:21.1456962Z           with mongodbatlas_project.test,
2025-07-10T13:08:21.1457981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:21.1458897Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:21.1459391Z         
2025-07-10T13:08:21.1460151Z         error getting project (686fbb13fd583001f9eebeb7): error getting project's
2025-07-10T13:08:21.1460935Z         limits (686fbb13fd583001f9eebeb7):
2025-07-10T13:08:21.1461940Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb13fd583001f9eebeb7/limits
2025-07-10T13:08:21.1463115Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:21.1464114Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:21.1464788Z         BadRequestDetail: 
2025-07-10T13:08:21.1488071Z    test_name=TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-10T13:08:21.1501353Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (42.34s)
```

- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 20 seconds
- 2025-07-13 PASS 10 seconds
- 2025-07-14 PASS 25 seconds
- 2025-07-15 PASS 22 seconds
- 2025-07-16 PASS 21 seconds
- 2025-07-17 PASS 22 seconds
- 2025-07-18 PASS 19 seconds
- 2025-07-19 PASS 21 seconds
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2523604Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2525920Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2557914Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-20T00:35:10.2558724Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:35:10.2559322Z         
2025-07-20T00:35:10.2559789Z         Error: error when getting project properties after create
2025-07-20T00:35:10.2560121Z         
2025-07-20T00:35:10.2560486Z           with mongodbatlas_project.test,
2025-07-20T00:35:10.2561273Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-20T00:35:10.2561857Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:35:10.2562192Z         
2025-07-20T00:35:10.2562687Z         error getting project (687c3944823af9166ef91b92): error getting project's
2025-07-20T00:35:10.2563157Z         limits (687c3944823af9166ef91b92):
2025-07-20T00:35:10.2563826Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3944823af9166ef91b92/limits
2025-07-20T00:35:10.2564584Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:35:10.2565247Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:35:10.2565635Z         BadRequestDetail: 
2025-07-20T00:35:10.2566075Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (35.59s)
```

- 2025-07-21 PASS 24 seconds
- 2025-07-22 PASS 23 seconds
- 2025-07-23
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 22 seconds
- 2025-07-24 PASS 14 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27 PASS 37 seconds
- 2025-07-28 PASS 19 seconds
- 2025-07-29 PASS 11 seconds
- 2025-07-30 PASS 10 seconds
- 2025-07-31 PASS 25 seconds