# config/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 10 seconds
```
2025-07-01T08:35:29.4576444Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-01T08:35:29.4579443Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-01T08:35:29.4581009Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (10.18s)
```
### 2025-07-02
#### PASS 10 seconds
```
2025-07-02T00:30:40.8603233Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-02T00:30:40.8605861Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-02T00:30:40.8607177Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (10.60s)
```
### 2025-07-03
#### PASS 19 seconds
```
2025-07-03T00:31:22.4218712Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-03T00:31:22.4223020Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-03T00:31:22.4225398Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (19.60s)
```
### 2025-07-04
#### PASS 13 seconds
```
2025-07-04T00:30:47.2389725Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-04T00:30:47.2392259Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-04T00:30:47.2393628Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (13.26s)
```
### 2025-07-05
#### PASS 22 seconds
```
2025-07-05T00:29:58.2608562Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-05T00:29:58.2611140Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-05T00:29:58.2612122Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (22.49s)
```
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
```
2025-07-07T00:33:18.3437238Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-07T00:33:18.3441869Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-07T00:33:18.3444428Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (14.05s)
```
### 2025-07-08
#### PASS 19 seconds
```
2025-07-08T00:31:20.9924756Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-08T00:31:20.9927581Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-07-08T00:31:20.9928474Z --- PASS: TestMigConfigRSCustomDNSConfigurationAWS_basic (19.94s)
```