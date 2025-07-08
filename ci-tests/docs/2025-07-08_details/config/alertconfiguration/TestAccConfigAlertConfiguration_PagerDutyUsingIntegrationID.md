# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 18 seconds
```
2025-07-01T08:34:31.2252110Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-01T08:34:31.2416773Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-01T08:34:31.2445597Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (18.01s)
```
### 2025-07-02
#### PASS 14 seconds
```
2025-07-02T00:29:37.6811611Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-02T00:29:37.6885341Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-02T00:29:37.7082668Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (14.86s)
```
### 2025-07-03
#### PASS 15 seconds
```
2025-07-03T00:30:16.1757478Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-03T00:30:16.1779424Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-03T00:30:16.1814186Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (15.99s)
```
### 2025-07-04
#### PASS 14 seconds
```
2025-07-04T00:29:38.4822311Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-04T00:29:38.4844763Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-04T00:29:38.4880368Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (14.73s)
```
### 2025-07-05
#### PASS 16 seconds
```
2025-07-05T00:28:51.1274272Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-05T00:28:51.1303229Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-05T00:28:51.1340812Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (16.27s)
```
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
```
2025-07-07T00:32:12.6012718Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-07T00:32:12.6039313Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-07T00:32:12.6072084Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (14.62s)
```
### 2025-07-08
#### PASS 16 seconds
```
2025-07-08T00:30:11.7797740Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-08T00:30:11.7818583Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-08T00:30:11.7855027Z --- PASS: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (16.95s)
```