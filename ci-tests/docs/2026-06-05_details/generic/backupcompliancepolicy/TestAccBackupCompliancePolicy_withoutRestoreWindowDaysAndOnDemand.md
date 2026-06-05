# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 01:09](#error-2026-05-16t0109320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-05-21 01:04](#error-2026-05-21t0104560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-05-23 01:00](#error-2026-05-23t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-05-26 02:26](#error-2026-05-26t0226200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 42 seconds
- 2026-05-08 PASS 37 seconds
- 2026-05-09 PASS 51 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 36 seconds
- 2026-05-12 PASS 41 seconds
- 2026-05-13 PASS 42 seconds
- 2026-05-14 PASS 41 seconds
- 2026-05-15 PASS 40 seconds
- 2026-05-16

### Error 2026-05-16T01:09:32+00:00
```
2026-05-16T01:09:32.7875217Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-16T01:09:32.7878269Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-16T01:09:32.7895031Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-16T01:09:32.7895999Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-05-16T01:09:32.7896588Z         
2026-05-16T01:09:32.7897107Z         Error: error creating project: test-acc-tf-p-3852527281733839482
2026-05-16T01:09:32.7897575Z         
2026-05-16T01:09:32.7897970Z           with mongodbatlas_project.test,
2026-05-16T01:09:32.7898691Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:09:32.7899562Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:09:32.7900296Z         
2026-05-16T01:09:32.7900880Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:09:32.7901650Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:09:32.7902356Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:09:32.7903022Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (62.64s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 37 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 40 seconds
- 2026-05-21

### Error 2026-05-21T01:04:56+00:00
```
2026-05-21T01:04:56.0758918Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-21T01:04:56.0762890Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-21T01:04:56.0819192Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-21T01:04:56.0820055Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:04:56.0820642Z         
2026-05-21T01:04:56.0821159Z         Error: error creating project: test-acc-tf-p-4969369207672218552
2026-05-21T01:04:56.0821792Z         
2026-05-21T01:04:56.0822169Z           with mongodbatlas_project.test,
2026-05-21T01:04:56.0822875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:56.0823545Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:56.0823926Z         
2026-05-21T01:04:56.0824480Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:56.0825256Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:56.0825975Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:56.0826911Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (66.32s)
```

- 2026-05-22 PASS 39 seconds
- 2026-05-23

### Error 2026-05-23T01:00:54+00:00
```
2026-05-23T01:00:54.9079743Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-23T01:00:54.9084572Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-23T01:00:54.9123436Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-23T01:00:54.9124289Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:00:54.9124864Z         
2026-05-23T01:00:54.9125375Z         Error: error creating project: test-acc-tf-p-35374990278353707
2026-05-23T01:00:54.9126016Z         
2026-05-23T01:00:54.9126411Z           with mongodbatlas_project.test,
2026-05-23T01:00:54.9127132Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:54.9128593Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:54.9129003Z         
2026-05-23T01:00:54.9129576Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:54.9130342Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:54.9131036Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:54.9131698Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (68.13s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 38 seconds
- 2026-05-26

### Error 2026-05-26T02:26:20+00:00
```
2026-05-26T02:26:20.7004101Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-26T02:26:20.7007901Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-26T02:26:20.7045503Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-05-26T02:26:20.7046792Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:26:20.7047352Z         
2026-05-26T02:26:20.7047853Z         Error: error creating project: test-acc-tf-p-5978775388342887353
2026-05-26T02:26:20.7048463Z         
2026-05-26T02:26:20.7048840Z           with mongodbatlas_project.test,
2026-05-26T02:26:20.7049548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:26:20.7050217Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:26:20.7050600Z         
2026-05-26T02:26:20.7051148Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:26:20.7051894Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:26:20.7052577Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:26:20.7053211Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (73.16s)
```

- 2026-05-27 PASS 38 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 41 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 40 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 38 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 36 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 37 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 36 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 39 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 39 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
