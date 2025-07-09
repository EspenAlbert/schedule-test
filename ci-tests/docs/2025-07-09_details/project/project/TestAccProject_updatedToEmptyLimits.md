# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.08s
2025-06-05 00:29 | dev | 3.06s

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
#### PASS 19 seconds
### 2025-04-13
#### PASS 10 seconds
### 2025-04-14
#### PASS 18 seconds
### 2025-04-15
#### PASS 10 seconds
### 2025-04-16
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-04-17
#### PASS 11 seconds
### 2025-04-18
#### PASS 22 seconds
### 2025-04-19
#### PASS 20 seconds
### 2025-04-20
#### PASS 11 seconds
### 2025-04-21
#### PASS 20 seconds
### 2025-04-22
#### PASS 11 seconds
### 2025-04-23
#### PASS 18 seconds
### 2025-04-24
#### PASS 12 seconds
### 2025-04-25
#### PASS 12 seconds
### 2025-04-26
#### PASS 44 seconds
### 2025-04-27
#### PASS 21 seconds
### 2025-04-28
#### PASS 11 seconds
### 2025-04-29
#### PASS 11 seconds
### 2025-04-30
#### PASS 22 seconds
#### PASS 22 seconds
### 2025-05-01
#### PASS 12 seconds
#### PASS 16 seconds
#### PASS 13 seconds
#### PASS 13 seconds
#### PASS 14 seconds
#### PASS 24 seconds
#### PASS 12 seconds
### 2025-05-02
#### PASS 15 seconds
### 2025-05-03
#### PASS 12 seconds
### 2025-05-04
#### PASS 13 seconds
### 2025-05-05
#### PASS 14 seconds
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 18 seconds
### 2025-05-08
#### PASS 13 seconds
### 2025-05-09
#### PASS 20 seconds
### 2025-05-10
#### PASS 15 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3775628Z === RUN   TestAccProject_updatedToEmptyLimits
2025-05-11T00:30:20.3782389Z === CONT  TestAccProject_updatedToEmptyLimits
2025-05-11T00:30:20.3838318Z === NAME  TestAccProject_updatedToEmptyLimits
2025-05-11T00:30:20.3838861Z     resource_project_test.go:910: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3839255Z         
2025-05-11T00:30:20.3839687Z         Error: error creating project: test-acc-tf-p-2440045627215108706
2025-05-11T00:30:20.3840042Z         
2025-05-11T00:30:20.3840359Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3840983Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3841544Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3841846Z         
2025-05-11T00:30:20.3842545Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3842959Z         type
2025-05-11T00:30:20.3854326Z    test_name=TestAccProject_withUpdatedSettings test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform test_working_directory=/tmp/plugintest3133618613 test_step_number=1
2025-05-11T00:30:20.3937631Z --- FAIL: TestAccProject_updatedToEmptyLimits (1.76s)
```
### 2025-05-12
#### PASS 23 seconds
### 2025-05-13
#### PASS 13 seconds
#### PASS 12 seconds
### 2025-05-14
#### PASS 19 seconds
### 2025-05-15
#### PASS 12 seconds
### 2025-05-16
#### PASS 13 seconds
### 2025-05-17
#### PASS 14 seconds
### 2025-05-18
#### PASS 12 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 11 seconds
### 2025-05-21
#### PASS 11 seconds
### 2025-05-22
#### PASS 13 seconds
### 2025-05-23
#### PASS 12 seconds
### 2025-05-24
#### PASS 15 seconds
### 2025-05-25
#### PASS 12 seconds
### 2025-05-26
#### PASS 14 seconds
### 2025-05-27
#### PASS 13 seconds
#### PASS 13 seconds
### 2025-05-28
#### PASS 12 seconds
#### PASS 14 seconds
### 2025-05-29
#### PASS 20 seconds
### 2025-05-30
#### PASS 16 seconds
### 2025-05-31
#### PASS 12 seconds
### 2025-06-01
#### PASS 15 seconds
#### PASS 13 seconds
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 13 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 22 seconds
#### PASS 16 seconds
### 2025-06-03
#### PASS 14 seconds
### 2025-06-04
#### PASS 20 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:29:34.4932985Z === RUN   TestAccProject_updatedToEmptyLimits
2025-06-05T00:29:34.4940326Z === CONT  TestAccProject_updatedToEmptyLimits
2025-06-05T00:29:34.5035153Z === NAME  TestAccProject_updatedToEmptyLimits
2025-06-05T00:29:34.5035670Z     resource_project_test.go:910: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5036070Z         
2025-06-05T00:29:34.5036487Z         Error: error creating project: test-acc-tf-p-7349444835229051279
2025-06-05T00:29:34.5036974Z         
2025-06-05T00:29:34.5037513Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5038143Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5038890Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5039194Z         
2025-06-05T00:29:34.5039668Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5040301Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5040877Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5041426Z --- FAIL: TestAccProject_updatedToEmptyLimits (3.59s)
```
### 2025-06-06
#### PASS 20 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 20 seconds
### 2025-06-09
#### PASS 20 seconds
### 2025-06-10
#### PASS 20 seconds
### 2025-06-11
#### PASS 14 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 20 seconds
### 2025-06-13
#### PASS 22 seconds
### 2025-06-14
#### PASS 13 seconds
### 2025-06-15
#### PASS 19 seconds
### 2025-06-16
#### PASS 13 seconds
### 2025-06-17
#### PASS 12 seconds
### 2025-06-18
#### PASS 12 seconds
### 2025-06-19
#### PASS 11 seconds
### 2025-06-20
#### PASS 14 seconds
### 2025-06-21
#### PASS 22 seconds
### 2025-06-22
#### PASS 13 seconds
### 2025-06-23
#### PASS 13 seconds
### 2025-06-24
#### PASS 21 seconds
### 2025-06-25
#### PASS 23 seconds
### 2025-06-26
#### PASS 22 seconds
### 2025-06-27
#### PASS 15 seconds
### 2025-06-28
#### PASS 13 seconds
### 2025-06-29
#### PASS 20 seconds
### 2025-06-30
#### PASS 21 seconds
### 2025-07-01
#### PASS 16 seconds
#### PASS 15 seconds
#### PASS 23 seconds
#### PASS 14 seconds
#### PASS 13 seconds
#### PASS 12 seconds
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 13 seconds
### 2025-07-04
#### PASS 13 seconds
### 2025-07-05
#### PASS 11 seconds
### 2025-07-06
#### PASS 16 seconds
### 2025-07-07
#### PASS 12 seconds
### 2025-07-08
#### PASS 11 seconds
### 2025-07-09
#### PASS 14 seconds