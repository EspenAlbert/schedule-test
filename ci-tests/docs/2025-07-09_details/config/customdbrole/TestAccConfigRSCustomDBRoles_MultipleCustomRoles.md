# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.05s
2025-06-05 00:30 | dev | 3.09s
2025-06-22 00:33 | qa | 53.09s
2025-07-06 00:33 | qa | 55.03s

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
#### PASS 34 seconds
### 2025-04-12
#### PASS 34 seconds
### 2025-04-13
#### PASS 34 seconds
### 2025-04-14
#### PASS 29 seconds
### 2025-04-15
#### PASS 37 seconds
### 2025-04-16
#### PASS 32 seconds
#### PASS 33 seconds
### 2025-04-17
#### PASS 34 seconds
### 2025-04-18
#### PASS 35 seconds
### 2025-04-19
#### PASS 37 seconds
### 2025-04-20
#### PASS 34 seconds
### 2025-04-21
#### PASS 40 seconds
### 2025-04-22
#### PASS 34 seconds
### 2025-04-23
#### PASS 34 seconds
### 2025-04-24
#### PASS 39 seconds
### 2025-04-25
#### PASS 27 seconds
### 2025-04-26
#### PASS 33 seconds
### 2025-04-27
#### PASS 34 seconds
### 2025-04-28
#### PASS 34 seconds
### 2025-04-29
#### PASS 28 seconds
### 2025-04-30
#### PASS 29 seconds
#### PASS 28 seconds
### 2025-05-01
#### PASS 28 seconds
#### PASS 35 seconds
#### PASS 27 seconds
#### PASS 29 seconds
#### PASS 27 seconds
#### PASS 34 seconds
#### PASS 30 seconds
### 2025-05-02
#### PASS 32 seconds
### 2025-05-03
#### PASS 29 seconds
### 2025-05-04
#### PASS 29 seconds
### 2025-05-05
#### PASS 34 seconds
### 2025-05-06
#### PASS 28 seconds
### 2025-05-07
#### PASS 27 seconds
### 2025-05-08
#### PASS 28 seconds
### 2025-05-09
#### PASS 33 seconds
### 2025-05-10
#### PASS 28 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:47.3846166Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-05-11T00:29:47.3850494Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-05-11T00:29:47.3866238Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform
2025-05-11T00:29:47.3928047Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-05-11T00:29:47.3929019Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:47.3929741Z         
2025-05-11T00:29:47.3930426Z         Error: error creating project: test-acc-tf-p-1537197272783458269
2025-05-11T00:29:47.3931007Z         
2025-05-11T00:29:47.3931645Z           with mongodbatlas_project.test,
2025-05-11T00:29:47.3932660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:47.3933593Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:47.3934096Z         
2025-05-11T00:29:47.3934878Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:47.3935538Z         type
2025-05-11T00:29:47.3937635Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (1.51s)
```
### 2025-05-12
#### PASS 28 seconds
### 2025-05-13
#### PASS 33 seconds
#### PASS 28 seconds
### 2025-05-14
#### PASS 28 seconds
### 2025-05-15
#### PASS 31 seconds
### 2025-05-16
#### PASS 34 seconds
### 2025-05-17
#### PASS 28 seconds
### 2025-05-18
#### PASS 32 seconds
### 2025-05-19
#### PASS 28 seconds
### 2025-05-20
#### PASS 28 seconds
### 2025-05-21
#### PASS 30 seconds
### 2025-05-22
#### PASS 27 seconds
### 2025-05-23
#### PASS 28 seconds
### 2025-05-24
#### PASS 29 seconds
### 2025-05-25
#### PASS 30 seconds
### 2025-05-26
#### PASS 29 seconds
### 2025-05-27
#### PASS 30 seconds
### 2025-05-28
#### PASS 34 seconds
#### PASS 29 seconds
#### PASS 28 seconds
### 2025-05-29
#### PASS 30 seconds
### 2025-05-30
#### PASS 33 seconds
### 2025-05-31
#### PASS 33 seconds
### 2025-06-01
#### PASS 28 seconds
#### PASS 28 seconds
#### PASS 29 seconds
#### PASS 32 seconds
#### PASS 31 seconds
#### PASS 28 seconds
### 2025-06-02
#### PASS 27 seconds
#### PASS 28 seconds
#### PASS 36 seconds
### 2025-06-03
#### PASS 31 seconds
### 2025-06-04
#### PASS 31 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:30:45.1169074Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-05T00:30:45.1171252Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-05T00:30:45.1217747Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-05T00:30:45.1218337Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1218757Z         
2025-06-05T00:30:45.1219294Z         Error: error creating project: test-acc-tf-p-3260323296198460523
2025-06-05T00:30:45.1219652Z         
2025-06-05T00:30:45.1219964Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1220562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1221115Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1221418Z         
2025-06-05T00:30:45.1221886Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1222525Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1223103Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1223574Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (3.92s)
```
### 2025-06-06
#### PASS 30 seconds
### 2025-06-07
#### PASS 34 seconds
### 2025-06-08
#### PASS 27 seconds
### 2025-06-09
#### PASS 28 seconds
### 2025-06-10
#### PASS 35 seconds
### 2025-06-11
#### PASS 34 seconds
#### PASS 27 seconds
### 2025-06-12
#### PASS 27 seconds
### 2025-06-13
#### PASS 28 seconds
### 2025-06-14
#### PASS 28 seconds
### 2025-06-15
#### PASS 27 seconds
### 2025-06-16
#### PASS 35 seconds
### 2025-06-17
#### PASS 34 seconds
### 2025-06-18
#### PASS 29 seconds
#### PASS 28 seconds
### 2025-06-19
#### PASS 28 seconds
### 2025-06-20
#### PASS 34 seconds
### 2025-06-21
#### PASS 28 seconds
### 2025-06-22
#### FAIL 53 seconds
```
2025-06-22T00:33:39.3551194Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3554623Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3659900Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-06-22T00:33:39.3661245Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:33:39.3662128Z         
2025-06-22T00:33:39.3662819Z         Error: error when getting project properties after create
2025-06-22T00:33:39.3663444Z         
2025-06-22T00:33:39.3663998Z           with mongodbatlas_project.test,
2025-06-22T00:33:39.3665069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:33:39.3666035Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:33:39.3666573Z         
2025-06-22T00:33:39.3667404Z         error getting project (68574ef0af7a0954e84add93): error getting project's
2025-06-22T00:33:39.3668605Z         limits (68574ef0af7a0954e84add93):
2025-06-22T00:33:39.3669644Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84add93/limits
2025-06-22T00:33:39.3670902Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:33:39.3672161Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:33:39.3672873Z         BadRequestDetail: 
2025-06-22T00:33:39.3673537Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (53.91s)
```
### 2025-06-23
#### PASS 34 seconds
### 2025-06-24
#### PASS 29 seconds
### 2025-06-25
#### PASS 29 seconds
### 2025-06-26
#### PASS 30 seconds
### 2025-06-27
#### PASS 35 seconds
### 2025-06-28
#### PASS 27 seconds
### 2025-06-29
#### PASS 27 seconds
### 2025-06-30
#### PASS 32 seconds
### 2025-07-01
#### PASS 28 seconds
#### PASS 29 seconds
#### PASS 34 seconds
#### PASS 28 seconds
#### PASS 35 seconds
#### PASS 28 seconds
### 2025-07-02
#### PASS 28 seconds
### 2025-07-03
#### PASS 32 seconds
### 2025-07-04
#### PASS 28 seconds
### 2025-07-05
#### PASS 34 seconds
### 2025-07-06
#### FAIL 55 seconds
```
2025-07-06T00:33:17.8237666Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8240850Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8390098Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-07-06T00:33:17.8391117Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:33:17.8391828Z         
2025-07-06T00:33:17.8392433Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8392956Z         
2025-07-06T00:33:17.8393435Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8394430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8397100Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8397779Z         
2025-07-06T00:33:17.8398685Z         error getting project (6869c4027267b5775b682a3c): error getting project's
2025-07-06T00:33:17.8399589Z         limits (6869c4027267b5775b682a3c):
2025-07-06T00:33:17.8400532Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a3c/limits
2025-07-06T00:33:17.8401812Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8402754Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8403549Z         BadRequestDetail: 
2025-07-06T00:33:17.8424754Z    test_working_directory=/tmp/plugintest2041085861 test_step_number=2
2025-07-06T00:33:17.8437848Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (55.34s)
```
### 2025-07-07
#### PASS 28 seconds
### 2025-07-08
#### PASS 35 seconds
### 2025-07-09
#### PASS 34 seconds