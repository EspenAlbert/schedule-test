# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c66d444485797b22c33/limits | qa | flaky_500 | 35.01s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b06bd444485797b5f33f/limits | qa | flaky_500 | 36.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 14 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 18 seconds
- 2025-09-07 PASS 15 seconds
- 2025-09-08
  - PASS 18 seconds
  - PASS 13 seconds
  - PASS 18 seconds
- 2025-09-09 PASS 24 seconds
- 2025-09-10 PASS 18 seconds
- 2025-09-11 PASS 19 seconds
- 2025-09-12 PASS 11 seconds
- 2025-09-13 PASS 22 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4523104Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4525401Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4537840Z    test_working_directory=/tmp/plugintest2216365794
2025-09-14T00:31:20.4575449Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-14T00:31:20.4576546Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4577687Z         
2025-09-14T00:31:20.4578333Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4578672Z         
2025-09-14T00:31:20.4578963Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4579543Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4580071Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4580353Z         
2025-09-14T00:31:20.4580786Z         error getting project (68c60c66d444485797b22c33): error getting project's
2025-09-14T00:31:20.4581226Z         limits (68c60c66d444485797b22c33):
2025-09-14T00:31:20.4581777Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c66d444485797b22c33/limits
2025-09-14T00:31:20.4582424Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4582985Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4583372Z         BadRequestDetail: 
2025-09-14T00:31:20.4583722Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (35.05s)
```

- 2025-09-15
  - PASS 12 seconds
  - FAIL 36 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2075090Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2077422Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2091105Z    test_working_directory=/tmp/plugintest3572097492
2025-09-15T06:23:28.2146614Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-15T06:23:28.2147745Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2148743Z         
2025-09-15T06:23:28.2149462Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2150093Z         
2025-09-15T06:23:28.2150536Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2151147Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2151692Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2151990Z         
2025-09-15T06:23:28.2152667Z         error getting project (68c7b06bd444485797b5f33f): error getting project's
2025-09-15T06:23:28.2153133Z         limits (68c7b06bd444485797b5f33f):
2025-09-15T06:23:28.2153703Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b06bd444485797b5f33f/limits
2025-09-15T06:23:28.2154380Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2154952Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2155338Z         BadRequestDetail: 
2025-09-15T06:23:28.2155697Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (36.80s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 20 seconds
- 2025-09-18 PASS 18 seconds
- 2025-09-19 PASS 20 seconds
- 2025-09-20 PASS 18 seconds
- 2025-09-21 PASS 21 seconds
- 2025-09-22 PASS 12 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 22 seconds
- 2025-09-26 PASS 15 seconds
- 2025-09-27 PASS 24 seconds
- 2025-09-28 PASS 12 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 16 seconds
  - PASS 19 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 14 seconds
  - PASS 9 seconds
  - PASS 16 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 23 seconds