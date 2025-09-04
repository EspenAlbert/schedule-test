# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122e0aafa9a76ca8bc9e2/limits | qa | flaky_500 | 57.10s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d4f4192cd1cc589e59c/limits | qa | flaky_500 | 37.01s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 19 seconds
- 2025-08-10 PASS 10 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 17 seconds
- 2025-08-14 PASS 12 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 14 seconds
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.5183333Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5187740Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5248821Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5250158Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-17T00:33:15.5251095Z         
2025-08-17T00:33:15.5251767Z         Error: error when getting project properties after create
2025-08-17T00:33:15.5252335Z         
2025-08-17T00:33:15.5252839Z           with mongodbatlas_project.test,
2025-08-17T00:33:15.5253894Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:15.5255701Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:15.5256181Z         
2025-08-17T00:33:15.5256959Z         error getting project (68a122e0aafa9a76ca8bc9e2): error getting project's
2025-08-17T00:33:15.5257827Z         limits (68a122e0aafa9a76ca8bc9e2):
2025-08-17T00:33:15.5258929Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e0aafa9a76ca8bc9e2/limits
2025-08-17T00:33:15.5260140Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:15.5261137Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:15.5261797Z         BadRequestDetail: 
2025-08-17T00:33:15.5262639Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (57.97s)
```

- 2025-08-18 PASS 11 seconds
- 2025-08-19 PASS 24 seconds
- 2025-08-20
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-08-21 PASS 12 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 16 seconds
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3566654Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3570217Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3657332Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3658109Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:33.3658656Z         
2025-08-24T00:32:33.3659054Z         Error: error when getting project properties after create
2025-08-24T00:32:33.3659409Z         
2025-08-24T00:32:33.3659719Z           with mongodbatlas_project.test,
2025-08-24T00:32:33.3660330Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:33.3661101Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:33.3661421Z         
2025-08-24T00:32:33.3661884Z         error getting project (68aa5d4f4192cd1cc589e59c): error getting project's
2025-08-24T00:32:33.3662364Z         limits (68aa5d4f4192cd1cc589e59c):
2025-08-24T00:32:33.3662966Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d4f4192cd1cc589e59c/limits
2025-08-24T00:32:33.3663655Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:33.3664254Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:33.3664779Z         BadRequestDetail: 
2025-08-24T00:32:33.3665161Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (37.11s)
```

- 2025-08-25 PASS 22 seconds
- 2025-08-26 PASS 13 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 10 seconds
- 2025-08-29 PASS 15 seconds
- 2025-08-30 PASS 13 seconds
- 2025-08-31 PASS 42 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1614799Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1618643Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1675756Z    test_working_directory=/tmp/plugintest2694979349 test_name=TestAccConfigRSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/c4befcc9-41b8-42b5-bee4-64a560bb5beb/terraform test_step_number=1
2025-09-01T00:31:13.1688945Z   
2025-09-01T00:31:13.1758414Z === NAME  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1789815Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:31:13.1790731Z         
2025-09-01T00:31:13.1791397Z         Error: error creating project: test-acc-tf-p-5649351105384773930
2025-09-01T00:31:13.1791978Z         
2025-09-01T00:31:13.1792482Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.1793477Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.1794388Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.1794868Z         
2025-09-01T00:31:13.1795679Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.1796761Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.1797791Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.1798792Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.1799465Z         BadRequestDetail: 
2025-09-01T00:31:13.1800182Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (2.92s)
```

  - PASS 13 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 14 seconds