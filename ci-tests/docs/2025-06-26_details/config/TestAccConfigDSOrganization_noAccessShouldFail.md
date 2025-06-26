# config/TestAccConfigDSOrganization_noAccessShouldFail Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, FAIL(x 4) PASS(x 3)
Success rate: 42.86%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-20T00:30:41.135000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='6 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-20T00:30:41.1353878Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1356345Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1368435Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1369323Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-20T00:30:41.1369875Z         
2025-06-20T00:30:41.1371780Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-20T00:30:41.1372948Z         
2025-06-20T00:30:41.1373448Z           with data.mongodbatlas_organization.test,
2025-06-20T00:30:41.1374313Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-20T00:30:41.1375079Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-20T00:30:41.1375398Z         
2025-06-20T00:30:41.1375711Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.61s)
```
### 2025-06-21
#### FAIL a moment
```
2025-06-21T00:30:24.1429247Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1431347Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1451192Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1452512Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-21T00:30:24.1453542Z         
2025-06-21T00:30:24.1456269Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-21T00:30:24.1458055Z         
2025-06-21T00:30:24.1458674Z           with data.mongodbatlas_organization.test,
2025-06-21T00:30:24.1459822Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-21T00:30:24.1460809Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-21T00:30:24.1461350Z         
2025-06-21T00:30:24.1461896Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.67s)
```
### 2025-06-22
#### FAIL a moment
```
2025-06-22T00:33:39.3768544Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3772633Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3800411Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3802265Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-22T00:33:39.3803352Z         
2025-06-22T00:33:39.3806368Z         Error: error getting organizations information: https://cloud-qa.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-22T00:33:39.3808457Z         
2025-06-22T00:33:39.3809182Z           with data.mongodbatlas_organization.test,
2025-06-22T00:33:39.3810410Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-22T00:33:39.3811700Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-22T00:33:39.3812342Z         
2025-06-22T00:33:39.3812854Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.58s)
```
### 2025-06-23
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-06-23T00:32:57.693000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='3 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-23T00:32:57.6930983Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6933109Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6945066Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6945820Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-23T00:32:57.6946361Z         
2025-06-23T00:32:57.6947736Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-23T00:32:57.6948671Z         
2025-06-23T00:32:57.6949002Z           with data.mongodbatlas_organization.test,
2025-06-23T00:32:57.6949613Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-23T00:32:57.6950162Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-23T00:32:57.6950462Z         
2025-06-23T00:32:57.6950864Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.49s)
```
### 2025-06-24
#### PASS a second
```
2025-06-24T00:30:45.8893052Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-24T00:30:45.8897328Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-24T00:30:45.8906575Z --- PASS: TestAccConfigDSOrganization_noAccessShouldFail (1.87s)
```
### 2025-06-25
#### PASS a second
```
2025-06-25T00:31:06.5795427Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-25T00:31:06.5799343Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-25T00:31:06.5809030Z --- PASS: TestAccConfigDSOrganization_noAccessShouldFail (1.46s)
```
### 2025-06-26
#### PASS a second
```
2025-06-26T00:31:01.9537770Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-26T00:31:01.9541144Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-26T00:31:01.9549637Z --- PASS: TestAccConfigDSOrganization_noAccessShouldFail (1.78s)
```