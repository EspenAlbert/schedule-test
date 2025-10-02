# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1e9df5af52d2d4d6f8d/limits | qa | flaky_500 | 37.04s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c64d444485797b22b36/limits | qa | flaky_500 | 33.07s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b069d444485797b5f231/limits | qa | flaky_500 | 33.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 14 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 20 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3681073Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3682283Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3716089Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3716776Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 3/4 error: Error running pre-apply plan: exit status 1
2025-09-07T00:31:52.3717266Z         
2025-09-07T00:31:52.3717748Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3718067Z         
2025-09-07T00:31:52.3718350Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3718925Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3719452Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3719728Z         
2025-09-07T00:31:52.3720160Z         error getting project (68bcd1e9df5af52d2d4d6f8d): error getting project's
2025-09-07T00:31:52.3720607Z         limits (68bcd1e9df5af52d2d4d6f8d):
2025-09-07T00:31:52.3721184Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1e9df5af52d2d4d6f8d/limits
2025-09-07T00:31:52.3721841Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3722398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3722780Z         BadRequestDetail: 
2025-09-07T00:31:52.3723124Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (37.37s)
```

- 2025-09-08
  - PASS 21 seconds
  - PASS 20 seconds
  - PASS 18 seconds
- 2025-09-09 PASS 24 seconds
- 2025-09-10 PASS 14 seconds
- 2025-09-11 PASS 18 seconds
- 2025-09-12 PASS 10 seconds
- 2025-09-13 PASS 23 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4523869Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4525020Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4560408Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4561076Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-09-14T00:31:20.4561545Z         
2025-09-14T00:31:20.4561914Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4562241Z         
2025-09-14T00:31:20.4562531Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4563268Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4563839Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4564127Z         
2025-09-14T00:31:20.4564663Z         error getting project (68c60c64d444485797b22b36): error getting project's
2025-09-14T00:31:20.4565101Z         limits (68c60c64d444485797b22b36):
2025-09-14T00:31:20.4565735Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c64d444485797b22b36/limits
2025-09-14T00:31:20.4566395Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4566965Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4567343Z         BadRequestDetail: 
2025-09-14T00:31:20.4567788Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (33.69s)
```

- 2025-09-15
  - PASS 11 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2075872Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2077040Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2130843Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2131527Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-09-15T06:23:28.2132015Z         
2025-09-15T06:23:28.2132657Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2133003Z         
2025-09-15T06:23:28.2133303Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2134082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2134636Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2135039Z         
2025-09-15T06:23:28.2135488Z         error getting project (68c7b069d444485797b5f231): error getting project's
2025-09-15T06:23:28.2135941Z         limits (68c7b069d444485797b5f231):
2025-09-15T06:23:28.2136518Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b069d444485797b5f231/limits
2025-09-15T06:23:28.2137180Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2137757Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2138143Z         BadRequestDetail: 
2025-09-15T06:23:28.2138500Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (33.65s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 23 seconds
- 2025-09-18 PASS 20 seconds
- 2025-09-19 PASS 17 seconds
- 2025-09-20 PASS 21 seconds
- 2025-09-21 PASS 20 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 22 seconds
- 2025-09-26 PASS 18 seconds
- 2025-09-27 PASS 23 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29 PASS 8 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 19 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 17 seconds
  - PASS 12 seconds
  - PASS 16 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 20 seconds