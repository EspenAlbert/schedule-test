# project/project/TestMigProject_withLimits Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.05s
2025-06-05 00:29 | dev | 4.10s
2025-07-06 00:37 | qa | 44.09s

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
#### PASS 22 seconds
### 2025-04-12
#### PASS 21 seconds
### 2025-04-13
#### PASS 11 seconds
### 2025-04-14
#### PASS 20 seconds
### 2025-04-15
#### PASS 11 seconds
### 2025-04-16
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-04-17
#### PASS 12 seconds
### 2025-04-18
#### PASS 25 seconds
### 2025-04-19
#### PASS 20 seconds
### 2025-04-20
#### PASS 11 seconds
### 2025-04-21
#### PASS 16 seconds
### 2025-04-22
#### PASS 11 seconds
### 2025-04-23
#### PASS 19 seconds
### 2025-04-24
#### PASS 12 seconds
### 2025-04-25
#### PASS 11 seconds
### 2025-04-26
#### PASS 42 seconds
### 2025-04-27
#### PASS 22 seconds
### 2025-04-28
#### PASS 12 seconds
### 2025-04-29
#### PASS 10 seconds
### 2025-04-30
#### PASS 24 seconds
#### PASS 23 seconds
### 2025-05-01
#### PASS 11 seconds
#### PASS 15 seconds
#### PASS 11 seconds
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 21 seconds
#### PASS 14 seconds
### 2025-05-02
#### PASS 18 seconds
### 2025-05-03
#### PASS 11 seconds
### 2025-05-04
#### PASS 13 seconds
### 2025-05-05
#### PASS 14 seconds
### 2025-05-06
#### PASS 12 seconds
### 2025-05-07
#### PASS 21 seconds
### 2025-05-08
#### PASS 11 seconds
### 2025-05-09
#### PASS 22 seconds
### 2025-05-10
#### PASS 13 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3758357Z === RUN   TestMigProject_withLimits
2025-05-11T00:30:20.3764150Z    test_name=TestMigProject_withLimits test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform test_working_directory=/tmp/plugintest390128821 test_step_number=1
2025-05-11T00:30:20.3765214Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3765777Z         
2025-05-11T00:30:20.3766224Z         Error: error creating project: test-acc-tf-p-750362674796101617
2025-05-11T00:30:20.3766587Z         
2025-05-11T00:30:20.3766915Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3767536Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3768107Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3768421Z         
2025-05-11T00:30:20.3768906Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3769318Z         type
2025-05-11T00:30:20.3769569Z --- FAIL: TestMigProject_withLimits (1.51s)
```
### 2025-05-12
#### PASS 24 seconds
### 2025-05-13
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-14
#### PASS 20 seconds
### 2025-05-15
#### PASS 13 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 15 seconds
### 2025-05-18
#### PASS 10 seconds
### 2025-05-19
#### PASS 11 seconds
### 2025-05-20
#### PASS 11 seconds
### 2025-05-21
#### PASS 12 seconds
### 2025-05-22
#### PASS 14 seconds
### 2025-05-23
#### PASS 11 seconds
### 2025-05-24
#### PASS 17 seconds
### 2025-05-25
#### PASS 12 seconds
### 2025-05-26
#### PASS 14 seconds
### 2025-05-27
#### PASS 12 seconds
#### PASS 14 seconds
### 2025-05-28
#### PASS 13 seconds
#### PASS 17 seconds
### 2025-05-29
#### PASS 21 seconds
### 2025-05-30
#### PASS 20 seconds
### 2025-05-31
#### PASS 13 seconds
### 2025-06-01
#### PASS 17 seconds
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 15 seconds
#### PASS 13 seconds
#### PASS 13 seconds
### 2025-06-02
#### PASS 13 seconds
#### PASS 22 seconds
#### PASS 17 seconds
### 2025-06-03
#### PASS 13 seconds
### 2025-06-04
#### PASS 21 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4914985Z === RUN   TestMigProject_withLimits
2025-06-05T00:29:34.4921659Z   
2025-06-05T00:29:34.4922135Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4922569Z         
2025-06-05T00:29:34.4922993Z         Error: error creating project: test-acc-tf-p-6862417819228999374
2025-06-05T00:29:34.4923347Z         
2025-06-05T00:29:34.4923654Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4924245Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4924800Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4925095Z         
2025-06-05T00:29:34.4925562Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4926189Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4926767Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4927155Z --- FAIL: TestMigProject_withLimits (4.99s)
```
### 2025-06-06
#### PASS 21 seconds
### 2025-06-07
#### PASS 12 seconds
### 2025-06-08
#### PASS 20 seconds
### 2025-06-09
#### PASS 22 seconds
### 2025-06-10
#### PASS 24 seconds
### 2025-06-11
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 20 seconds
### 2025-06-13
#### PASS 22 seconds
### 2025-06-14
#### PASS 15 seconds
### 2025-06-15
#### PASS 20 seconds
### 2025-06-16
#### PASS 15 seconds
### 2025-06-17
#### PASS 12 seconds
### 2025-06-18
#### PASS 11 seconds
### 2025-06-19
#### PASS 13 seconds
### 2025-06-20
#### PASS 13 seconds
### 2025-06-21
#### PASS 22 seconds
### 2025-06-22
#### PASS 34 seconds
### 2025-06-23
#### PASS 11 seconds
### 2025-06-24
#### PASS 22 seconds
### 2025-06-25
#### PASS 22 seconds
### 2025-06-26
#### PASS 21 seconds
### 2025-06-27
#### PASS 17 seconds
### 2025-06-28
#### PASS 12 seconds
### 2025-06-29
#### PASS 21 seconds
### 2025-06-30
#### PASS 23 seconds
### 2025-07-01
#### PASS 17 seconds
#### PASS 18 seconds
#### PASS 24 seconds
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-07-02
#### PASS 17 seconds
### 2025-07-03
#### PASS 12 seconds
### 2025-07-04
#### PASS 11 seconds
### 2025-07-05
#### PASS 11 seconds
### 2025-07-06
#### FAIL 44 seconds
```
2025-07-06T00:37:51.5500425Z === RUN   TestMigProject_withLimits
2025-07-06T00:37:51.5507766Z   
2025-07-06T00:37:51.5508205Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5508605Z         
2025-07-06T00:37:51.5508910Z         Error: error when getting project properties
2025-07-06T00:37:51.5509191Z         
2025-07-06T00:37:51.5509490Z           with data.mongodbatlas_project.test,
2025-07-06T00:37:51.5510051Z           on terraform_plugin_test.tf line 31, in data "mongodbatlas_project" "test":
2025-07-06T00:37:51.5510548Z           31: 		data "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5510815Z         
2025-07-06T00:37:51.5511236Z         error getting project (6869c476690ae45e168be8ed): error getting project's
2025-07-06T00:37:51.5511675Z         limits (6869c476690ae45e168be8ed):
2025-07-06T00:37:51.5512233Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c476690ae45e168be8ed/limits
2025-07-06T00:37:51.5512956Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5513667Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5514041Z         BadRequestDetail: 
2025-07-06T00:37:51.5514300Z --- FAIL: TestMigProject_withLimits (44.91s)
```
### 2025-07-07
#### PASS 11 seconds
### 2025-07-08
#### PASS 12 seconds
### 2025-07-09
#### PASS 12 seconds