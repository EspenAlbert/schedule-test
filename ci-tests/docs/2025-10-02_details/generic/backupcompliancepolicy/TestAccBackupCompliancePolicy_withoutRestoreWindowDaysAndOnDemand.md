# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a2341d8a498776149f/limits | qa | flaky_500 | 33.03s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c341411d835e95b1a20/limits | qa | flaky_500 | 33.04s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041d444485797b5d423/limits | qa | flaky_500 | 36.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 37 seconds
- 2025-09-04 PASS 36 seconds
- 2025-09-05 PASS 34 seconds
- 2025-09-06 PASS 36 seconds
- 2025-09-07 PASS 36 seconds
- 2025-09-08
  - PASS 37 seconds
  - FAIL 33 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4137511Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-08T09:32:52.4142106Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-08T09:32:52.4199973Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-08T09:32:52.4200816Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2025-09-08T09:32:52.4201607Z         
2025-09-08T09:32:52.4202078Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4202487Z         
2025-09-08T09:32:52.4202860Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4203548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4204171Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4204535Z         
2025-09-08T09:32:52.4205054Z         error getting project (68bea2a2341d8a498776149f): error getting project's
2025-09-08T09:32:52.4205630Z         limits (68bea2a2341d8a498776149f):
2025-09-08T09:32:52.4206453Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a2341d8a498776149f/limits
2025-09-08T09:32:52.4207209Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4207865Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4208336Z         BadRequestDetail: 
2025-09-08T09:32:52.4208841Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (33.34s)
```

  - PASS 36 seconds
- 2025-09-09 PASS 37 seconds
- 2025-09-10 PASS 37 seconds
- 2025-09-11 PASS 38 seconds
- 2025-09-12 PASS 38 seconds
- 2025-09-13 PASS 36 seconds
- 2025-09-14

### Error 2025-09-14T00:29:10+00:00
```
2025-09-14T00:29:10.3504315Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-14T00:29:10.3509179Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-14T00:29:10.3523021Z    test_working_directory=/tmp/plugintest3697890968 test_step_number=1
2025-09-14T00:29:10.3546901Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-14T00:29:10.3547984Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:29:10.3548508Z         
2025-09-14T00:29:10.3548968Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3549390Z         
2025-09-14T00:29:10.3549748Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3550418Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3551028Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3551389Z         
2025-09-14T00:29:10.3551899Z         error getting project (68c60c341411d835e95b1a20): error getting project's
2025-09-14T00:29:10.3552421Z         limits (68c60c341411d835e95b1a20):
2025-09-14T00:29:10.3553197Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c341411d835e95b1a20/limits
2025-09-14T00:29:10.3553955Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3554610Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3555068Z         BadRequestDetail: 
2025-09-14T00:29:10.3555570Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (33.44s)
```

- 2025-09-15
  - PASS 37 seconds
  - FAIL 36 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1155797Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-15T06:21:25.1160551Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-15T06:21:25.1177082Z   
2025-09-15T06:21:25.1288006Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-15T06:21:25.1288783Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:21:25.1289302Z         
2025-09-15T06:21:25.1289750Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1290148Z         
2025-09-15T06:21:25.1290511Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1291178Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1291786Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1292155Z         
2025-09-15T06:21:25.1292669Z         error getting project (68c7b041d444485797b5d423): error getting project's
2025-09-15T06:21:25.1293201Z         limits (68c7b041d444485797b5d423):
2025-09-15T06:21:25.1293843Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041d444485797b5d423/limits
2025-09-15T06:21:25.1294586Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1295240Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1295703Z         BadRequestDetail: 
2025-09-15T06:21:25.1296195Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.29s)
```

- 2025-09-16 PASS 37 seconds
- 2025-09-17 PASS 38 seconds
- 2025-09-18 PASS 36 seconds
- 2025-09-19 PASS 40 seconds
- 2025-09-20 PASS 36 seconds
- 2025-09-21 PASS 34 seconds
- 2025-09-22 PASS 34 seconds
- 2025-09-23 PASS 35 seconds
- 2025-09-24 PASS 36 seconds
- 2025-09-25 PASS 38 seconds
- 2025-09-26 PASS 39 seconds
- 2025-09-27 PASS 36 seconds
- 2025-09-28 PASS 37 seconds
- 2025-09-29 PASS 38 seconds
- 2025-09-30
  - PASS 40 seconds
  - PASS 35 seconds
  - PASS 39 seconds
- 2025-10-01
  - PASS 35 seconds
  - PASS 36 seconds
  - PASS 36 seconds
  - PASS 38 seconds
  - PASS 38 seconds
  - PASS 36 seconds
  - PASS 36 seconds
  - PASS 36 seconds
- 2025-10-02 PASS 36 seconds