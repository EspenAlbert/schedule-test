# project/project/TestMigProject_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 4)
Success rate: 96.49%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.06s
2025-06-05 00:29 | dev | 4.01s
2025-06-22 00:36 | qa | 34.06s
2025-07-06 00:37 | qa | 37.01s

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
#### PASS 15 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 12 seconds
### 2025-04-15
#### PASS 10 seconds
### 2025-04-16
#### PASS 10 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 10 seconds
### 2025-04-18
#### PASS 15 seconds
### 2025-04-19
#### PASS 14 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 12 seconds
### 2025-04-22
#### PASS 8 seconds
### 2025-04-23
#### PASS 12 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 26 seconds
### 2025-04-27
#### PASS 14 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 8 seconds
### 2025-04-30
#### PASS 14 seconds
#### PASS 14 seconds
### 2025-05-01
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 13 seconds
#### PASS 13 seconds
### 2025-05-02
#### PASS 14 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 8 seconds
### 2025-05-05
#### PASS 9 seconds
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 14 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 14 seconds
### 2025-05-10
#### PASS 10 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3715096Z === RUN   TestMigProject_basic
2025-05-11T00:30:20.3723330Z   
2025-05-11T00:30:20.3724205Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3724771Z         
2025-05-11T00:30:20.3725323Z         Error: error creating project: test-acc-tf-p-4328946283051088808
2025-05-11T00:30:20.3725858Z         
2025-05-11T00:30:20.3726292Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3727229Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3727926Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3728369Z         
2025-05-11T00:30:20.3728999Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3729456Z         type
2025-05-11T00:30:20.3729778Z --- FAIL: TestMigProject_basic (1.59s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 10 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 12 seconds
### 2025-05-15
#### PASS 11 seconds
### 2025-05-16
#### PASS 9 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 9 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 9 seconds
### 2025-05-23
#### PASS 7 seconds
### 2025-05-24
#### PASS 12 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-28
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS 15 seconds
### 2025-05-30
#### PASS 13 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 11 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 13 seconds
#### PASS 12 seconds
### 2025-06-03
#### PASS 9 seconds
### 2025-06-04
#### PASS 15 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4839009Z === RUN   TestMigProject_basic
2025-06-05T00:29:34.4876934Z   
2025-06-05T00:29:34.4877826Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4878626Z         
2025-06-05T00:29:34.4879389Z         Error: error creating project: test-acc-tf-p-4279980969882869412
2025-06-05T00:29:34.4880042Z         
2025-06-05T00:29:34.4880602Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4882285Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4883334Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4883876Z         
2025-06-05T00:29:34.4884738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4885902Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4886977Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4887950Z --- FAIL: TestMigProject_basic (4.14s)
```
### 2025-06-06
#### PASS 14 seconds
### 2025-06-07
#### PASS 10 seconds
### 2025-06-08
#### PASS 12 seconds
### 2025-06-09
#### PASS 13 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-12
#### PASS 12 seconds
### 2025-06-13
#### PASS 14 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### PASS 12 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 9 seconds
### 2025-06-18
#### PASS 8 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 14 seconds
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:36:57.8952638Z === RUN   TestMigProject_basic
2025-06-22T00:36:57.8960883Z   
2025-06-22T00:36:57.8961455Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:36:57.8961871Z         
2025-06-22T00:36:57.8962251Z         Error: error when getting project properties after create
2025-06-22T00:36:57.8962573Z         
2025-06-22T00:36:57.8962858Z           with mongodbatlas_project.test,
2025-06-22T00:36:57.8963429Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-22T00:36:57.8963962Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:36:57.8964241Z         
2025-06-22T00:36:57.8964936Z         error getting project (68574efdab82446d9bfb0f99): error getting project's
2025-06-22T00:36:57.8965525Z         limits (68574efdab82446d9bfb0f99):
2025-06-22T00:36:57.8966091Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efdab82446d9bfb0f99/limits
2025-06-22T00:36:57.8966942Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:36:57.8967509Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:36:57.8967903Z         BadRequestDetail: 
2025-06-22T00:36:57.8968175Z --- FAIL: TestMigProject_basic (34.63s)
```
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 14 seconds
### 2025-06-25
#### PASS 13 seconds
### 2025-06-26
#### PASS 13 seconds
### 2025-06-27
#### PASS 9 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 20 seconds
### 2025-06-30
#### PASS 16 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 13 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 8 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### FAIL 37 seconds
```
2025-07-06T00:37:51.5447766Z === RUN   TestMigProject_basic
2025-07-06T00:37:51.5462606Z   
2025-07-06T00:37:51.5463294Z     resource_project_migration_test.go:24: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:37:51.5464211Z         
2025-07-06T00:37:51.5464593Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5464912Z         
2025-07-06T00:37:51.5465194Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5465800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5466333Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5466613Z         
2025-07-06T00:37:51.5467041Z         error getting project (6869c40c690ae45e168bd5f6): error getting project's
2025-07-06T00:37:51.5467482Z         limits (6869c40c690ae45e168bd5f6):
2025-07-06T00:37:51.5468035Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40c690ae45e168bd5f6/limits
2025-07-06T00:37:51.5468684Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5469244Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5469617Z         BadRequestDetail: 
2025-07-06T00:37:51.5469873Z --- FAIL: TestMigProject_basic (37.08s)
```
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 9 seconds