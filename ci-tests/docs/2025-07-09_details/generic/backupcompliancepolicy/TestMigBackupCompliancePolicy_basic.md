# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 6)
Success rate: 94.83%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 3.07s
2025-06-05 00:28 | dev | 4.08s
2025-06-13 00:41 | dev | 13.04s
2025-06-22 00:44 | qa | 35.02s
2025-06-29 00:46 | qa | 99.10s
2025-07-06 00:46 | qa | 100.08s

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
#### PASS 11 seconds
### 2025-04-12
#### PASS 12 seconds
### 2025-04-13
#### PASS 15 seconds
### 2025-04-14
#### PASS 11 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### PASS 11 seconds
#### PASS 17 seconds
### 2025-04-17
#### PASS 15 seconds
### 2025-04-18
#### PASS 12 seconds
### 2025-04-19
#### PASS 17 seconds
### 2025-04-20
#### PASS 12 seconds
### 2025-04-21
#### PASS 12 seconds
### 2025-04-22
#### PASS 12 seconds
### 2025-04-23
#### PASS 11 seconds
### 2025-04-24
#### PASS 13 seconds
### 2025-04-25
#### PASS 16 seconds
### 2025-04-26
#### PASS 28 seconds
### 2025-04-27
#### PASS 11 seconds
### 2025-04-28
#### PASS 11 seconds
### 2025-04-29
#### PASS 12 seconds
### 2025-04-30
#### PASS 15 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 17 seconds
#### PASS 17 seconds
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 15 seconds
#### PASS 17 seconds
#### PASS 15 seconds
### 2025-05-02
#### PASS 11 seconds
### 2025-05-03
#### PASS 12 seconds
### 2025-05-04
#### PASS 18 seconds
### 2025-05-05
#### PASS 17 seconds
### 2025-05-06
#### PASS 11 seconds
### 2025-05-07
#### PASS 10 seconds
### 2025-05-08
#### PASS 11 seconds
### 2025-05-09
#### PASS 11 seconds
### 2025-05-10
#### PASS 18 seconds
### 2025-05-11
#### FAIL 3 seconds
```
2025-05-11T00:29:53.7309692Z === RUN   TestMigBackupCompliancePolicy_basic
2025-05-11T00:29:53.7317489Z === CONT  TestMigBackupCompliancePolicy_basic
2025-05-11T00:29:53.7411553Z === NAME  TestMigBackupCompliancePolicy_basic
2025-05-11T00:29:53.7412345Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7412905Z         
2025-05-11T00:29:53.7413396Z         Error: error creating project: test-acc-tf-p-8480060776929822142
2025-05-11T00:29:53.7413957Z         
2025-05-11T00:29:53.7414352Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7415027Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7415649Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7416019Z         
2025-05-11T00:29:53.7416939Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7417668Z         type
2025-05-11T00:29:53.7418013Z --- FAIL: TestMigBackupCompliancePolicy_basic (3.66s)
```
### 2025-05-12
#### PASS 10 seconds
### 2025-05-13
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-05-14
#### PASS 18 seconds
### 2025-05-15
#### PASS 12 seconds
### 2025-05-16
#### PASS 11 seconds
### 2025-05-17
#### PASS 11 seconds
### 2025-05-18
#### PASS 15 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 17 seconds
### 2025-05-21
#### PASS 11 seconds
### 2025-05-22
#### PASS 15 seconds
### 2025-05-23
#### PASS 16 seconds
### 2025-05-24
#### PASS 12 seconds
### 2025-05-25
#### PASS 11 seconds
### 2025-05-26
#### PASS 17 seconds
### 2025-05-27
#### PASS 12 seconds
#### PASS 12 seconds
### 2025-05-28
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 15 seconds
### 2025-05-29
#### PASS 13 seconds
#### PASS 10 seconds
### 2025-05-30
#### PASS 14 seconds
### 2025-05-31
#### PASS 12 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 11 seconds
#### PASS 12 seconds
### 2025-06-02
#### PASS 16 seconds
#### PASS 12 seconds
#### PASS 17 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 17 seconds
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:28:56.4024969Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-05T00:28:56.4036736Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-05T00:28:56.4226896Z === NAME  TestMigBackupCompliancePolicy_basic
2025-06-05T00:28:56.4228361Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4229398Z         
2025-06-05T00:28:56.4230447Z         Error: error creating project: test-acc-tf-p-7682476745987573331
2025-06-05T00:28:56.4231240Z         
2025-06-05T00:28:56.4231916Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4233186Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4234355Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4235037Z         
2025-06-05T00:28:56.4236038Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4237372Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4238588Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4239640Z --- FAIL: TestMigBackupCompliancePolicy_basic (4.77s)
```
### 2025-06-06
#### PASS 11 seconds
### 2025-06-07
#### PASS 11 seconds
### 2025-06-08
#### PASS 16 seconds
### 2025-06-09
#### PASS 12 seconds
### 2025-06-10
#### PASS 11 seconds
### 2025-06-11
#### PASS 14 seconds
#### PASS 17 seconds
### 2025-06-12
#### PASS 11 seconds
### 2025-06-13
#### FAIL 13 seconds
```
2025-06-13T00:41:41.2994693Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-13T00:41:41.3005094Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-13T00:41:41.3096706Z === NAME  TestMigBackupCompliancePolicy_basic
2025-06-13T00:41:41.3097543Z     resource_backup_compliance_policy_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-13T00:41:41.3098185Z         
2025-06-13T00:41:41.3100530Z         Error: error disabling the Backup Compliance Policy: 684b70b1a4aae01f9b73bcc1: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684b70b1a4aae01f9b73bcc1/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-13T00:41:41.3102292Z         
2025-06-13T00:41:41.3102615Z --- FAIL: TestMigBackupCompliancePolicy_basic (13.36s)
```
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
#### FAIL 35 seconds
```
2025-06-22T00:44:34.6638267Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-22T00:44:34.6647242Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-22T00:44:34.6704900Z === NAME  TestMigBackupCompliancePolicy_basic
2025-06-22T00:44:34.6705589Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:34.6706118Z         
2025-06-22T00:44:34.6706552Z         Error: error when getting project properties after create
2025-06-22T00:44:34.6706954Z         
2025-06-22T00:44:34.6707303Z           with mongodbatlas_project.test,
2025-06-22T00:44:34.6707953Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:34.6708554Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:34.6708908Z         
2025-06-22T00:44:34.6709409Z         error getting project (68574eecab82446d9bfb0629): error getting project's
2025-06-22T00:44:34.6709932Z         limits (68574eecab82446d9bfb0629):
2025-06-22T00:44:34.6710585Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eecab82446d9bfb0629/limits
2025-06-22T00:44:34.6711332Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:34.6711973Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:34.6712424Z         BadRequestDetail: 
2025-06-22T00:44:34.6712790Z --- FAIL: TestMigBackupCompliancePolicy_basic (35.24s)
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
2025-06-29T00:46:26.6037349Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-29T00:46:26.6043948Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-29T00:46:26.6143027Z === NAME  TestMigBackupCompliancePolicy_basic
2025-06-29T00:46:26.6143802Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:46:26.6144397Z         
2025-06-29T00:46:26.6144839Z         Error: error when getting project properties after create
2025-06-29T00:46:26.6145236Z         
2025-06-29T00:46:26.6145596Z           with mongodbatlas_project.test,
2025-06-29T00:46:26.6147192Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-29T00:46:26.6147825Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:46:26.6148193Z         
2025-06-29T00:46:26.6148696Z         error getting project (6860898a56291349dce6cc73): error getting project's
2025-06-29T00:46:26.6149214Z         limits (6860898a56291349dce6cc73):
2025-06-29T00:46:26.6149852Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898a56291349dce6cc73/limits
2025-06-29T00:46:26.6150583Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:46:26.6151231Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:46:26.6151689Z         BadRequestDetail: 
2025-06-29T00:46:26.6152056Z --- FAIL: TestMigBackupCompliancePolicy_basic (99.97s)
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
#### FAIL a minute
```
2025-07-06T00:46:50.0770643Z === RUN   TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0781596Z === CONT  TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0987102Z === NAME  TestMigBackupCompliancePolicy_basic
2025-07-06T00:46:50.0988519Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0989590Z         
2025-07-06T00:46:50.0990371Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0991054Z         
2025-07-06T00:46:50.0991670Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0993023Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0994324Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0994947Z         
2025-07-06T00:46:50.0995847Z         error getting project (6869c404690ae45e168bd02c): error getting project's
2025-07-06T00:46:50.0996771Z         limits (6869c404690ae45e168bd02c):
2025-07-06T00:46:50.0997902Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c404690ae45e168bd02c/limits
2025-07-06T00:46:50.0999226Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.1000375Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.1001180Z         BadRequestDetail: 
2025-07-06T00:46:50.1001822Z --- FAIL: TestMigBackupCompliancePolicy_basic (100.83s)
```
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute
### 2025-07-09
#### PASS a minute