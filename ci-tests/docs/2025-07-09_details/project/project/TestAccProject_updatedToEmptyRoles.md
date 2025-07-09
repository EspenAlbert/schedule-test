# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.08s
2025-06-05 00:29 | dev | 3.05s

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
#### PASS 14 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 13 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-04-17
#### PASS 9 seconds
### 2025-04-18
#### PASS 15 seconds
### 2025-04-19
#### PASS 15 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 11 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 11 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 38 seconds
### 2025-04-27
#### PASS 15 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 8 seconds
### 2025-04-30
#### PASS 14 seconds
#### PASS 13 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 9 seconds
### 2025-05-02
#### PASS 14 seconds
### 2025-05-03
#### PASS 8 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 10 seconds
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 13 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 15 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3774326Z === RUN   TestAccProject_updatedToEmptyRoles
2025-05-11T00:30:20.3780349Z === CONT  TestAccProject_updatedToEmptyRoles
2025-05-11T00:30:20.3918308Z === NAME  TestAccProject_updatedToEmptyRoles
2025-05-11T00:30:20.3918845Z     resource_project_test.go:768: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3919241Z         
2025-05-11T00:30:20.3919676Z         Error: error creating project: test-acc-tf-p-3606316543547413622
2025-05-11T00:30:20.3920041Z         
2025-05-11T00:30:20.3920360Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3920977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3921547Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3921851Z         
2025-05-11T00:30:20.3922541Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3922948Z         type
2025-05-11T00:30:20.3931507Z    test_name=TestAccProject_withUpdatedLimits test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform test_working_directory=/tmp/plugintest2470385285 test_step_number=1
2025-05-11T00:30:20.3940021Z --- FAIL: TestAccProject_updatedToEmptyRoles (1.81s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 13 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 8 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 11 seconds
### 2025-05-25
#### PASS 10 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-28
#### PASS 11 seconds
#### PASS 11 seconds
### 2025-05-29
#### PASS 13 seconds
### 2025-05-30
#### PASS 12 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 14 seconds
#### PASS 10 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:29:34.4931698Z === RUN   TestAccProject_updatedToEmptyRoles
2025-06-05T00:29:34.4940004Z === CONT  TestAccProject_updatedToEmptyRoles
2025-06-05T00:29:34.5018601Z === NAME  TestAccProject_updatedToEmptyRoles
2025-06-05T00:29:34.5019118Z     resource_project_test.go:768: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5019518Z         
2025-06-05T00:29:34.5019920Z         Error: error creating project: test-acc-tf-p-220156646672141237
2025-06-05T00:29:34.5020276Z         
2025-06-05T00:29:34.5020575Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5021175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5021816Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5022123Z         
2025-06-05T00:29:34.5022590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5023216Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5023796Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5028326Z --- FAIL: TestAccProject_updatedToEmptyRoles (3.53s)
```
### 2025-06-06
#### PASS 12 seconds
### 2025-06-07
#### PASS 9 seconds
### 2025-06-08
#### PASS 13 seconds
### 2025-06-09
#### PASS 15 seconds
### 2025-06-10
#### PASS 14 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-12
#### PASS 14 seconds
### 2025-06-13
#### PASS 15 seconds
### 2025-06-14
#### PASS 8 seconds
### 2025-06-15
#### PASS 13 seconds
### 2025-06-16
#### PASS 10 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 9 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 10 seconds
### 2025-06-21
#### PASS 15 seconds
### 2025-06-22
#### PASS 8 seconds
### 2025-06-23
#### PASS 9 seconds
### 2025-06-24
#### PASS 14 seconds
### 2025-06-25
#### PASS 16 seconds
### 2025-06-26
#### PASS 13 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 9 seconds
### 2025-06-29
#### PASS 31 seconds
### 2025-06-30
#### PASS 15 seconds
### 2025-07-01
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 9 seconds
### 2025-07-06
#### PASS 10 seconds
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 10 seconds