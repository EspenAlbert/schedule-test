# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) FAIL(x 5)
Success rate: 95.61%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.05s
2025-06-05 00:29 | dev | 1.06s
2025-06-22 00:36 | qa | 32.08s
2025-06-29 00:43 | qa | 46.03s
2025-07-06 00:37 | qa | 32.03s

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
#### PASS 8 seconds
### 2025-04-12
#### PASS 12 seconds
### 2025-04-13
#### PASS 4 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 4 seconds
### 2025-04-16
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-04-17
#### PASS 5 seconds
### 2025-04-18
#### PASS 9 seconds
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### PASS 5 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 5 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 4 seconds
### 2025-04-25
#### PASS 4 seconds
### 2025-04-26
#### PASS 6 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 6 seconds
### 2025-04-29
#### PASS 5 seconds
### 2025-04-30
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-05-02
#### PASS 6 seconds
### 2025-05-03
#### PASS 4 seconds
### 2025-05-04
#### PASS 6 seconds
### 2025-05-05
#### PASS 6 seconds
### 2025-05-06
#### PASS 5 seconds
### 2025-05-07
#### PASS 7 seconds
### 2025-05-08
#### PASS 5 seconds
### 2025-05-09
#### PASS 9 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:20.3942658Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-05-11T00:30:20.3959924Z   
2025-05-11T00:30:20.3960635Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:30:20.3961106Z         
2025-05-11T00:30:20.3961559Z         Error: error creating project: test-acc-tf-p-3912695051396659355
2025-05-11T00:30:20.3961947Z         
2025-05-11T00:30:20.3962468Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3963119Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3963695Z           13: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3964001Z         
2025-05-11T00:30:20.3964501Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3965063Z         type
2025-05-11T00:30:20.3965371Z --- FAIL: TestAccProjectDSProjectInvitation_basic (0.50s)
```
### 2025-05-12
#### PASS 9 seconds
### 2025-05-13
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 5 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 4 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 6 seconds
### 2025-05-21
#### PASS 5 seconds
### 2025-05-22
#### PASS 6 seconds
### 2025-05-23
#### PASS 6 seconds
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 4 seconds
### 2025-05-26
#### PASS 8 seconds
### 2025-05-27
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-05-28
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-29
#### PASS 8 seconds
### 2025-05-30
#### PASS 6 seconds
### 2025-05-31
#### PASS 5 seconds
### 2025-06-01
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 5 seconds
### 2025-06-02
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 5 seconds
### 2025-06-03
#### PASS 7 seconds
### 2025-06-04
#### PASS 7 seconds
### 2025-06-05
#### FAIL a second
```
2025-06-05T00:29:34.5127452Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-05T00:29:34.5137583Z    test_name=TestAccProjectDSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform
2025-06-05T00:29:34.5138483Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:29:34.5138926Z         
2025-06-05T00:29:34.5139340Z         Error: error creating project: test-acc-tf-p-142538393042915488
2025-06-05T00:29:34.5139706Z         
2025-06-05T00:29:34.5140014Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5140617Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5141372Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5141697Z         
2025-06-05T00:29:34.5142166Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5142803Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5143375Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5143816Z --- FAIL: TestAccProjectDSProjectInvitation_basic (1.62s)
```
### 2025-06-06
#### PASS 7 seconds
### 2025-06-07
#### PASS 6 seconds
### 2025-06-08
#### PASS 9 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 8 seconds
### 2025-06-11
#### PASS 6 seconds
#### PASS 4 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 8 seconds
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 8 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 6 seconds
### 2025-06-18
#### PASS 6 seconds
### 2025-06-19
#### PASS 5 seconds
### 2025-06-20
#### PASS 7 seconds
### 2025-06-21
#### PASS 8 seconds
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
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 10 seconds
### 2025-06-26
#### PASS 7 seconds
### 2025-06-27
#### PASS 8 seconds
### 2025-06-28
#### PASS 5 seconds
### 2025-06-29
#### FAIL 46 seconds
```
2025-06-29T00:43:46.9624946Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-06-29T00:43:46.9637092Z    test_name=TestAccProjectDSProjectInvitation_basic
2025-06-29T00:43:46.9637917Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:43:46.9638389Z         
2025-06-29T00:43:46.9638761Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9639080Z         
2025-06-29T00:43:46.9639372Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9640131Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9640671Z           13: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9640958Z         
2025-06-29T00:43:46.9641397Z         error getting project (6860899b56291349dce6d704): error getting project's
2025-06-29T00:43:46.9641851Z         limits (6860899b56291349dce6d704):
2025-06-29T00:43:46.9642409Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899b56291349dce6d704/limits
2025-06-29T00:43:46.9643062Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9643630Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9644008Z         BadRequestDetail: 
2025-06-29T00:43:46.9644328Z --- FAIL: TestAccProjectDSProjectInvitation_basic (46.35s)
```
### 2025-06-30
#### PASS 9 seconds
### 2025-07-01
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 4 seconds
#### PASS 5 seconds
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
### 2025-07-09
#### PASS 6 seconds