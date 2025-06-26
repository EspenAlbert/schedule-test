# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:43:25.4031433Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-20T00:43:25.4041596Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-20T00:43:25.4050021Z --- PASS: TestMigBackupCompliancePolicy_basic (70.01s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T00:43:03.0711535Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-21T00:43:03.0726873Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-21T00:43:03.0735874Z --- PASS: TestMigBackupCompliancePolicy_basic (78.11s)
```
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
```
2025-06-23T00:43:16.3448760Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-23T00:43:16.3456471Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-23T00:43:16.3462553Z --- PASS: TestMigBackupCompliancePolicy_basic (70.01s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:41:14.0037153Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-24T00:41:14.0048200Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-24T00:41:14.0057357Z --- PASS: TestMigBackupCompliancePolicy_basic (70.66s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T00:41:42.6361495Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-25T00:41:42.6372919Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-25T00:41:42.6382891Z --- PASS: TestMigBackupCompliancePolicy_basic (73.10s)
```
### 2025-06-26
#### PASS a minute
```
2025-06-26T00:41:37.1525470Z === RUN   TestMigBackupCompliancePolicy_basic
2025-06-26T00:41:37.1536436Z === CONT  TestMigBackupCompliancePolicy_basic
2025-06-26T00:41:37.1545320Z --- PASS: TestMigBackupCompliancePolicy_basic (71.69s)
```