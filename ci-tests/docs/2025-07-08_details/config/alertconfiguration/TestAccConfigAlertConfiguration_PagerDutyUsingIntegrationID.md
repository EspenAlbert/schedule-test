# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 14 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 16 seconds
### 2025-07-06
#### FAIL 41 seconds
```
2025-07-06T00:33:03.9309871Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9374319Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9710145Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9711356Z     resource_test.go:508: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:03.9712067Z         
2025-07-06T00:33:03.9938540Z         Error: error when getting project properties after create
2025-07-06T00:33:03.9939535Z         
2025-07-06T00:33:03.9940136Z           with mongodbatlas_project.test,
2025-07-06T00:33:03.9941210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:03.9942137Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:03.9942633Z         
2025-07-06T00:33:03.9943400Z         error getting project (6869c418690ae45e168bdce8): error getting project's
2025-07-06T00:33:03.9944186Z         limits (6869c418690ae45e168bdce8):
2025-07-06T00:33:03.9945300Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c418690ae45e168bdce8/limits
2025-07-06T00:33:03.9946458Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:03.9947446Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:03.9948103Z         BadRequestDetail: 
2025-07-06T00:33:03.9948786Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (41.94s)
```
### 2025-07-07
#### PASS 14 seconds
### 2025-07-08
#### PASS 16 seconds