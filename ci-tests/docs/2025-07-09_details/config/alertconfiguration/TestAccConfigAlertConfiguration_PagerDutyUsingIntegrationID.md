# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.01s
2025-06-05 00:29 | dev | 10.08s
2025-06-29 00:33 | qa | 36.02s
2025-07-06 00:33 | qa | 41.09s

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
#### PASS 16 seconds
### 2025-04-12
#### PASS 20 seconds
### 2025-04-13
#### PASS 16 seconds
### 2025-04-14
#### PASS 23 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### PASS 15 seconds
#### PASS 22 seconds
### 2025-04-17
#### PASS 16 seconds
### 2025-04-18
#### PASS 19 seconds
### 2025-04-19
#### PASS 18 seconds
### 2025-04-20
#### PASS 16 seconds
### 2025-04-21
#### PASS 19 seconds
### 2025-04-22
#### PASS 17 seconds
### 2025-04-23
#### PASS 17 seconds
### 2025-04-24
#### PASS 18 seconds
### 2025-04-25
#### PASS 14 seconds
### 2025-04-26
#### PASS 15 seconds
### 2025-04-27
#### PASS 16 seconds
### 2025-04-28
#### PASS 16 seconds
### 2025-04-29
#### PASS 14 seconds
### 2025-04-30
#### PASS 14 seconds
#### PASS 15 seconds
### 2025-05-01
#### PASS 14 seconds
#### PASS 16 seconds
#### PASS 13 seconds
#### PASS 15 seconds
#### PASS 19 seconds
#### PASS 15 seconds
#### PASS 22 seconds
### 2025-05-02
#### PASS 16 seconds
### 2025-05-03
#### PASS 15 seconds
### 2025-05-04
#### PASS 15 seconds
### 2025-05-05
#### PASS 17 seconds
### 2025-05-06
#### PASS 14 seconds
### 2025-05-07
#### PASS 14 seconds
### 2025-05-08
#### PASS 15 seconds
### 2025-05-09
#### PASS 16 seconds
### 2025-05-10
#### PASS 14 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:44.8017975Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-05-11T00:29:44.8103556Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-05-11T00:29:44.8113256Z   
2025-05-11T00:29:44.8113657Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:44.8114040Z         
2025-05-11T00:29:44.8114489Z         Error: error creating project: test-acc-tf-p-5749392820273406454
2025-05-11T00:29:44.8114880Z         
2025-05-11T00:29:44.8115208Z           with mongodbatlas_project.test,
2025-05-11T00:29:44.8115824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:44.8116390Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:44.8116699Z         
2025-05-11T00:29:44.8117180Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:44.8117584Z         type
2025-05-11T00:29:44.8117959Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (1.07s)
```
### 2025-05-12
#### PASS 13 seconds
### 2025-05-13
#### PASS 16 seconds
#### PASS 14 seconds
### 2025-05-14
#### PASS 13 seconds
### 2025-05-15
#### PASS 14 seconds
### 2025-05-16
#### PASS 15 seconds
### 2025-05-17
#### PASS 13 seconds
### 2025-05-18
#### PASS 15 seconds
### 2025-05-19
#### PASS 13 seconds
### 2025-05-20
#### PASS 15 seconds
### 2025-05-21
#### PASS 14 seconds
### 2025-05-22
#### PASS 13 seconds
### 2025-05-23
#### PASS 13 seconds
### 2025-05-24
#### PASS 14 seconds
### 2025-05-25
#### PASS 14 seconds
### 2025-05-26
#### PASS 14 seconds
### 2025-05-27
#### PASS 14 seconds
### 2025-05-28
#### PASS 16 seconds
#### PASS 14 seconds
#### PASS 14 seconds
### 2025-05-29
#### PASS 15 seconds
### 2025-05-30
#### PASS 15 seconds
### 2025-05-31
#### PASS 16 seconds
### 2025-06-01
#### PASS 13 seconds
#### PASS 14 seconds
#### PASS 14 seconds
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 14 seconds
### 2025-06-02
#### PASS 15 seconds
#### PASS 17 seconds
#### PASS 18 seconds
### 2025-06-03
#### PASS 15 seconds
### 2025-06-04
#### PASS 16 seconds
### 2025-06-05
#### FAIL 10 seconds
```
2025-06-05T00:29:56.1187739Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-05T00:29:56.1214478Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-05T00:29:56.1252846Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-05T00:29:56.1256695Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:29:56.1257428Z         
2025-06-05T00:29:56.1258240Z         Error: error creating project: test-acc-tf-p-971323270815689067
2025-06-05T00:29:56.1258935Z         
2025-06-05T00:29:56.1259553Z           with mongodbatlas_project.test,
2025-06-05T00:29:56.1260672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:56.1261702Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:56.1262282Z         
2025-06-05T00:29:56.1263159Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:56.1264514Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:56.1265597Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:56.1266580Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (10.79s)
```
### 2025-06-06
#### PASS 14 seconds
### 2025-06-07
#### PASS 16 seconds
### 2025-06-08
#### PASS 14 seconds
### 2025-06-09
#### PASS 13 seconds
### 2025-06-10
#### PASS 16 seconds
### 2025-06-11
#### PASS 16 seconds
#### PASS 14 seconds
### 2025-06-12
#### PASS 14 seconds
### 2025-06-13
#### PASS 13 seconds
### 2025-06-14
#### PASS 14 seconds
### 2025-06-15
#### PASS 14 seconds
### 2025-06-16
#### PASS 16 seconds
### 2025-06-17
#### PASS 16 seconds
### 2025-06-18
#### PASS 15 seconds
#### PASS 14 seconds
### 2025-06-19
#### PASS 14 seconds
### 2025-06-20
#### PASS 17 seconds
### 2025-06-21
#### PASS 17 seconds
### 2025-06-22
#### PASS 34 seconds
### 2025-06-23
#### PASS 17 seconds
### 2025-06-24
#### PASS 14 seconds
### 2025-06-25
#### PASS 13 seconds
### 2025-06-26
#### PASS 15 seconds
### 2025-06-27
#### PASS 17 seconds
### 2025-06-28
#### PASS 14 seconds
### 2025-06-29
#### FAIL 36 seconds
```
2025-06-29T00:33:07.8907120Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.8982389Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.9053799Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.9054799Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:33:07.9055418Z         
2025-06-29T00:33:07.9056114Z         Error: error when getting project properties after create
2025-06-29T00:33:07.9056644Z         
2025-06-29T00:33:07.9057161Z           with mongodbatlas_project.test,
2025-06-29T00:33:07.9203785Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:33:07.9205006Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:33:07.9205538Z         
2025-06-29T00:33:07.9206335Z         error getting project (686089a256291349dce6d8da): error getting project's
2025-06-29T00:33:07.9207173Z         limits (686089a256291349dce6d8da):
2025-06-29T00:33:07.9208222Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089a256291349dce6d8da/limits
2025-06-29T00:33:07.9209467Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:33:07.9210515Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:33:07.9211400Z         BadRequestDetail: 
2025-06-29T00:33:07.9212109Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (36.16s)
```
### 2025-06-30
#### PASS 15 seconds
### 2025-07-01
#### PASS 14 seconds
#### PASS 15 seconds
#### PASS 17 seconds
#### PASS 14 seconds
#### PASS 18 seconds
#### PASS 18 seconds
### 2025-07-02
#### PASS 14 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 16 seconds
### 2025-07-06
#### FAIL 41 seconds
```
2025-07-06T00:33:03.9309871Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9374319Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9710145Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9711356Z     resource_test.go:508: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:03.9712067Z         
2025-07-06T00:33:03.9938540Z         Error: error when getting project properties after create
2025-07-06T00:33:03.9939535Z         
2025-07-06T00:33:03.9940136Z           with mongodbatlas_project.test,
2025-07-06T00:33:03.9941210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:03.9942137Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:03.9942633Z         
2025-07-06T00:33:03.9943400Z         error getting project (6869c418690ae45e168bdce8): error getting project's
2025-07-06T00:33:03.9944186Z         limits (6869c418690ae45e168bdce8):
2025-07-06T00:33:03.9945300Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c418690ae45e168bdce8/limits
2025-07-06T00:33:03.9946458Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:03.9947446Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:03.9948103Z         BadRequestDetail: 
2025-07-06T00:33:03.9948786Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (41.94s)
```
### 2025-07-07
#### PASS 14 seconds
### 2025-07-08
#### PASS 16 seconds
### 2025-07-09
#### PASS 16 seconds