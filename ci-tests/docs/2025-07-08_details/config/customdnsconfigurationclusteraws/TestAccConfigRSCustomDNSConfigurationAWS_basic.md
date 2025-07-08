# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
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
#### PASS 24 seconds
### 2025-07-06
#### FAIL 36 seconds
```
2025-07-06T00:33:17.8444644Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8446812Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8472770Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8474544Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:17.8476089Z         
2025-07-06T00:33:17.8476941Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8478583Z         
2025-07-06T00:33:17.8480198Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8481657Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8482824Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8483518Z         
2025-07-06T00:33:17.8484495Z         error getting project (6869c40d7267b5775b68330e): error getting project's
2025-07-06T00:33:17.8485857Z         limits (6869c40d7267b5775b68330e):
2025-07-06T00:33:17.8487243Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40d7267b5775b68330e/limits
2025-07-06T00:33:17.8488739Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8489914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8490757Z         BadRequestDetail: 
2025-07-06T00:33:17.8507523Z   
2025-07-06T00:33:17.8522329Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (36.31s)
```
### 2025-07-07
#### PASS 10 seconds
### 2025-07-08
#### PASS 22 seconds