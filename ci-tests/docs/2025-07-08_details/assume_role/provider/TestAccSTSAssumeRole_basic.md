# assume_role/provider/TestAccSTSAssumeRole_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 6 seconds
```
2025-07-01T08:33:36.3165402Z === RUN   TestAccSTSAssumeRole_basic
2025-07-01T08:33:36.3167720Z === CONT  TestAccSTSAssumeRole_basic
2025-07-01T08:33:43.2191717Z --- PASS: TestAccSTSAssumeRole_basic (6.90s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:28:47.9064241Z === RUN   TestAccSTSAssumeRole_basic
2025-07-02T00:28:47.9072513Z === CONT  TestAccSTSAssumeRole_basic
2025-07-02T00:28:59.9152835Z --- PASS: TestAccSTSAssumeRole_basic (12.01s)
```
### 2025-07-03
#### PASS 11 seconds
```
2025-07-03T00:29:27.5070468Z === RUN   TestAccSTSAssumeRole_basic
2025-07-03T00:29:27.5071811Z === CONT  TestAccSTSAssumeRole_basic
2025-07-03T00:29:38.7999398Z --- PASS: TestAccSTSAssumeRole_basic (11.29s)
```
### 2025-07-04
#### PASS 11 seconds
```
2025-07-04T00:28:53.5079880Z === RUN   TestAccSTSAssumeRole_basic
2025-07-04T00:28:53.5081058Z === CONT  TestAccSTSAssumeRole_basic
2025-07-04T00:29:04.8854289Z --- PASS: TestAccSTSAssumeRole_basic (11.38s)
```
### 2025-07-05
#### PASS 6 seconds
```
2025-07-05T00:27:54.8074569Z === RUN   TestAccSTSAssumeRole_basic
2025-07-05T00:27:54.8075434Z === CONT  TestAccSTSAssumeRole_basic
2025-07-05T00:28:00.9670732Z --- PASS: TestAccSTSAssumeRole_basic (6.16s)
```
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:31:55.8285718Z === RUN   TestAccSTSAssumeRole_basic
2025-07-06T00:31:55.8289324Z === CONT  TestAccSTSAssumeRole_basic
2025-07-06T00:32:30.5783612Z   
2025-07-06T00:32:30.5784653Z     provider_authentication_test.go:18: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:32:30.5785377Z         
2025-07-06T00:32:30.5786025Z         Error: error when getting project properties after create
2025-07-06T00:32:30.5786514Z         
2025-07-06T00:32:30.5786902Z           with mongodbatlas_project.test,
2025-07-06T00:32:30.5787729Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:30.5788508Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:30.5788811Z         
2025-07-06T00:32:30.5789387Z         error getting project (6869c3fd690ae45e168bc9c8): error getting project's
2025-07-06T00:32:30.5789957Z         limits (6869c3fd690ae45e168bc9c8):
2025-07-06T00:32:30.5790552Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3fd690ae45e168bc9c8/limits
2025-07-06T00:32:30.5791701Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:30.5792347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:30.5792743Z         BadRequestDetail: 
2025-07-06T00:32:31.5029098Z --- FAIL: TestAccSTSAssumeRole_basic (35.67s)
```
### 2025-07-07
#### PASS 6 seconds
```
2025-07-07T00:31:27.6750860Z === RUN   TestAccSTSAssumeRole_basic
2025-07-07T00:31:27.6752030Z === CONT  TestAccSTSAssumeRole_basic
2025-07-07T00:31:34.0482919Z --- PASS: TestAccSTSAssumeRole_basic (6.37s)
```
### 2025-07-08
#### PASS 10 seconds
```
2025-07-08T00:29:17.0196249Z === RUN   TestAccSTSAssumeRole_basic
2025-07-08T00:29:17.0197942Z === CONT  TestAccSTSAssumeRole_basic
2025-07-08T00:29:27.2824949Z --- PASS: TestAccSTSAssumeRole_basic (10.26s)
```