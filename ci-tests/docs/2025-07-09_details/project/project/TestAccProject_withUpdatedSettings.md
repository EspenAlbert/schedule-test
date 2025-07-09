# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.08s
2025-06-05 00:29 | dev | 4.00s
2025-06-29 00:43 | qa | 55.05s

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
#### PASS 19 seconds
### 2025-04-12
#### PASS 17 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 17 seconds
### 2025-04-15
#### PASS 10 seconds
### 2025-04-16
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-04-17
#### PASS 10 seconds
### 2025-04-18
#### PASS 19 seconds
### 2025-04-19
#### PASS 17 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 14 seconds
### 2025-04-22
#### PASS 10 seconds
### 2025-04-23
#### PASS 15 seconds
### 2025-04-24
#### PASS 11 seconds
### 2025-04-25
#### PASS 12 seconds
### 2025-04-26
#### PASS 42 seconds
### 2025-04-27
#### PASS 17 seconds
### 2025-04-28
#### PASS 10 seconds
### 2025-04-29
#### PASS 11 seconds
### 2025-04-30
#### PASS 19 seconds
#### PASS 19 seconds
### 2025-05-01
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 14 seconds
#### PASS 17 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 14 seconds
### 2025-05-03
#### PASS 11 seconds
### 2025-05-04
#### PASS 11 seconds
### 2025-05-05
#### PASS 11 seconds
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 15 seconds
### 2025-05-08
#### PASS 10 seconds
### 2025-05-09
#### PASS 18 seconds
### 2025-05-10
#### PASS 12 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:20.3773043Z === RUN   TestAccProject_withUpdatedSettings
2025-05-11T00:30:20.3780026Z === CONT  TestAccProject_withUpdatedSettings
2025-05-11T00:30:20.3855296Z === NAME  TestAccProject_withUpdatedSettings
2025-05-11T00:30:20.3855826Z     resource_project_test.go:679: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:20.3856227Z         
2025-05-11T00:30:20.3856652Z         Error: error creating project: test-acc-tf-p-342099151244049673
2025-05-11T00:30:20.3857005Z         
2025-05-11T00:30:20.3857321Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3857944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3858525Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3858830Z         
2025-05-11T00:30:20.3859311Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3859719Z         type
2025-05-11T00:30:20.3865433Z    test_working_directory=/tmp/plugintest1359415261
2025-05-11T00:30:20.3938014Z --- FAIL: TestAccProject_withUpdatedSettings (1.78s)
```
### 2025-05-12
#### PASS 18 seconds
### 2025-05-13
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-05-14
#### PASS 16 seconds
### 2025-05-15
#### PASS 12 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 12 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 11 seconds
### 2025-05-20
#### PASS 9 seconds
### 2025-05-21
#### PASS 10 seconds
### 2025-05-22
#### PASS 12 seconds
### 2025-05-23
#### PASS 14 seconds
### 2025-05-24
#### PASS 15 seconds
### 2025-05-25
#### PASS 10 seconds
### 2025-05-26
#### PASS 13 seconds
### 2025-05-27
#### PASS 10 seconds
#### PASS 12 seconds
### 2025-05-28
#### PASS 11 seconds
#### PASS 14 seconds
### 2025-05-29
#### PASS 18 seconds
### 2025-05-30
#### PASS 14 seconds
### 2025-05-31
#### PASS 11 seconds
### 2025-06-01
#### PASS 14 seconds
#### PASS 12 seconds
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-06-02
#### PASS 11 seconds
#### PASS 18 seconds
#### PASS 12 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 18 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4930269Z === RUN   TestAccProject_withUpdatedSettings
2025-06-05T00:29:34.4938394Z === CONT  TestAccProject_withUpdatedSettings
2025-06-05T00:29:34.5069143Z === NAME  TestAccProject_withUpdatedSettings
2025-06-05T00:29:34.5069655Z     resource_project_test.go:679: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:29:34.5070057Z         
2025-06-05T00:29:34.5070472Z         Error: error creating project: test-acc-tf-p-1827232599071014799
2025-06-05T00:29:34.5070832Z         
2025-06-05T00:29:34.5071132Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5071948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5072509Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5072819Z         
2025-06-05T00:29:34.5073281Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5073914Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5074484Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5078986Z --- FAIL: TestAccProject_withUpdatedSettings (4.02s)
```
### 2025-06-06
#### PASS 17 seconds
### 2025-06-07
#### PASS 10 seconds
### 2025-06-08
#### PASS 15 seconds
### 2025-06-09
#### PASS 18 seconds
### 2025-06-10
#### PASS 19 seconds
### 2025-06-11
#### PASS 12 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 16 seconds
### 2025-06-13
#### PASS 19 seconds
### 2025-06-14
#### PASS 12 seconds
### 2025-06-15
#### PASS 15 seconds
### 2025-06-16
#### PASS 11 seconds
### 2025-06-17
#### PASS 10 seconds
### 2025-06-18
#### PASS 9 seconds
### 2025-06-19
#### PASS 11 seconds
### 2025-06-20
#### PASS 12 seconds
### 2025-06-21
#### PASS 19 seconds
### 2025-06-22
#### PASS 12 seconds
### 2025-06-23
#### PASS 10 seconds
### 2025-06-24
#### PASS 20 seconds
### 2025-06-25
#### PASS 19 seconds
### 2025-06-26
#### PASS 19 seconds
### 2025-06-27
#### PASS 12 seconds
### 2025-06-28
#### PASS 13 seconds
### 2025-06-29
#### FAIL 55 seconds
```
2025-06-29T00:43:46.9489135Z === RUN   TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9495519Z === CONT  TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9561083Z === NAME  TestAccProject_withUpdatedSettings
2025-06-29T00:43:46.9561678Z     resource_project_test.go:679: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:43:46.9562120Z         
2025-06-29T00:43:46.9562491Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9562809Z         
2025-06-29T00:43:46.9563097Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9563685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9564217Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9564504Z         
2025-06-29T00:43:46.9565064Z         error getting project (686089f756291349dce6e315): error getting project's
2025-06-29T00:43:46.9565526Z         limits (686089f756291349dce6e315):
2025-06-29T00:43:46.9566092Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e315/limits
2025-06-29T00:43:46.9566747Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9567486Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9567880Z         BadRequestDetail: 
2025-06-29T00:43:46.9568535Z --- FAIL: TestAccProject_withUpdatedSettings (55.53s)
```
### 2025-06-30
#### PASS 18 seconds
### 2025-07-01
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 18 seconds
#### PASS 12 seconds
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-07-02
#### PASS 13 seconds
### 2025-07-03
#### PASS 11 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 10 seconds
### 2025-07-06
#### PASS 15 seconds
### 2025-07-07
#### PASS 10 seconds
### 2025-07-08
#### PASS 12 seconds
### 2025-07-09
#### PASS 11 seconds