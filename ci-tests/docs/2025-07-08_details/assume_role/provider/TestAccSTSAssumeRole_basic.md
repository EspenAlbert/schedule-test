# assume_role/provider/TestAccSTSAssumeRole_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 11 seconds
### 2025-07-04
#### PASS 11 seconds
### 2025-07-05
#### PASS 6 seconds
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
### 2025-07-08
#### PASS 10 seconds