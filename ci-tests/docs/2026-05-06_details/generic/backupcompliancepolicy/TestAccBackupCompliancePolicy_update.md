# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.05s
[2026-04-11 00:58](#error-2026-04-11t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-04-22 01:44](#error-2026-04-22t0144310000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/69e81a4fa8d803e1612f84d0/backupCompliancePolicy | dev |  | 71.00s
[2026-04-28 00:55](#error-2026-04-28t0055370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-05 01:17](#error-2026-05-05t0117250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS a minute
- 2026-04-09

### Error 2026-04-09T00:40:20+00:00
```
2026-04-09T00:40:20.3241744Z === RUN   TestAccBackupCompliancePolicy_update
2026-04-09T00:40:20.3252755Z === CONT  TestAccBackupCompliancePolicy_update
2026-04-09T00:40:20.3270877Z   
2026-04-09T00:40:20.3344598Z === NAME  TestAccBackupCompliancePolicy_update
2026-04-09T00:40:20.3345300Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:20.3345857Z         
2026-04-09T00:40:20.3346584Z         Error: error creating project: test-acc-tf-p-3915056894583178000
2026-04-09T00:40:20.3347141Z         
2026-04-09T00:40:20.3347511Z           with mongodbatlas_project.test,
2026-04-09T00:40:20.3348205Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:20.3348863Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:20.3349246Z         
2026-04-09T00:40:20.3349793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:20.3350523Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:20.3351209Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:20.3351732Z --- FAIL: TestAccBackupCompliancePolicy_update (115.54s)
```

- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T00:58:58+00:00
```
2026-04-11T00:58:58.7562540Z === RUN   TestAccBackupCompliancePolicy_update
2026-04-11T00:58:58.7573484Z === CONT  TestAccBackupCompliancePolicy_update
2026-04-11T00:58:58.7591882Z   
2026-04-11T00:58:58.7592942Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:58:58.7594012Z         
2026-04-11T00:58:58.7594907Z         Error: error creating project: test-acc-tf-p-1995219819303087268
2026-04-11T00:58:58.7595395Z         
2026-04-11T00:58:58.7595785Z           with mongodbatlas_project.test,
2026-04-11T00:58:58.7596521Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:58:58.7597207Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:58:58.7597620Z         
2026-04-11T00:58:58.7598193Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:58:58.7599195Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:58:58.7600749Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:58:58.7601313Z --- FAIL: TestAccBackupCompliancePolicy_update (63.07s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22
  - FAIL a minute

### Error 2026-04-22T01:44:31+00:00
```
2026-04-22T01:44:31.2844285Z === RUN   TestAccBackupCompliancePolicy_update
2026-04-22T01:44:31.2849094Z === CONT  TestAccBackupCompliancePolicy_update
2026-04-22T01:44:31.2957294Z === NAME  TestAccBackupCompliancePolicy_update
2026-04-22T01:44:31.2958178Z     resource_backup_compliance_policy_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:44:31.2959044Z         
2026-04-22T01:44:31.2961835Z         Error: error disabling the Backup Compliance Policy: 69e81a4fa8d803e1612f84d0: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a4fa8d803e1612f84d0/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2963597Z         
2026-04-22T01:44:31.2963945Z --- FAIL: TestAccBackupCompliancePolicy_update (71.00s)
```

  - PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28

### Error 2026-04-28T00:55:37+00:00
```
2026-04-28T00:55:37.5410346Z === RUN   TestAccBackupCompliancePolicy_update
2026-04-28T00:55:37.5421460Z === CONT  TestAccBackupCompliancePolicy_update
2026-04-28T00:55:37.5442836Z   
2026-04-28T00:55:37.5443982Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-04-28T00:55:37.5444905Z         
2026-04-28T00:55:37.5445915Z         Error: error creating project: test-acc-tf-p-6659433481216891736
2026-04-28T00:55:37.5446684Z         
2026-04-28T00:55:37.5447328Z           with mongodbatlas_project.test,
2026-04-28T00:55:37.5448538Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-28T00:55:37.5449634Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-28T00:55:37.5450271Z         
2026-04-28T00:55:37.5451197Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-28T00:55:37.5452470Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-28T00:55:37.5453648Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:55:37.5454504Z --- FAIL: TestAccBackupCompliancePolicy_update (64.08s)
```

- 2026-04-29 PASS a minute
- 2026-04-30 PASS a minute
- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T01:17:25+00:00
```
2026-05-05T01:17:25.8587296Z === RUN   TestAccBackupCompliancePolicy_update
2026-05-05T01:17:25.8597619Z === CONT  TestAccBackupCompliancePolicy_update
2026-05-05T01:17:25.8610245Z    test_working_directory=/tmp/plugintest3321161356
2026-05-05T01:17:25.8631643Z === NAME  TestAccBackupCompliancePolicy_update
2026-05-05T01:17:25.8632351Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-05-05T01:17:25.8632916Z         
2026-05-05T01:17:25.8633420Z         Error: error creating project: test-acc-tf-p-6666271787343406388
2026-05-05T01:17:25.8633857Z         
2026-05-05T01:17:25.8634226Z           with mongodbatlas_project.test,
2026-05-05T01:17:25.8634937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T01:17:25.8635606Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T01:17:25.8636112Z         
2026-05-05T01:17:25.8636677Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T01:17:25.8637712Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T01:17:25.8638400Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:17:25.8638914Z --- FAIL: TestAccBackupCompliancePolicy_update (68.10s)
```

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
