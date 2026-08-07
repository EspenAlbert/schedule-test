# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.04s
[2026-07-11 00:44](#error-2026-07-11t0044540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.02s
[2026-07-21 00:46](#error-2026-07-21t0046230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-07-23 00:47](#error-2026-07-23t0047380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:19+00:00
```
2026-07-09T01:15:19.7696080Z === RUN   TestAccBackupCompliancePolicy_update
2026-07-09T01:15:19.7703220Z === CONT  TestAccBackupCompliancePolicy_update
2026-07-09T01:15:19.7782129Z === NAME  TestAccBackupCompliancePolicy_update
2026-07-09T01:15:19.7782862Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:15:19.7783442Z         
2026-07-09T01:15:19.7783974Z         Error: error creating project: test-acc-tf-p-8623622856993994574
2026-07-09T01:15:19.7784452Z         
2026-07-09T01:15:19.7785191Z           with mongodbatlas_project.test,
2026-07-09T01:15:19.7785925Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:15:19.7786608Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:15:19.7787020Z         
2026-07-09T01:15:19.7787596Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:15:19.7788373Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:15:19.7789079Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:19.7789626Z --- FAIL: TestAccBackupCompliancePolicy_update (96.40s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:44:54+00:00
```
2026-07-11T00:44:54.1652542Z === RUN   TestAccBackupCompliancePolicy_update
2026-07-11T00:44:54.1662706Z === CONT  TestAccBackupCompliancePolicy_update
2026-07-11T00:44:54.1677674Z    test_working_directory=/tmp/plugintest1261625225 test_step_number=1 test_name=TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-07-11T00:44:54.1765732Z === NAME  TestAccBackupCompliancePolicy_update
2026-07-11T00:44:54.1766649Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:44:54.1767255Z         
2026-07-11T00:44:54.1767800Z         Error: error creating project: test-acc-tf-p-2639897479169343200
2026-07-11T00:44:54.1768275Z         
2026-07-11T00:44:54.1768683Z           with mongodbatlas_project.test,
2026-07-11T00:44:54.1769427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:54.1770124Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:54.1770551Z         
2026-07-11T00:44:54.1771141Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:54.1771916Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:54.1772626Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:54.1773172Z --- FAIL: TestAccBackupCompliancePolicy_update (92.16s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:23+00:00
```
2026-07-21T00:46:23.9064352Z === RUN   TestAccBackupCompliancePolicy_update
2026-07-21T00:46:23.9071916Z === CONT  TestAccBackupCompliancePolicy_update
2026-07-21T00:46:23.9141363Z === NAME  TestAccBackupCompliancePolicy_update
2026-07-21T00:46:23.9142040Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:46:23.9142584Z         
2026-07-21T00:46:23.9143087Z         Error: error creating project: test-acc-tf-p-5753330823043231962
2026-07-21T00:46:23.9143530Z         
2026-07-21T00:46:23.9143928Z           with mongodbatlas_project.test,
2026-07-21T00:46:23.9144612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:46:23.9145250Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:46:23.9145643Z         
2026-07-21T00:46:23.9146190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:46:23.9146975Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:46:23.9147640Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:23.9148153Z --- FAIL: TestAccBackupCompliancePolicy_update (68.49s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:47:38+00:00
```
2026-07-23T00:47:38.5825049Z === RUN   TestAccBackupCompliancePolicy_update
2026-07-23T00:47:38.5833669Z === CONT  TestAccBackupCompliancePolicy_update
2026-07-23T00:47:38.5846995Z   
2026-07-23T00:47:38.5847637Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:47:38.5848217Z         
2026-07-23T00:47:38.5848752Z         Error: error creating project: test-acc-tf-p-7603020286152154069
2026-07-23T00:47:38.5849220Z         
2026-07-23T00:47:38.5850066Z           with mongodbatlas_project.test,
2026-07-23T00:47:38.5850847Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:47:38.5851536Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:47:38.5851948Z         
2026-07-23T00:47:38.5852527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:47:38.5853309Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:47:38.5854017Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:38.5854559Z --- FAIL: TestAccBackupCompliancePolicy_update (62.93s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
