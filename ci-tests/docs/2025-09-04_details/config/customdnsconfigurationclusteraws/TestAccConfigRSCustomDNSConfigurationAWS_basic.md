# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122dfaafa9a76ca8bc822/limits | qa | flaky_500 | 56.06s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d4e4192cd1cc589e3a5/limits | qa | flaky_500 | 33.09s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 15 seconds
- 2025-08-10 PASS 14 seconds
- 2025-08-11 PASS 22 seconds
- 2025-08-12 PASS 11 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 15 seconds
- 2025-08-15 PASS 12 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.5184734Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5187049Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5212426Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-17T00:33:15.5213800Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:15.5214762Z         
2025-08-17T00:33:15.5215618Z         Error: error when getting project properties after create
2025-08-17T00:33:15.5216201Z         
2025-08-17T00:33:15.5216723Z           with mongodbatlas_project.test,
2025-08-17T00:33:15.5217828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:15.5218811Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:15.5219305Z         
2025-08-17T00:33:15.5220136Z         error getting project (68a122dfaafa9a76ca8bc822): error getting project's
2025-08-17T00:33:15.5221234Z         limits (68a122dfaafa9a76ca8bc822):
2025-08-17T00:33:15.5222336Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122dfaafa9a76ca8bc822/limits
2025-08-17T00:33:15.5223584Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:15.5224664Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:15.5225487Z         BadRequestDetail: 
2025-08-17T00:33:15.5226083Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (56.59s)
```

- 2025-08-18 PASS 18 seconds
- 2025-08-19 PASS 26 seconds
- 2025-08-20
  - PASS 19 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 20 seconds
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3568071Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3570918Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3593242Z    test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/56015ded-48c3-400f-8266-f4c4b8579b1e/terraform
2025-08-24T00:32:33.3630907Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-08-24T00:32:33.3632159Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:32:33.3633022Z         
2025-08-24T00:32:33.3633715Z         Error: error when getting project properties after create
2025-08-24T00:32:33.3634320Z         
2025-08-24T00:32:33.3635106Z           with mongodbatlas_project.test,
2025-08-24T00:32:33.3636175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:33.3637101Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:33.3637823Z         
2025-08-24T00:32:33.3638609Z         error getting project (68aa5d4e4192cd1cc589e3a5): error getting project's
2025-08-24T00:32:33.3639427Z         limits (68aa5d4e4192cd1cc589e3a5):
2025-08-24T00:32:33.3640436Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d4e4192cd1cc589e3a5/limits
2025-08-24T00:32:33.3641666Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:33.3642686Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:33.3643371Z         BadRequestDetail: 
2025-08-24T00:32:33.3644038Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (33.88s)
```

- 2025-08-25 PASS 21 seconds
- 2025-08-26 PASS 13 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 18 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31 PASS 45 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1616074Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1617994Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1689380Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-09-01T00:31:13.1720560Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:31:13.1721351Z         
2025-09-01T00:31:13.1722020Z         Error: error creating project: test-acc-tf-p-4024388012193085839
2025-09-01T00:31:13.1722582Z         
2025-09-01T00:31:13.1723063Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.1724047Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.1724923Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.1725405Z         
2025-09-01T00:31:13.1726219Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.1727303Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.1728407Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.1729428Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.1730252Z         BadRequestDetail: 
2025-09-01T00:31:13.1743336Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (0.85s)
```

  - PASS 15 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 14 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 14 seconds