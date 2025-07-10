# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029520000) |  | qa |  | 3.06s
[2025-06-05 00:30](#error-2025-06-05t0030450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.08s
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40e690ae45e168bd778/limits | qa | flaky_500 | 36.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 12 seconds
- 2025-04-14 PASS 9 seconds
- 2025-04-15 PASS 13 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-04-17 PASS 9 seconds
- 2025-04-18 PASS 10 seconds
- 2025-04-19 PASS 15 seconds
- 2025-04-20 PASS 10 seconds
- 2025-04-21 PASS 22 seconds
- 2025-04-22 PASS 20 seconds
- 2025-04-23 PASS 10 seconds
- 2025-04-24 PASS 21 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 16 seconds
- 2025-04-27 PASS 25 seconds
- 2025-04-28 PASS 22 seconds
- 2025-04-29 PASS 11 seconds
- 2025-04-30
  - PASS 14 seconds
  - PASS 15 seconds
- 2025-05-01
  - PASS 12 seconds
  - PASS 18 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 16 seconds
  - PASS 17 seconds
- 2025-05-02 PASS 14 seconds
- 2025-05-03 PASS 22 seconds
- 2025-05-04 PASS 15 seconds
- 2025-05-05 PASS 22 seconds
- 2025-05-06 PASS 10 seconds
- 2025-05-07 PASS 9 seconds
- 2025-05-08 PASS 13 seconds
- 2025-05-09 PASS 19 seconds
- 2025-05-10 PASS 11 seconds
- 2025-05-11

### Error 2025-05-11T00:29:52+00:00
```
2025-05-11T00:29:52.9343254Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9348210Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9375303Z    test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform
2025-05-11T00:29:52.9492079Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9493366Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:52.9494268Z         
2025-05-11T00:29:52.9494986Z         Error: error creating project: test-acc-tf-p-8477150302649306608
2025-05-11T00:29:52.9495595Z         
2025-05-11T00:29:52.9496130Z           with mongodbatlas_project.test,
2025-05-11T00:29:52.9497180Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:52.9498123Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:52.9498636Z         
2025-05-11T00:29:52.9499449Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:52.9500141Z         type
2025-05-11T00:29:52.9500673Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (3.59s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 21 seconds
  - PASS 12 seconds
- 2025-05-14 PASS 13 seconds
- 2025-05-15 PASS 20 seconds
- 2025-05-16 PASS 20 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 19 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 17 seconds
- 2025-05-21 PASS 14 seconds
- 2025-05-22 PASS 10 seconds
- 2025-05-23 PASS 12 seconds
- 2025-05-24 PASS 12 seconds
- 2025-05-25 PASS 13 seconds
- 2025-05-26 PASS 17 seconds
- 2025-05-27 PASS 13 seconds
- 2025-05-28
  - PASS 23 seconds
  - PASS 12 seconds
  - PASS 12 seconds
- 2025-05-29 PASS 17 seconds
- 2025-05-30 PASS 20 seconds
- 2025-05-31 PASS 18 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 18 seconds
  - PASS 18 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 19 seconds
- 2025-06-03 PASS 19 seconds
- 2025-06-04 PASS 14 seconds
- 2025-06-05

### Error 2025-06-05T00:30:45+00:00
```
2025-06-05T00:30:45.1227273Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1229702Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1240444Z   
2025-06-05T00:30:45.1271036Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1271753Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1272267Z         
2025-06-05T00:30:45.1272686Z         Error: error creating project: test-acc-tf-p-4404443041508768089
2025-06-05T00:30:45.1273044Z         
2025-06-05T00:30:45.1273355Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1273953Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1274600Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1274899Z         
2025-06-05T00:30:45.1275367Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1275994Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1276576Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1277039Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (4.80s)
```

- 2025-06-06 PASS 12 seconds
- 2025-06-07 PASS 23 seconds
- 2025-06-08 PASS 9 seconds
- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 24 seconds
- 2025-06-11
  - PASS 19 seconds
  - PASS 10 seconds
- 2025-06-12 PASS 10 seconds
- 2025-06-13 PASS 14 seconds
- 2025-06-14 PASS 12 seconds
- 2025-06-15 PASS 10 seconds
- 2025-06-16 PASS 22 seconds
- 2025-06-17 PASS 17 seconds
- 2025-06-18
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 11 seconds
- 2025-06-20 PASS 20 seconds
- 2025-06-21 PASS 11 seconds
- 2025-06-22 PASS 12 seconds
- 2025-06-23 PASS 22 seconds
- 2025-06-24 PASS 13 seconds
- 2025-06-25 PASS 13 seconds
- 2025-06-26 PASS 13 seconds
- 2025-06-27 PASS 24 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 17 seconds
- 2025-07-01
  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 23 seconds
  - PASS 10 seconds
  - PASS 19 seconds
  - PASS 10 seconds
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
- 2025-07-10 PASS 13 seconds