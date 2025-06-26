# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 7 seconds
```
2025-06-20T00:32:00.0224988Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-20T00:32:00.0225379Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.74s)
```
### 2025-06-21
#### PASS 8 seconds
```
2025-06-21T00:34:00.9778752Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-21T00:34:00.9779241Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.57s)
```
### 2025-06-22
#### FAIL 32 seconds
```
2025-06-22T00:36:57.9025242Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-22T00:36:57.9037979Z   
2025-06-22T00:36:57.9038473Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:36:57.9038898Z         
2025-06-22T00:36:57.9039267Z         Error: error when getting project properties after create
2025-06-22T00:36:57.9039588Z         
2025-06-22T00:36:57.9039871Z           with mongodbatlas_project.test,
2025-06-22T00:36:57.9040443Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-22T00:36:57.9041220Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:36:57.9041507Z         
2025-06-22T00:36:57.9041934Z         error getting project (68574efcab82446d9bfb0e33): error getting project's
2025-06-22T00:36:57.9042378Z         limits (68574efcab82446d9bfb0e33):
2025-06-22T00:36:57.9042934Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efcab82446d9bfb0e33/limits
2025-06-22T00:36:57.9043592Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:36:57.9044176Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:36:57.9044563Z         BadRequestDetail: 
2025-06-22T00:36:57.9044874Z --- FAIL: TestAccProjectDSProjectInvitation_basic (32.82s)
```
### 2025-06-23
#### PASS 7 seconds
```
2025-06-23T00:33:38.2274248Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-23T00:33:38.2274628Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.44s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:34:16.6823356Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-24T00:34:16.6823743Z --- PASS: TestAccProjectDSProjectInvitation_basic (8.07s)
```
### 2025-06-25
#### PASS 10 seconds
```
2025-06-25T00:34:38.2675756Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-25T00:34:38.2676147Z --- PASS: TestAccProjectDSProjectInvitation_basic (10.00s)
```
### 2025-06-26
#### PASS 7 seconds
```
2025-06-26T00:33:55.8057348Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-26T00:33:55.8057739Z --- PASS: TestAccProjectDSProjectInvitation_basic (7.91s)
```