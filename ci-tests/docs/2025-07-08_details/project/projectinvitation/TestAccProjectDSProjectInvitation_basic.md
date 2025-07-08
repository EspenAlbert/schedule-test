# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 7 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 4 seconds
### 2025-07-06
#### FAIL 32 seconds
```
2025-07-06T00:37:51.5583866Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-07-06T00:37:51.5596096Z   
2025-07-06T00:37:51.5596568Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:37:51.5597002Z         
2025-07-06T00:37:51.5597376Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5597695Z         
2025-07-06T00:37:51.5597983Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5598564Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5599108Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5599395Z         
2025-07-06T00:37:51.5599823Z         error getting project (6869c40a7267b5775b683200): error getting project's
2025-07-06T00:37:51.5600259Z         limits (6869c40a7267b5775b683200):
2025-07-06T00:37:51.5600819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a7267b5775b683200/limits
2025-07-06T00:37:51.5601466Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5602024Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5602540Z         BadRequestDetail: 
2025-07-06T00:37:51.5602858Z --- FAIL: TestAccProjectDSProjectInvitation_basic (32.29s)
```
### 2025-07-07
#### PASS 6 seconds
### 2025-07-08
#### PASS 5 seconds