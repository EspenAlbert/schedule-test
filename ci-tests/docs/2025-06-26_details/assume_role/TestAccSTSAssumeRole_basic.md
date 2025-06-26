# assume_role/TestAccSTSAssumeRole_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:28:35.0076944Z === RUN   TestAccSTSAssumeRole_basic
2025-06-20T00:28:35.0091783Z === CONT  TestAccSTSAssumeRole_basic
2025-06-20T00:28:41.7998469Z --- PASS: TestAccSTSAssumeRole_basic (6.79s)
```
### 2025-06-21
#### PASS 7 seconds
```
2025-06-21T00:28:26.4306043Z === RUN   TestAccSTSAssumeRole_basic
2025-06-21T00:28:26.4307684Z === CONT  TestAccSTSAssumeRole_basic
2025-06-21T00:28:34.1678992Z --- PASS: TestAccSTSAssumeRole_basic (7.74s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:31:37.7912978Z === RUN   TestAccSTSAssumeRole_basic
2025-06-22T00:31:37.7914166Z === CONT  TestAccSTSAssumeRole_basic
2025-06-22T00:32:12.1647613Z    test_name=TestAccSTSAssumeRole_basic test_working_directory=/tmp/plugintest2243663720
2025-06-22T00:32:12.1648914Z     provider_authentication_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:32:12.1649632Z         
2025-06-22T00:32:12.1650292Z         Error: error when getting project properties after create
2025-06-22T00:32:12.1650849Z         
2025-06-22T00:32:12.1651361Z           with mongodbatlas_project.test,
2025-06-22T00:32:12.1652417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:32:12.1653368Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:32:12.1653872Z         
2025-06-22T00:32:12.1654648Z         error getting project (68574eeaaf7a0954e84ad599): error getting project's
2025-06-22T00:32:12.1655369Z         limits (68574eeaaf7a0954e84ad599):
2025-06-22T00:32:12.1656448Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeaaf7a0954e84ad599/limits
2025-06-22T00:32:12.1657454Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:32:12.1658148Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:32:12.1658607Z         BadRequestDetail: 
2025-06-22T00:32:12.2104642Z --- FAIL: TestAccSTSAssumeRole_basic (34.42s)
```
### 2025-06-23
#### PASS 6 seconds
```
2025-06-23T00:30:55.0860827Z === RUN   TestAccSTSAssumeRole_basic
2025-06-23T00:30:55.0866441Z === CONT  TestAccSTSAssumeRole_basic
2025-06-23T00:31:01.5133425Z --- PASS: TestAccSTSAssumeRole_basic (6.43s)
```
### 2025-06-24
#### PASS 9 seconds
```
2025-06-24T00:28:55.6560533Z === RUN   TestAccSTSAssumeRole_basic
2025-06-24T00:28:55.6561241Z === CONT  TestAccSTSAssumeRole_basic
2025-06-24T00:29:05.4541937Z --- PASS: TestAccSTSAssumeRole_basic (9.80s)
```
### 2025-06-25
#### PASS 10 seconds
```
2025-06-25T00:29:15.6627764Z === RUN   TestAccSTSAssumeRole_basic
2025-06-25T00:29:15.6628517Z === CONT  TestAccSTSAssumeRole_basic
2025-06-25T00:29:26.0964956Z --- PASS: TestAccSTSAssumeRole_basic (10.43s)
```
### 2025-06-26
#### PASS 12 seconds
```
2025-06-26T00:29:10.0024278Z === RUN   TestAccSTSAssumeRole_basic
2025-06-26T00:29:10.0026324Z === CONT  TestAccSTSAssumeRole_basic
2025-06-26T00:29:22.3686899Z --- PASS: TestAccSTSAssumeRole_basic (12.37s)
```