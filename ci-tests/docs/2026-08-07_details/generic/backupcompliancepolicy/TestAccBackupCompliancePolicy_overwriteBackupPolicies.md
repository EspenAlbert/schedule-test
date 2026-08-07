# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:44](#error-2026-07-11t0044540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-14 00:43](#error-2026-07-14t0043240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-16 00:44](#error-2026-07-16t0044280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.09s
[2026-07-21 00:46](#error-2026-07-21t0046230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-07-23 00:47](#error-2026-07-23t0047380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 26 minutes
- 2026-07-10 PASS 31 minutes
- 2026-07-11

### Error 2026-07-11T00:44:54+00:00
```
2026-07-11T00:44:54.1653927Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-11T00:44:54.1661946Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-11T00:44:54.1678492Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-11T00:44:54.1679344Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:44:54.1679955Z         
2026-07-11T00:44:54.1680523Z         Error: error creating project: test-acc-tf-p-519995269213609279
2026-07-11T00:44:54.1681007Z         
2026-07-11T00:44:54.1681433Z           with mongodbatlas_project.test,
2026-07-11T00:44:54.1682183Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:54.1682880Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:54.1683311Z         
2026-07-11T00:44:54.1683907Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:54.1684690Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:54.1685400Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:54.1686023Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (64.85s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 15 minutes
- 2026-07-14

### Error 2026-07-14T00:43:24+00:00
```
2026-07-14T00:43:24.8820597Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-14T00:43:24.8827840Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-14T00:43:24.8845182Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-14T00:43:24.8846325Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:43:24.8846928Z         
2026-07-14T00:43:24.8847464Z         Error: error creating project: test-acc-tf-p-3435785155238884159
2026-07-14T00:43:24.8847941Z         
2026-07-14T00:43:24.8848332Z           with mongodbatlas_project.test,
2026-07-14T00:43:24.8849072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:24.8849751Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:24.8850461Z         
2026-07-14T00:43:24.8851060Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:24.8851832Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:24.8852541Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:24.8853156Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (62.16s)
```

- 2026-07-15 PASS 17 minutes
- 2026-07-16

### Error 2026-07-16T00:44:28+00:00
```
2026-07-16T00:44:28.9559731Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-16T00:44:28.9570494Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-16T00:44:28.9632873Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-16T00:44:28.9633716Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:28.9634305Z         
2026-07-16T00:44:28.9634835Z         Error: error creating project: test-acc-tf-p-737642338871183477
2026-07-16T00:44:28.9635305Z         
2026-07-16T00:44:28.9635705Z           with mongodbatlas_project.test,
2026-07-16T00:44:28.9636483Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:28.9637213Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:28.9637639Z         
2026-07-16T00:44:28.9638241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:28.9639059Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:28.9640199Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:28.9640848Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (108.95s)
```

- 2026-07-17 PASS 17 minutes
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:23+00:00
```
2026-07-21T00:46:23.9065717Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-21T00:46:23.9070933Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-21T00:46:23.9121742Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-21T00:46:23.9122465Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:46:23.9123004Z         
2026-07-21T00:46:23.9123505Z         Error: error creating project: test-acc-tf-p-5076892182204523848
2026-07-21T00:46:23.9123950Z         
2026-07-21T00:46:23.9124348Z           with mongodbatlas_project.test,
2026-07-21T00:46:23.9125068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:46:23.9125701Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:46:23.9126101Z         
2026-07-21T00:46:23.9126935Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:46:23.9127751Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:46:23.9128397Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:23.9128967Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (63.91s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:47:38+00:00
```
2026-07-23T00:47:38.5826752Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-23T00:47:38.5832636Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-23T00:47:38.5890678Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-23T00:47:38.5891476Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:47:38.5892048Z         
2026-07-23T00:47:38.5892570Z         Error: error creating project: test-acc-tf-p-2830379029847458945
2026-07-23T00:47:38.5893031Z         
2026-07-23T00:47:38.5893424Z           with mongodbatlas_project.test,
2026-07-23T00:47:38.5894151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:47:38.5894830Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:47:38.5895227Z         
2026-07-23T00:47:38.5895799Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:47:38.5896566Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:47:38.5897280Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:38.5897882Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (65.17s)
```

- 2026-07-24 PASS 24 minutes
- 2026-07-25 PASS 18 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 52 minutes
- 2026-07-29 PASS 19 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 17 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 20 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
