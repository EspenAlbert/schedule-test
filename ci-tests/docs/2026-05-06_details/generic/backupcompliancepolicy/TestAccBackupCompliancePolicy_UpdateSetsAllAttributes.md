# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-04-09 00:40](#error-2026-04-09t0040200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-04-11 00:58](#error-2026-04-11t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-04-18 01:10](#error-2026-04-18t0110530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-04-22 01:44](#error-2026-04-22t0144310000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/69e81a4fa8d803e1612f84cd/backupCompliancePolicy | dev |  | 40.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:40+00:00
```
2026-04-07T00:46:40.4687995Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-07T00:46:40.4692965Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-07T00:46:40.4802265Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-07T00:46:40.4803630Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:46:40.4804616Z         
2026-04-07T00:46:40.4805528Z         Error: error creating project: test-acc-tf-p-7906351511382697840
2026-04-07T00:46:40.4806310Z         
2026-04-07T00:46:40.4807023Z           with mongodbatlas_project.test,
2026-04-07T00:46:40.4808311Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:40.4809503Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:40.4810173Z         
2026-04-07T00:46:40.4811340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:40.4812690Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:40.4813909Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:40.4814924Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (64.17s)
```

- 2026-04-08 PASS a minute
- 2026-04-09

### Error 2026-04-09T00:40:20+00:00
```
2026-04-09T00:40:20.3247410Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-09T00:40:20.3250976Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-09T00:40:20.3271243Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-09T00:40:20.3272471Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:20.3273492Z         
2026-04-09T00:40:20.3274248Z         Error: error creating project: test-acc-tf-p-7988753255677545395
2026-04-09T00:40:20.3274700Z         
2026-04-09T00:40:20.3275080Z           with mongodbatlas_project.test,
2026-04-09T00:40:20.3275776Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:20.3276692Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:20.3277131Z         
2026-04-09T00:40:20.3277900Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:20.3278680Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:20.3279367Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:20.3279946Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (65.34s)
```

- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T00:58:58+00:00
```
2026-04-11T00:58:58.7568497Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-11T00:58:58.7572882Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-11T00:58:58.7614801Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-11T00:58:58.7615689Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:58:58.7616464Z         
2026-04-11T00:58:58.7616986Z         Error: error creating project: test-acc-tf-p-1724356527151661290
2026-04-11T00:58:58.7617441Z         
2026-04-11T00:58:58.7617820Z           with mongodbatlas_project.test,
2026-04-11T00:58:58.7618542Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:58:58.7619234Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:58:58.7619942Z         
2026-04-11T00:58:58.7620517Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:58:58.7621280Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:58:58.7621987Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:58:58.7622586Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (65.12s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18

### Error 2026-04-18T01:10:53+00:00
```
2026-04-18T01:10:53.4608110Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-18T01:10:53.4613954Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-18T01:10:53.4636142Z    test_step_number=1 test_name=TestAccBackupCompliancePolicy_UpdateSetsAllAttributes test_terraform_path=/home/runner/work/_temp/ebd3f885-1b01-4a1c-97ba-aa0b3c49d772/terraform
2026-04-18T01:10:53.4638442Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-18T01:10:53.4639449Z         
2026-04-18T01:10:53.4640420Z         Error: error creating project: test-acc-tf-p-6926532797852680845
2026-04-18T01:10:53.4641397Z         
2026-04-18T01:10:53.4642072Z           with mongodbatlas_project.test,
2026-04-18T01:10:53.4643373Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T01:10:53.4644579Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T01:10:53.4645258Z         
2026-04-18T01:10:53.4646257Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T01:10:53.4647619Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T01:10:53.4648860Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:10:53.4649912Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (70.12s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22
  - FAIL 40 seconds

### Error 2026-04-22T01:44:31+00:00
```
2026-04-22T01:44:31.2847269Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-22T01:44:31.2849527Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-22T01:44:31.2885238Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-22T01:44:31.2886104Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running apply: exit status 1
2026-04-22T01:44:31.2886619Z         
2026-04-22T01:44:31.2888864Z         Error: error updating a Backup Compliance Policy: 69e81a4fa8d803e1612f84cd: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a4fa8d803e1612f84cd/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2890450Z         
2026-04-22T01:44:31.2891200Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2026-04-22T01:44:31.2902912Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2026-04-22T01:44:31.2903811Z           23: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2026-04-22T01:44:31.2904286Z         
2026-04-22T01:44:31.2916488Z    test_step_number=2 test_name=TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-04-22T01:44:31.2917356Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:44:31.2917911Z         
2026-04-22T01:44:31.2920381Z         Error: error disabling the Backup Compliance Policy: 69e81a4fa8d803e1612f84cd: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a4fa8d803e1612f84cd/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2922410Z         
2026-04-22T01:44:31.2922839Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (40.31s)
```

  - PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30 PASS a minute
- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05 PASS a minute
- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
