# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 10 seconds
### 2025-07-03
#### PASS 19 seconds
### 2025-07-04
#### PASS 13 seconds
### 2025-07-05
#### PASS 22 seconds
### 2025-07-06
#### FAIL 36 seconds
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
### 2025-07-07
#### PASS 14 seconds
### 2025-07-08
#### PASS 19 seconds