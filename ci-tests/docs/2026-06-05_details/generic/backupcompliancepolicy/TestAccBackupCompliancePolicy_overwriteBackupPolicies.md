# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.08s
[2026-05-19 01:02](#error-2026-05-19t0102320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-05-21 01:04](#error-2026-05-21t0104560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-23 01:00](#error-2026-05-23t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09

### Error 2026-05-09T00:57:12+00:00
```
2026-05-09T00:57:12.3120272Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-09T00:57:12.3126453Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-09T00:57:12.3200855Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-09T00:57:12.3201944Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:57:12.3203073Z         
2026-05-09T00:57:12.3203601Z         Error: error creating project: test-acc-tf-p-2723251247237854076
2026-05-09T00:57:12.3204069Z         
2026-05-09T00:57:12.3204450Z           with mongodbatlas_project.test,
2026-05-09T00:57:12.3205185Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:12.3206225Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:12.3206632Z         
2026-05-09T00:57:12.3207205Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:12.3207997Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:12.3208719Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:12.3209331Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (77.84s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 41 minutes
- 2026-05-15 PASS 16 minutes
- 2026-05-16 PASS 15 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19

### Error 2026-05-19T01:02:32+00:00
```
2026-05-19T01:02:32.3923418Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-19T01:02:32.3930508Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-19T01:02:32.3945195Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-19T01:02:32.3946357Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:02:32.3947151Z         
2026-05-19T01:02:32.3947892Z         Error: error creating project: test-acc-tf-p-697359648197382254
2026-05-19T01:02:32.3948520Z         
2026-05-19T01:02:32.3948938Z           with mongodbatlas_project.test,
2026-05-19T01:02:32.3949824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:02:32.3950455Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:02:32.3950930Z         
2026-05-19T01:02:32.3951463Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:02:32.3952150Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:02:32.3952782Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:32.3953336Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (64.24s)
```

- 2026-05-20 PASS 17 minutes
- 2026-05-21

### Error 2026-05-21T01:04:56+00:00
```
2026-05-21T01:04:56.0756674Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-21T01:04:56.0764225Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-21T01:04:56.0779383Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-21T01:04:56.0780685Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:56.0781763Z         
2026-05-21T01:04:56.0782370Z         Error: error creating project: test-acc-tf-p-7819175601020591082
2026-05-21T01:04:56.0783170Z         
2026-05-21T01:04:56.0783745Z           with mongodbatlas_project.test,
2026-05-21T01:04:56.0784683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:56.0785592Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:56.0786708Z         
2026-05-21T01:04:56.0787525Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:56.0788495Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:56.0789321Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:56.0790166Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (64.11s)
```

- 2026-05-22 PASS 21 minutes
- 2026-05-23

### Error 2026-05-23T01:00:54+00:00
```
2026-05-23T01:00:54.9077579Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-23T01:00:54.9085278Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-23T01:00:54.9100304Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-05-23T01:00:54.9101557Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:00:54.9102872Z         
2026-05-23T01:00:54.9103680Z         Error: error creating project: test-acc-tf-p-7419296788721739488
2026-05-23T01:00:54.9104171Z         
2026-05-23T01:00:54.9104572Z           with mongodbatlas_project.test,
2026-05-23T01:00:54.9105301Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:54.9106049Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:54.9106685Z         
2026-05-23T01:00:54.9107266Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:54.9108037Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:54.9108740Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:54.9109351Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (67.51s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 19 minutes
- 2026-05-26 PASS 18 minutes
- 2026-05-27 PASS 40 minutes
- 2026-05-28 PASS 22 minutes
- 2026-05-29 PASS 18 minutes
- 2026-05-30 PASS 16 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 29 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 43 minutes
- 2026-06-05 PASS 19 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 20 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
