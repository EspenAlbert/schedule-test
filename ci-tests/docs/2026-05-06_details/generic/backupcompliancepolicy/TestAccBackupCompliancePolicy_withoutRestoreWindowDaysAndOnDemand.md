# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-04-09 00:40](#error-2026-04-09t0040200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-04-11 00:58](#error-2026-04-11t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.03s
[2026-04-18 01:10](#error-2026-04-18t0110530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.02s
[2026-04-22 01:44](#error-2026-04-22t0144310000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/69e81a4fa8d803e1612f8611/backupCompliancePolicy | dev | flaky_500 | 37.08s
[2026-05-05 01:17](#error-2026-05-05t0117250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:40+00:00
```
2026-04-07T00:46:40.4685880Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-07T00:46:40.4690942Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-07T00:46:40.4753658Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-07T00:46:40.4755392Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-04-07T00:46:40.4756394Z         
2026-04-07T00:46:40.4769575Z         Error: error creating project: test-acc-tf-p-5952352966144667909
2026-04-07T00:46:40.4770389Z         
2026-04-07T00:46:40.4771278Z           with mongodbatlas_project.test,
2026-04-07T00:46:40.4772585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:40.4773733Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:40.4774372Z         
2026-04-07T00:46:40.4775364Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:40.4776707Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:40.4777929Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:40.4779054Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (64.02s)
```

- 2026-04-08 PASS 40 seconds
- 2026-04-09

### Error 2026-04-09T00:40:20+00:00
```
2026-04-09T00:40:20.3245107Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-09T00:40:20.3249945Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-09T00:40:20.3303920Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-09T00:40:20.3304762Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:40:20.3305328Z         
2026-04-09T00:40:20.3305821Z         Error: error creating project: test-acc-tf-p-337193823387737469
2026-04-09T00:40:20.3306267Z         
2026-04-09T00:40:20.3307010Z           with mongodbatlas_project.test,
2026-04-09T00:40:20.3307733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:20.3308390Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:20.3308784Z         
2026-04-09T00:40:20.3309334Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:20.3310067Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:20.3310744Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:20.3311378Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (67.78s)
```

- 2026-04-10 PASS 39 seconds
- 2026-04-11

### Error 2026-04-11T00:58:58+00:00
```
2026-04-11T00:58:58.7566055Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-11T00:58:58.7571453Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-11T00:58:58.7636958Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-11T00:58:58.7637827Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:58:58.7638403Z         
2026-04-11T00:58:58.7638918Z         Error: error creating project: test-acc-tf-p-8147246891503424835
2026-04-11T00:58:58.7639600Z         
2026-04-11T00:58:58.7640007Z           with mongodbatlas_project.test,
2026-04-11T00:58:58.7640746Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:58:58.7641436Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:58:58.7641830Z         
2026-04-11T00:58:58.7642400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:58:58.7643172Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:58:58.7643875Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:58:58.7644531Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (92.28s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 39 seconds
- 2026-04-14 PASS 43 seconds
- 2026-04-15 PASS 39 seconds
- 2026-04-16 PASS 45 seconds
- 2026-04-17 PASS 39 seconds
- 2026-04-18

### Error 2026-04-18T01:10:53+00:00
```
2026-04-18T01:10:53.4605834Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-18T01:10:53.4611139Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-18T01:10:53.4674832Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-18T01:10:53.4676339Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-04-18T01:10:53.4677332Z         
2026-04-18T01:10:53.4678230Z         Error: error creating project: test-acc-tf-p-2308558644184190492
2026-04-18T01:10:53.4679206Z         
2026-04-18T01:10:53.4679880Z           with mongodbatlas_project.test,
2026-04-18T01:10:53.4681358Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T01:10:53.4682569Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T01:10:53.4683243Z         
2026-04-18T01:10:53.4684243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T01:10:53.4685604Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T01:10:53.4686842Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:10:53.4688010Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (95.21s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 40 seconds
- 2026-04-21 PASS 41 seconds
- 2026-04-22
  - FAIL 37 seconds

### Error 2026-04-22T01:44:31+00:00
```
2026-04-22T01:44:31.2846137Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-22T01:44:31.2850065Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-22T01:44:31.2863967Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-04-22T01:44:31.2864983Z     resource_backup_compliance_policy_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:44:31.2865594Z         
2026-04-22T01:44:31.2868000Z         Error: error disabling the Backup Compliance Policy: 69e81a4fa8d803e1612f8611: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a4fa8d803e1612f8611/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2869610Z         
2026-04-22T01:44:31.2870033Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (37.75s)
```

  - PASS 38 seconds
- 2026-04-23 PASS 40 seconds
- 2026-04-24 PASS 40 seconds
- 2026-04-25 PASS 57 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 38 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 40 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 40 seconds
- 2026-05-02 PASS 42 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 40 seconds
- 2026-05-05

### Error 2026-05-05T01:17:25+00:00
```
2026-05-05T01:17:25.8590842Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-05T01:17:25.8595346Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-05T01:17:25.8610786Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-05T01:17:25.8611641Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-05-05T01:17:25.8612219Z         
2026-05-05T01:17:25.8612729Z         Error: error creating project: test-acc-tf-p-7967146458743003612
2026-05-05T01:17:25.8613179Z         
2026-05-05T01:17:25.8613559Z           with mongodbatlas_project.test,
2026-05-05T01:17:25.8614283Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T01:17:25.8614959Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T01:17:25.8615347Z         
2026-05-05T01:17:25.8615911Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T01:17:25.8616682Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T01:17:25.8617677Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:17:25.8618323Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (67.86s)
```

- 2026-05-06 PASS 39 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 38 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 36 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 38 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 38 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 36 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 35 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 36 seconds
