# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029520000) |  | qa |  | 1.00s
[2025-06-05 00:30](#error-2025-06-05t0030450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 5 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-04-17 PASS 6 seconds
- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 8 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 7 seconds
- 2025-04-23 PASS 5 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 8 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 7 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 8 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 5 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 8 seconds
- 2025-05-10 PASS 4 seconds
- 2025-05-11

### Error 2025-05-11T00:29:52+00:00
```
2025-05-11T00:29:52.9316150Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9346636Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9376383Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9377718Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:52.9378743Z         
2025-05-11T00:29:52.9379582Z         Error: error creating project: test-acc-tf-p-8863663080407141917
2025-05-11T00:29:52.9380270Z         
2025-05-11T00:29:52.9380868Z           with mongodbatlas_project.test,
2025-05-11T00:29:52.9412401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:52.9415448Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:52.9416073Z         
2025-05-11T00:29:52.9418817Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:52.9419588Z         type
2025-05-11T00:29:52.9469999Z   
2025-05-11T00:29:52.9480754Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (1.00s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 7 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20 PASS 6 seconds
- 2025-05-21 PASS 5 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 5 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 6 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27 PASS 7 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-29 PASS 7 seconds
- 2025-05-30 PASS 12 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05

### Error 2025-06-05T00:30:45+00:00
```
2025-06-05T00:30:45.1226443Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1228895Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1240728Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1241404Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:30:45.1242088Z         
2025-06-05T00:30:45.1242508Z         Error: error creating project: test-acc-tf-p-1987918787175607014
2025-06-05T00:30:45.1242870Z         
2025-06-05T00:30:45.1243176Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1243775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1244420Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1244726Z         
2025-06-05T00:30:45.1245190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1245824Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1246391Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1246858Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (2.72s)
```

- 2025-06-06 PASS 6 seconds
- 2025-06-07 PASS 9 seconds
- 2025-06-08 PASS 6 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 8 seconds
- 2025-06-11
  - PASS 9 seconds
  - PASS 5 seconds
- 2025-06-12 PASS 5 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 7 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 9 seconds
- 2025-06-18
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-06-19 PASS 6 seconds
- 2025-06-20 PASS 9 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22 PASS 9 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 7 seconds
- 2025-06-25 PASS 7 seconds
- 2025-06-26 PASS 7 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 5 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 7 seconds
- 2025-07-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 7 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 10 seconds
- 2025-07-10 PASS 5 seconds