# autogen/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 36 minutes
```
2025-07-01T09:13:01.1329234Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-01T09:13:01.1330033Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-01T09:13:01.1330445Z --- PASS: TestAccSearchDeploymentAPI_basic (2202.53s)
```
### 2025-07-02
#### PASS 33 minutes
```
2025-07-02T01:04:00.0217362Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-02T01:04:00.0218527Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-02T01:04:00.0219103Z --- PASS: TestAccSearchDeploymentAPI_basic (2026.42s)
```
### 2025-07-03
#### PASS 32 minutes
```
2025-07-03T01:03:38.3839598Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-03T01:03:38.3840960Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-03T01:03:38.3841526Z --- PASS: TestAccSearchDeploymentAPI_basic (1955.92s)
```
### 2025-07-04
#### PASS 36 minutes
```
2025-07-04T01:07:38.6975922Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-04T01:07:38.6977209Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-04T01:07:38.6977844Z --- PASS: TestAccSearchDeploymentAPI_basic (2166.85s)
```
### 2025-07-05
#### PASS 32 minutes
```
2025-07-05T01:02:08.7027791Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-05T01:02:08.7030487Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-05T01:02:08.7030974Z --- PASS: TestAccSearchDeploymentAPI_basic (1949.81s)
```
### 2025-07-06
#### FAIL 34 minutes
```
2025-07-06T01:08:11.8989975Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-06T01:08:11.8991433Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-06T01:08:11.9007018Z   
2025-07-06T01:08:11.9007475Z     resource_test.go:25: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:08:11.9008028Z         
2025-07-06T01:08:11.9008412Z         Error: error when getting project properties after create
2025-07-06T01:08:11.9008741Z         
2025-07-06T01:08:11.9009024Z           with mongodbatlas_project.test,
2025-07-06T01:08:11.9009596Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T01:08:11.9010292Z           13: 	resource "mongodbatlas_project" "test" {
2025-07-06T01:08:11.9010586Z         
2025-07-06T01:08:11.9011009Z         error getting project (6869c4767267b5775b68458e): error getting project's
2025-07-06T01:08:11.9011437Z         limits (6869c4767267b5775b68458e):
2025-07-06T01:08:11.9011984Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4767267b5775b68458e/limits
2025-07-06T01:08:11.9012618Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:08:11.9013184Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:08:11.9013556Z         BadRequestDetail: 
2025-07-06T01:08:11.9013848Z --- FAIL: TestAccSearchDeploymentAPI_basic (2054.16s)
```
### 2025-07-07
#### PASS 31 minutes
```
2025-07-07T01:05:28.2706306Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-07T01:05:28.2709836Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-07T01:05:28.2710510Z --- PASS: TestAccSearchDeploymentAPI_basic (1886.04s)
```
### 2025-07-08
#### PASS 33 minutes
```
2025-07-08T01:05:41.3769724Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-08T01:05:41.3773030Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-08T01:05:41.3773693Z --- PASS: TestAccSearchDeploymentAPI_basic (2027.96s)
```