# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:56](#error-2026-02-24t0056490000) |  | dev | flaky_500 | 1192.05s
[2026-03-03 00:42](#error-2026-03-03t0042230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 16 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 16 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 15 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 16 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 34 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 28 minutes
- 2026-02-20 PASS 18 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:56:49+00:00
```
2026-02-24T00:56:49.8373475Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-24T00:56:49.8380993Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-24T00:56:49.8401311Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-24T00:56:49.8402424Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:49.8403249Z         
2026-02-24T00:56:49.8404378Z         Error: error creating a Cloud Backup Schedule: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:49.8405022Z         
2026-02-24T00:56:49.8405474Z           with mongodbatlas_cloud_backup_schedule.test,
2026-02-24T00:56:49.8406564Z           on terraform_plugin_test.tf line 57, in resource "mongodbatlas_cloud_backup_schedule" "test":
2026-02-24T00:56:49.8407392Z           57: 	  resource "mongodbatlas_cloud_backup_schedule" "test" {
2026-02-24T00:56:49.8408065Z         
2026-02-24T00:56:49.8408559Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (1192.52s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 21 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 18 minutes
- 2026-03-03

### Error 2026-03-03T00:42:23+00:00
```
2026-03-03T00:42:23.0827253Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-03-03T00:42:23.0835028Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-03-03T00:42:23.0849561Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-03-03T00:42:23.0850486Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-03-03T00:42:23.0851213Z         
2026-03-03T00:42:23.0852028Z         Error: error creating project: test-acc-tf-p-9057335205964476903
2026-03-03T00:42:23.0852637Z         
2026-03-03T00:42:23.0853029Z           with mongodbatlas_project.test,
2026-03-03T00:42:23.0853942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-03-03T00:42:23.0854733Z           12: 		resource "mongodbatlas_project" "test" {
2026-03-03T00:42:23.0855226Z         
2026-03-03T00:42:23.0855913Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T00:42:23.0856838Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T00:42:23.0857700Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:42:23.0858439Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (67.48s)
```

- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 24 minutes
- 2026-03-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 20 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 15 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
