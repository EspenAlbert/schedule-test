# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 63 TestRuns in dev, qa from 2025-05-22 to 2025-07-09 from master branch: 1 unique tests, PASS(x 61) FAIL(x 2)
Success rate: 96.83%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-06-05 00:30 | dev | 1.08s
2025-07-06 00:56 | qa | 35.03s

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
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
2025-04-24: MISSING
2025-04-25: MISSING
2025-04-26: MISSING
2025-04-27: MISSING
2025-04-28: MISSING
2025-04-29: MISSING
2025-04-30: MISSING
2025-05-01: MISSING
2025-05-02: MISSING
2025-05-03: MISSING
2025-05-04: MISSING
2025-05-05: MISSING
2025-05-06: MISSING
2025-05-07: MISSING
2025-05-08: MISSING
2025-05-09: MISSING
2025-05-10: MISSING
2025-05-11: MISSING
2025-05-12: MISSING
2025-05-13: MISSING
2025-05-14: MISSING
2025-05-15: MISSING
2025-05-16: MISSING
2025-05-17: MISSING
2025-05-18: MISSING
2025-05-19: MISSING
2025-05-20: MISSING
2025-05-21: MISSING
### 2025-05-22
#### PASS 9 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 12 seconds
### 2025-05-26
#### PASS 8 seconds
### 2025-05-27
#### PASS 11 seconds
### 2025-05-28
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-05-29
#### PASS 13 seconds
### 2025-05-30
#### PASS 7 seconds
### 2025-05-31
#### PASS 8 seconds
### 2025-06-01
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 15 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 13 seconds
### 2025-06-02
#### PASS 11 seconds
#### PASS 7 seconds
#### PASS 14 seconds
### 2025-06-03
#### PASS 13 seconds
### 2025-06-04
#### PASS 8 seconds
### 2025-06-05
#### FAIL a second
```
2025-06-05T00:30:08.7604495Z === RUN   TestAccCustomDBRoleAPI_basic
2025-06-05T00:30:08.7626037Z === CONT  TestAccCustomDBRoleAPI_basic
2025-06-05T00:30:08.7645202Z   
2025-06-05T00:30:08.7646063Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:30:08.7646731Z         
2025-06-05T00:30:08.7647470Z         Error: error creating project: test-acc-tf-p-3198279109666270560
2025-06-05T00:30:08.7648081Z         
2025-06-05T00:30:08.7648614Z           with mongodbatlas_project.test,
2025-06-05T00:30:08.7649675Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:08.7650647Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:08.7651163Z         
2025-06-05T00:30:08.7651984Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:08.7653100Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:08.7654257Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:08.7654947Z --- FAIL: TestAccCustomDBRoleAPI_basic (1.79s)
```
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 10 seconds
### 2025-06-10
#### PASS 7 seconds
### 2025-06-11
#### PASS 8 seconds
#### PASS 13 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 13 seconds
### 2025-06-14
#### PASS 12 seconds
### 2025-06-15
#### PASS 8 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 13 seconds
### 2025-06-19
#### PASS 14 seconds
### 2025-06-20
#### PASS 7 seconds
### 2025-06-21
#### PASS 7 seconds
### 2025-06-22
#### PASS 9 seconds
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 11 seconds
### 2025-06-25
#### PASS 11 seconds
### 2025-06-26
#### PASS 8 seconds
### 2025-06-27
#### PASS 13 seconds
### 2025-06-28
#### PASS 13 seconds
### 2025-06-29
#### PASS 8 seconds
### 2025-06-30
#### PASS 7 seconds
### 2025-07-01
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 13 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 12 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:56:24.9088697Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9089464Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9104039Z   
2025-07-06T00:56:24.9104702Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:56:24.9105357Z         
2025-07-06T00:56:24.9106060Z         Error: error when getting project properties after create
2025-07-06T00:56:24.9106668Z         
2025-07-06T00:56:24.9107156Z           with mongodbatlas_project.test,
2025-07-06T00:56:24.9107745Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:56:24.9108290Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:56:24.9108570Z         
2025-07-06T00:56:24.9109004Z         error getting project (6869c45c690ae45e168be415): error getting project's
2025-07-06T00:56:24.9109444Z         limits (6869c45c690ae45e168be415):
2025-07-06T00:56:24.9110268Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c45c690ae45e168be415/limits
2025-07-06T00:56:24.9110955Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:56:24.9111517Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:56:24.9111899Z         BadRequestDetail: 
2025-07-06T00:56:24.9112175Z --- FAIL: TestAccCustomDBRoleAPI_basic (35.30s)
```
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 8 seconds
### 2025-07-09
#### PASS 8 seconds