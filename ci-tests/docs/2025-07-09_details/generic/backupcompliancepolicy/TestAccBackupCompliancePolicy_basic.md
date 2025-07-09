# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) FAIL(x 7)
Success rate: 93.97%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-03 00:41 | dev | 9.03s
2025-05-11 00:29 | qa | 1.03s
2025-06-05 00:28 | dev | 2.06s
2025-06-12 00:41 | dev | 8.03s
2025-06-22 00:44 | qa | 32.07s
2025-06-29 00:46 | qa | 97.00s
2025-07-06 00:46 | qa | 35.02s

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
#### PASS 7 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-04-17
#### PASS 9 seconds
### 2025-04-18
#### PASS 7 seconds
### 2025-04-19
#### PASS 9 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 7 seconds
### 2025-04-23
#### PASS 6 seconds
### 2025-04-24
#### PASS 10 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 22 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 9 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-05-02
#### PASS 8 seconds
### 2025-05-03
#### FAIL 9 seconds
```
2025-05-03T00:41:34.1421398Z === RUN   TestAccBackupCompliancePolicy_basic
2025-05-03T00:41:34.1434465Z === CONT  TestAccBackupCompliancePolicy_basic
2025-05-03T00:41:34.1459856Z === NAME  TestAccBackupCompliancePolicy_basic
2025-05-03T00:41:34.1463272Z     resource_backup_compliance_policy_test.go:23: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-03T00:41:34.1464420Z         
2025-05-03T00:41:34.1467989Z         Error: error disabling the Backup Compliance Policy: 681562df815eb7429e00e9e2: https://cloud-dev.mongodb.com/api/atlas/v2/groups/681562df815eb7429e00e9e2/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-03T00:41:34.1470700Z         
2025-05-03T00:41:34.1471292Z --- FAIL: TestAccBackupCompliancePolicy_basic (9.31s)
```
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 9 seconds
### 2025-05-06
#### PASS 6 seconds
### 2025-05-07
#### PASS 7 seconds
### 2025-05-08
#### PASS 7 seconds
### 2025-05-09
#### PASS 8 seconds
### 2025-05-10
#### PASS 14 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:53.7311605Z === RUN   TestAccBackupCompliancePolicy_basic
2025-05-11T00:29:53.7318819Z === CONT  TestAccBackupCompliancePolicy_basic
2025-05-11T00:29:53.7334334Z === NAME  TestAccBackupCompliancePolicy_basic
2025-05-11T00:29:53.7335045Z     resource_backup_compliance_policy_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7335565Z         
2025-05-11T00:29:53.7336051Z         Error: error creating project: test-acc-tf-p-4493752152406721400
2025-05-11T00:29:53.7336472Z         
2025-05-11T00:29:53.7336834Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7337509Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7338132Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7338499Z         
2025-05-11T00:29:53.7339035Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7339507Z         type
2025-05-11T00:29:53.7346354Z   
2025-05-11T00:29:53.7403333Z --- FAIL: TestAccBackupCompliancePolicy_basic (1.26s)
```
### 2025-05-12
#### PASS 6 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 7 seconds
### 2025-05-16
#### PASS 7 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 11 seconds
### 2025-05-21
#### PASS 6 seconds
### 2025-05-22
#### PASS 9 seconds
### 2025-05-23
#### PASS 9 seconds
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-28
#### PASS 9 seconds
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-30
#### PASS 9 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-06-03
#### PASS 6 seconds
### 2025-06-04
#### PASS 10 seconds
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:28:56.4026456Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-05T00:28:56.4039226Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-05T00:28:56.4198073Z === NAME  TestAccBackupCompliancePolicy_basic
2025-06-05T00:28:56.4199340Z     resource_backup_compliance_policy_test.go:23: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4200492Z         
2025-06-05T00:28:56.4201575Z         Error: error creating project: test-acc-tf-p-1946058186021463531
2025-06-05T00:28:56.4202391Z         
2025-06-05T00:28:56.4203168Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4204448Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4205615Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4206309Z         
2025-06-05T00:28:56.4207320Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4208677Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4210278Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4212175Z --- FAIL: TestAccBackupCompliancePolicy_basic (2.58s)
```
### 2025-06-06
#### PASS 7 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 7 seconds
### 2025-06-10
#### PASS 7 seconds
### 2025-06-11
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-06-12
#### FAIL 8 seconds
```
2025-06-12T00:41:54.7883940Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-12T00:41:54.7898716Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-12T00:41:54.7916479Z   
2025-06-12T00:41:54.7942067Z === NAME  TestAccBackupCompliancePolicy_basic
2025-06-12T00:41:54.7943436Z     resource_backup_compliance_policy_test.go:23: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-12T00:41:54.7944603Z         
2025-06-12T00:41:54.7947445Z         Error: error disabling the Backup Compliance Policy: 684a1f281bc2f4360076a8f8: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684a1f281bc2f4360076a8f8/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-12T00:41:54.7949339Z         
2025-06-12T00:41:54.7949675Z --- FAIL: TestAccBackupCompliancePolicy_basic (8.31s)
```
### 2025-06-13
#### PASS 8 seconds
### 2025-06-14
#### PASS a minute
### 2025-06-15
#### PASS a minute
### 2025-06-16
#### PASS a minute
### 2025-06-17
#### PASS a minute
### 2025-06-18
#### PASS a minute
### 2025-06-19
#### PASS a minute
### 2025-06-20
#### PASS a minute
### 2025-06-21
#### PASS a minute
### 2025-06-22
#### FAIL 32 seconds
```
2025-06-22T00:44:34.6640076Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-22T00:44:34.6649966Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-22T00:44:34.6665134Z   
2025-06-22T00:44:34.6665738Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:34.6666249Z         
2025-06-22T00:44:34.6666699Z         Error: error when getting project properties after create
2025-06-22T00:44:34.6667127Z         
2025-06-22T00:44:34.6667483Z           with mongodbatlas_project.test,
2025-06-22T00:44:34.6668161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:34.6668943Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:34.6669420Z         
2025-06-22T00:44:34.6669939Z         error getting project (68574eebaf7a0954e84ad615): error getting project's
2025-06-22T00:44:34.6670466Z         limits (68574eebaf7a0954e84ad615):
2025-06-22T00:44:34.6671116Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eebaf7a0954e84ad615/limits
2025-06-22T00:44:34.6671858Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:34.6672501Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:34.6672960Z         BadRequestDetail: 
2025-06-22T00:44:34.6673520Z --- FAIL: TestAccBackupCompliancePolicy_basic (32.71s)
```
### 2025-06-23
#### PASS a minute
### 2025-06-24
#### PASS a minute
### 2025-06-25
#### PASS a minute
### 2025-06-26
#### PASS a minute
### 2025-06-27
#### PASS a minute
### 2025-06-28
#### PASS a minute
### 2025-06-29
#### FAIL a minute
```
2025-06-29T00:46:26.6038650Z === RUN   TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6047094Z === CONT  TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6124949Z === NAME  TestAccBackupCompliancePolicy_basic
2025-06-29T00:46:26.6125719Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:46:26.6126580Z         
2025-06-29T00:46:26.6127036Z         Error: error when getting project properties after create
2025-06-29T00:46:26.6127437Z         
2025-06-29T00:46:26.6127802Z           with mongodbatlas_project.test,
2025-06-29T00:46:26.6128471Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:46:26.6129082Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:46:26.6129442Z         
2025-06-29T00:46:26.6129956Z         error getting project (6860898856291349dce6cc45): error getting project's
2025-06-29T00:46:26.6130475Z         limits (6860898856291349dce6cc45):
2025-06-29T00:46:26.6131117Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898856291349dce6cc45/limits
2025-06-29T00:46:26.6131851Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:46:26.6132505Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:46:26.6132965Z         BadRequestDetail: 
2025-06-29T00:46:26.6133345Z --- FAIL: TestAccBackupCompliancePolicy_basic (97.01s)
```
### 2025-06-30
#### PASS a minute
### 2025-07-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS a minute
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### FAIL 35 seconds
```
2025-07-06T00:46:50.0772214Z === RUN   TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0785147Z === CONT  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0874555Z === NAME  TestAccBackupCompliancePolicy_basic
2025-07-06T00:46:50.0875776Z     resource_backup_compliance_policy_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.0876697Z         
2025-07-06T00:46:50.0877473Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0878160Z         
2025-07-06T00:46:50.0878770Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0880014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0881105Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0881725Z         
2025-07-06T00:46:50.0882632Z         error getting project (6869c402690ae45e168bce00): error getting project's
2025-07-06T00:46:50.0883719Z         limits (6869c402690ae45e168bce00):
2025-07-06T00:46:50.0884860Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bce00/limits
2025-07-06T00:46:50.0886177Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0887533Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0888368Z         BadRequestDetail: 
2025-07-06T00:46:50.0888998Z --- FAIL: TestAccBackupCompliancePolicy_basic (35.20s)
```
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute
### 2025-07-09
#### PASS a minute