# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c9df5af52d2d4d4ada/limits | qa | flaky_500 | 101.08s
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a30cddbf4f6e498d52/limits | qa | flaky_500 | 34.09s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c35d444485797b1f551/limits | qa | flaky_500 | 33.09s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b042d444485797b5d793/limits | qa | flaky_500 | 35.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5654523Z === RUN   TestMigBackupCompliancePolicy_basic
2025-09-07T00:49:53.5667288Z === CONT  TestMigBackupCompliancePolicy_basic
2025-09-07T00:49:53.5840052Z === NAME  TestMigBackupCompliancePolicy_basic
2025-09-07T00:49:53.5841530Z     resource_backup_compliance_policy_migration_test.go:11: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-09-07T00:49:53.5842699Z         
2025-09-07T00:49:53.5843641Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5844473Z         
2025-09-07T00:49:53.5845392Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5846731Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5847966Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5848757Z         
2025-09-07T00:49:53.5849993Z         error getting project (68bcd1c9df5af52d2d4d4ada): error getting project's
2025-09-07T00:49:53.5851099Z         limits (68bcd1c9df5af52d2d4d4ada):
2025-09-07T00:49:53.5852455Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c9df5af52d2d4d4ada/limits
2025-09-07T00:49:53.5853917Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5855205Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5856133Z         BadRequestDetail: 
2025-09-07T00:49:53.5856907Z --- FAIL: TestMigBackupCompliancePolicy_basic (101.85s)
```

- 2025-09-08
  - PASS a minute
  - FAIL 34 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4130970Z === RUN   TestMigBackupCompliancePolicy_basic
2025-09-08T09:32:52.4139905Z === CONT  TestMigBackupCompliancePolicy_basic
2025-09-08T09:32:52.4287443Z === NAME  TestMigBackupCompliancePolicy_basic
2025-09-08T09:32:52.4288154Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:52.4288827Z         
2025-09-08T09:32:52.4289279Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4289681Z         
2025-09-08T09:32:52.4290043Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4290710Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4291430Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4291793Z         
2025-09-08T09:32:52.4292314Z         error getting project (68bea2a30cddbf4f6e498d52): error getting project's
2025-09-08T09:32:52.4292853Z         limits (68bea2a30cddbf4f6e498d52):
2025-09-08T09:32:52.4293505Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a30cddbf4f6e498d52/limits
2025-09-08T09:32:52.4294251Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4294903Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4295370Z         BadRequestDetail: 
2025-09-08T09:32:52.4295739Z --- FAIL: TestMigBackupCompliancePolicy_basic (34.86s)
```

  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:29:10+00:00
```
2025-09-14T00:29:10.3495196Z === RUN   TestMigBackupCompliancePolicy_basic
2025-09-14T00:29:10.3506524Z === CONT  TestMigBackupCompliancePolicy_basic
2025-09-14T00:29:10.3565010Z === NAME  TestMigBackupCompliancePolicy_basic
2025-09-14T00:29:10.3565707Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:10.3566246Z         
2025-09-14T00:29:10.3566688Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3567085Z         
2025-09-14T00:29:10.3567570Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3568236Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3568844Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3569204Z         
2025-09-14T00:29:10.3569715Z         error getting project (68c60c35d444485797b1f551): error getting project's
2025-09-14T00:29:10.3570233Z         limits (68c60c35d444485797b1f551):
2025-09-14T00:29:10.3570868Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c35d444485797b1f551/limits
2025-09-14T00:29:10.3571601Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3572245Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3572710Z         BadRequestDetail: 
2025-09-14T00:29:10.3586069Z    test_name=TestAccBackupCompliancePolicy_overwriteBackupPolicies test_terraform_path=/home/runner/work/_temp/886ff2fe-02b7-438f-83c2-6d235128626d/terraform test_working_directory=/tmp/plugintest1476382401
2025-09-14T00:29:10.3596709Z --- FAIL: TestMigBackupCompliancePolicy_basic (33.89s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 35 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1150725Z === RUN   TestMigBackupCompliancePolicy_basic
2025-09-15T06:21:25.1158201Z === CONT  TestMigBackupCompliancePolicy_basic
2025-09-15T06:21:25.1242455Z === NAME  TestMigBackupCompliancePolicy_basic
2025-09-15T06:21:25.1243167Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:25.1243721Z         
2025-09-15T06:21:25.1244252Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1244749Z         
2025-09-15T06:21:25.1245114Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1245781Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1246392Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1246754Z         
2025-09-15T06:21:25.1247275Z         error getting project (68c7b042d444485797b5d793): error getting project's
2025-09-15T06:21:25.1247908Z         limits (68c7b042d444485797b5d793):
2025-09-15T06:21:25.1248559Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b042d444485797b5d793/limits
2025-09-15T06:21:25.1249292Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1249943Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1250409Z         BadRequestDetail: 
2025-09-15T06:21:25.1263846Z    test_name=TestAccBackupCompliancePolicy_update test_terraform_path=/home/runner/work/_temp/deb39966-043f-49c7-9454-b6da53a4644f/terraform test_working_directory=/tmp/plugintest1168576061
2025-09-15T06:21:25.1273281Z --- FAIL: TestMigBackupCompliancePolicy_basic (35.16s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute