# project/project/TestAccProject_withUpdatedRole Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.08s
2025-06-05 00:29 | dev | 3.04s

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
#### PASS 15 seconds
### 2025-04-12
#### PASS 12 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 12 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 9 seconds
### 2025-04-18
#### PASS 14 seconds
### 2025-04-19
#### PASS 13 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 11 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 12 seconds
### 2025-04-24
#### PASS 8 seconds
### 2025-04-25
#### PASS 10 seconds
### 2025-04-26
#### PASS 38 seconds
### 2025-04-27
#### PASS 13 seconds
### 2025-04-28
#### PASS 10 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 13 seconds
#### PASS 14 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 11 seconds
#### PASS 7 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 7 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 10 seconds
### 2025-05-06
#### PASS 7 seconds
### 2025-05-07
#### PASS 12 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 14 seconds
### 2025-05-10
#### PASS 10 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3773693Z === RUN   TestAccProject_withUpdatedRole
2025-05-11T00:30:20.3781651Z === CONT  TestAccProject_withUpdatedRole
2025-05-11T00:30:20.3904683Z === NAME  TestAccProject_withUpdatedRole
2025-05-11T00:30:20.3905210Z     resource_project_test.go:738: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3905605Z         
2025-05-11T00:30:20.3906037Z         Error: error creating project: test-acc-tf-p-7946845133918583033
2025-05-11T00:30:20.3906392Z         
2025-05-11T00:30:20.3906712Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3907338Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3907904Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3908206Z         
2025-05-11T00:30:20.3908698Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3909105Z         type
2025-05-11T00:30:20.3918061Z   
2025-05-11T00:30:20.3940382Z --- FAIL: TestAccProject_withUpdatedRole (1.82s)
```
### 2025-05-12
#### PASS 14 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-05-14
#### PASS 12 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 10 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 7 seconds
### 2025-05-19
#### PASS 9 seconds
### 2025-05-20
#### PASS 9 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 11 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 12 seconds
### 2025-05-25
#### PASS 9 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-05-28
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-05-29
#### PASS 13 seconds
### 2025-05-30
#### PASS 10 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:29:34.4930908Z === RUN   TestAccProject_withUpdatedRole
2025-06-05T00:29:34.4940648Z === CONT  TestAccProject_withUpdatedRole
2025-06-05T00:29:34.4951729Z   
2025-06-05T00:29:34.5002191Z === NAME  TestAccProject_withUpdatedRole
2025-06-05T00:29:34.5002701Z     resource_project_test.go:738: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5003100Z         
2025-06-05T00:29:34.5003507Z         Error: error creating project: test-acc-tf-p-5457202483375857375
2025-06-05T00:29:34.5003867Z         
2025-06-05T00:29:34.5004167Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5004765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5005315Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5005613Z         
2025-06-05T00:29:34.5006201Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5006839Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5007419Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5007826Z --- FAIL: TestAccProject_withUpdatedRole (3.40s)
```
### 2025-06-06
#### PASS 12 seconds
### 2025-06-07
#### PASS 9 seconds
### 2025-06-08
#### PASS 11 seconds
### 2025-06-09
#### PASS 13 seconds
### 2025-06-10
#### PASS 12 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 10 seconds
### 2025-06-12
#### PASS 13 seconds
### 2025-06-13
#### PASS 14 seconds
### 2025-06-14
#### PASS 9 seconds
### 2025-06-15
#### PASS 12 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 9 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 9 seconds
### 2025-06-21
#### PASS 14 seconds
### 2025-06-22
#### PASS 13 seconds
### 2025-06-23
#### PASS 9 seconds
### 2025-06-24
#### PASS 14 seconds
### 2025-06-25
#### PASS 15 seconds
### 2025-06-26
#### PASS 12 seconds
### 2025-06-27
#### PASS 12 seconds
### 2025-06-28
#### PASS 10 seconds
### 2025-06-29
#### PASS 26 seconds
### 2025-06-30
#### PASS 16 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-07-02
#### PASS 10 seconds
### 2025-07-03
#### PASS 8 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### PASS 10 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 10 seconds
### 2025-07-09
#### PASS 10 seconds