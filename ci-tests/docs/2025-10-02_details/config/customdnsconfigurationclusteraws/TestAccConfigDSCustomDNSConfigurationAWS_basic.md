# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1e9df5af52d2d4d6f8c/limits | qa | flaky_500 | 32.06s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c641411d835e95b44c3/limits | qa | flaky_500 | 32.09s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b069fe60767b7f9b26ab/limits | qa | flaky_500 | 33.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 6 seconds
- 2025-09-05 PASS 7 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3679530Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3681830Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3696039Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-07T00:31:52.3696708Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:31:52.3697178Z         
2025-09-07T00:31:52.3697543Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3698082Z         
2025-09-07T00:31:52.3698375Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3698956Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3699478Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3699755Z         
2025-09-07T00:31:52.3700195Z         error getting project (68bcd1e9df5af52d2d4d6f8c): error getting project's
2025-09-07T00:31:52.3700643Z         limits (68bcd1e9df5af52d2d4d6f8c):
2025-09-07T00:31:52.3701200Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1e9df5af52d2d4d6f8c/limits
2025-09-07T00:31:52.3701852Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3702410Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3702791Z         BadRequestDetail: 
2025-09-07T00:31:52.3703127Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (32.57s)
```

- 2025-09-08
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 7 seconds
- 2025-09-11 PASS 6 seconds
- 2025-09-12 PASS 7 seconds
- 2025-09-13 PASS 10 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4522316Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4524643Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4538511Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4539707Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:31:20.4540781Z         
2025-09-14T00:31:20.4541483Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4542073Z         
2025-09-14T00:31:20.4542612Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4543263Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4543803Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4544090Z         
2025-09-14T00:31:20.4544517Z         error getting project (68c60c641411d835e95b44c3): error getting project's
2025-09-14T00:31:20.4544958Z         limits (68c60c641411d835e95b44c3):
2025-09-14T00:31:20.4545518Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c641411d835e95b44c3/limits
2025-09-14T00:31:20.4546184Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4546756Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4547141Z         BadRequestDetail: 
2025-09-14T00:31:20.4547494Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (32.93s)
```

- 2025-09-15
  - PASS 4 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2074285Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2076654Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2092090Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2093622Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:23:28.2094798Z         
2025-09-15T06:23:28.2095541Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2096219Z         
2025-09-15T06:23:28.2096791Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2097867Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2098911Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2099470Z         
2025-09-15T06:23:28.2100350Z         error getting project (68c7b069fe60767b7f9b26ab): error getting project's
2025-09-15T06:23:28.2101244Z         limits (68c7b069fe60767b7f9b26ab):
2025-09-15T06:23:28.2102541Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b069fe60767b7f9b26ab/limits
2025-09-15T06:23:28.2103890Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2105099Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2105877Z         BadRequestDetail: 
2025-09-15T06:23:28.2106561Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (33.09s)
```

- 2025-09-16 PASS 5 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 7 seconds
- 2025-09-19 PASS 8 seconds
- 2025-09-20 PASS 8 seconds
- 2025-09-21 PASS 7 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 6 seconds
- 2025-09-25 PASS 9 seconds
- 2025-09-26 PASS 8 seconds
- 2025-09-27 PASS 8 seconds
- 2025-09-28 PASS 6 seconds
- 2025-09-29 PASS 6 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 9 seconds