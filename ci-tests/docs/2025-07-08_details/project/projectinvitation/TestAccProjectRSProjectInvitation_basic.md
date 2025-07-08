# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 7 seconds
```
2025-07-01T08:36:27.6838022Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-01T08:36:27.6838405Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.74s)
```
### 2025-07-02
#### PASS 8 seconds
```
2025-07-02T00:32:47.2557976Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-02T00:32:47.2558334Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.88s)
```
### 2025-07-03
#### PASS 9 seconds
```
2025-07-03T00:32:13.2732412Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-03T00:32:13.2732781Z --- PASS: TestAccProjectRSProjectInvitation_basic (9.87s)
```
### 2025-07-04
#### PASS 7 seconds
```
2025-07-04T00:31:54.7140699Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-04T00:31:54.7141067Z --- PASS: TestAccProjectRSProjectInvitation_basic (7.76s)
```
### 2025-07-05
#### PASS 6 seconds
```
2025-07-05T00:30:58.9993724Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-05T00:30:58.9994086Z --- PASS: TestAccProjectRSProjectInvitation_basic (6.86s)
```
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:37:51.5617983Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-06T00:37:51.5630196Z    test_working_directory=/tmp/plugintest3719597593 test_step_number=1
2025-07-06T00:37:51.5630873Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:37:51.5631333Z         
2025-07-06T00:37:51.5631698Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5632018Z         
2025-07-06T00:37:51.5632309Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5632879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5633545Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5633832Z         
2025-07-06T00:37:51.5634259Z         error getting project (6869c44d7267b5775b683ed6): error getting project's
2025-07-06T00:37:51.5634691Z         limits (6869c44d7267b5775b683ed6):
2025-07-06T00:37:51.5635235Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c44d7267b5775b683ed6/limits
2025-07-06T00:37:51.5635889Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5636445Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5636825Z         BadRequestDetail: 
2025-07-06T00:37:51.5637136Z --- FAIL: TestAccProjectRSProjectInvitation_basic (35.16s)
```
### 2025-07-07
#### PASS 6 seconds
```
2025-07-07T00:34:47.5700437Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-07T00:34:47.5700799Z --- PASS: TestAccProjectRSProjectInvitation_basic (6.55s)
```
### 2025-07-08
#### PASS 8 seconds
```
2025-07-08T00:32:04.0845529Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-07-08T00:32:04.0845887Z --- PASS: TestAccProjectRSProjectInvitation_basic (8.51s)
```