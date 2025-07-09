# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.03s
2025-06-05 00:29 | dev | 2.01s
2025-07-06 00:37 | qa | 35.02s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 14 seconds
### 2025-04-12
#### PASS 11 seconds
### 2025-04-13
#### PASS 6 seconds
### 2025-04-14
#### PASS 10 seconds
### 2025-04-15
#### PASS 6 seconds
### 2025-04-16
#### PASS 6 seconds
#### PASS 7 seconds
### 2025-04-17
#### PASS 6 seconds
### 2025-04-18
#### PASS 13 seconds
### 2025-04-19
#### PASS 12 seconds
### 2025-04-20
#### PASS 6 seconds
### 2025-04-21
#### PASS 11 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 11 seconds
### 2025-04-24
#### PASS 8 seconds
### 2025-04-25
#### PASS 7 seconds
### 2025-04-26
#### PASS 10 seconds
### 2025-04-27
#### PASS 11 seconds
### 2025-04-28
#### PASS 6 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 12 seconds
#### PASS 13 seconds
### 2025-05-01
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 11 seconds
#### PASS 7 seconds
### 2025-05-02
#### PASS 8 seconds
### 2025-05-03
#### PASS 8 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 8 seconds
### 2025-05-06
#### PASS 6 seconds
### 2025-05-07
#### PASS 11 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 12 seconds
### 2025-05-10
#### PASS 8 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:20.3979432Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-05-11T00:30:20.3990044Z   
2025-05-11T00:30:20.3990628Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:20.3991155Z         
2025-05-11T00:30:20.3991594Z         Error: error creating project: test-acc-tf-p-1926916929699410510
2025-05-11T00:30:20.3992152Z         
2025-05-11T00:30:20.3992473Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3993201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3993861Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3994164Z         
2025-05-11T00:30:20.3994761Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3995262Z         type
2025-05-11T00:30:20.3995567Z --- FAIL: TestAccProjectRSProjectInvitation_basic (0.34s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 12 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 5 seconds
### 2025-05-19
#### PASS 6 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 7 seconds
### 2025-05-23
#### PASS 6 seconds
### 2025-05-24
#### PASS 11 seconds
### 2025-05-25
#### PASS 7 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 7 seconds
#### PASS 10 seconds
### 2025-05-28
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 13 seconds
### 2025-05-30
#### PASS 11 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 7 seconds
#### PASS 12 seconds
#### PASS 8 seconds
### 2025-06-03
#### PASS 8 seconds
### 2025-06-04
#### PASS 13 seconds
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:29:34.5156736Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-06-05T00:29:34.5166852Z    test_working_directory=/tmp/plugintest1329368221 test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform
2025-06-05T00:29:34.5167895Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:29:34.5168441Z         
2025-06-05T00:29:34.5168851Z         Error: error creating project: test-acc-tf-p-7144486436131174998
2025-06-05T00:29:34.5169212Z         
2025-06-05T00:29:34.5169514Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5170118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5170663Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5170964Z         
2025-06-05T00:29:34.5171528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5172179Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5172752Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5173197Z --- FAIL: TestAccProjectRSProjectInvitation_basic (2.06s)
```
### 2025-06-06
#### PASS 12 seconds
### 2025-06-07
#### PASS 6 seconds
### 2025-06-08
#### PASS 11 seconds
### 2025-06-09
#### PASS 13 seconds
### 2025-06-10
#### PASS 13 seconds
### 2025-06-11
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-06-12
#### PASS 13 seconds
### 2025-06-13
#### PASS 12 seconds
### 2025-06-14
#### PASS 8 seconds
### 2025-06-15
#### PASS 10 seconds
### 2025-06-16
#### PASS 8 seconds
### 2025-06-17
#### PASS 6 seconds
### 2025-06-18
#### PASS 7 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 13 seconds
### 2025-06-22
#### PASS 7 seconds
### 2025-06-23
#### PASS 9 seconds
### 2025-06-24
#### PASS 12 seconds
### 2025-06-25
#### PASS 12 seconds
### 2025-06-26
#### PASS 12 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 35 seconds
### 2025-06-30
#### PASS 12 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 16 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-07-02
#### PASS 8 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 7 seconds
### 2025-07-05
#### PASS 6 seconds
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
### 2025-07-08
#### PASS 8 seconds
### 2025-07-09
#### PASS 7 seconds