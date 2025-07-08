# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:45:58.4598787Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-01T08:45:58.4601456Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-01T08:45:58.4602300Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (99.29s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:41:12.3592381Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-02T00:41:12.3596557Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-02T00:41:12.3597952Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (97.80s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:41:46.0959152Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-03T00:41:46.0961671Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-03T00:41:46.0962518Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (99.52s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:41:12.9193886Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-04T00:41:12.9196239Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-04T00:41:12.9197080Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (98.27s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:40:18.8608134Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-05T00:40:18.8610594Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-05T00:40:18.8611430Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (100.44s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:44:46.6398062Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400501Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6430210Z   
2025-07-06T00:44:46.6430837Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6431378Z         
2025-07-06T00:44:46.6431787Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6432136Z         
2025-07-06T00:44:46.6432477Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6433116Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6433704Z           12: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6434026Z         
2025-07-06T00:44:46.6434844Z         error getting project (6869c4047267b5775b682c01): error getting project's
2025-07-06T00:44:46.6435327Z         limits (6869c4047267b5775b682c01):
2025-07-06T00:44:46.6435921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4047267b5775b682c01/limits
2025-07-06T00:44:46.6436608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6437208Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6437621Z         BadRequestDetail: 
2025-07-06T00:44:46.6445763Z   
2025-07-06T00:44:46.6453678Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (99.31s)
```
### 2025-07-07
#### PASS a minute
```
2025-07-07T00:43:51.4409441Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-07T00:43:51.4414909Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-07T00:43:51.4416422Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (97.71s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:41:50.6689462Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-08T00:41:50.6691971Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-08T00:41:50.6692810Z --- PASS: TestAccPrivateEndpointRegionalMode_basic (103.09s)
```