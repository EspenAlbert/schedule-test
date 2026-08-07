# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-07-11 00:44](#error-2026-07-11t0044540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s
[2026-07-16 00:44](#error-2026-07-16t0044280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-07-21 00:46](#error-2026-07-21t0046230000) |  | dev | flaky_500 | 32.01s
[2026-07-23 00:47](#error-2026-07-23t0047380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:19+00:00
```
2026-07-09T01:15:19.7698538Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-09T01:15:19.7701891Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-09T01:15:19.7760733Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-09T01:15:19.7761587Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-07-09T01:15:19.7762167Z         
2026-07-09T01:15:19.7762691Z         Error: error creating project: test-acc-tf-p-6065146067039767631
2026-07-09T01:15:19.7763155Z         
2026-07-09T01:15:19.7763558Z           with mongodbatlas_project.test,
2026-07-09T01:15:19.7764286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:15:19.7765188Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:15:19.7765599Z         
2026-07-09T01:15:19.7766185Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:15:19.7766954Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:15:19.7767668Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:19.7768326Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (67.85s)
```

- 2026-07-10 PASS 39 seconds
- 2026-07-11

### Error 2026-07-11T00:44:54+00:00
```
2026-07-11T00:44:54.1655795Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-11T00:44:54.1660158Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-11T00:44:54.1721663Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-11T00:44:54.1722526Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:44:54.1723112Z         
2026-07-11T00:44:54.1723662Z         Error: error creating project: test-acc-tf-p-1773832444179825500
2026-07-11T00:44:54.1724139Z         
2026-07-11T00:44:54.1724549Z           with mongodbatlas_project.test,
2026-07-11T00:44:54.1725296Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:54.1726169Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:54.1726715Z         
2026-07-11T00:44:54.1727302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:54.1728082Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:54.1728786Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:54.1729456Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (73.71s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 38 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 38 seconds
- 2026-07-16

### Error 2026-07-16T00:44:28+00:00
```
2026-07-16T00:44:28.9562362Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-16T00:44:28.9568115Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-16T00:44:28.9609562Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-16T00:44:28.9610781Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:44:28.9611390Z         
2026-07-16T00:44:28.9611947Z         Error: error creating project: test-acc-tf-p-9049175845830542882
2026-07-16T00:44:28.9612428Z         
2026-07-16T00:44:28.9612844Z           with mongodbatlas_project.test,
2026-07-16T00:44:28.9613631Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:28.9614395Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:28.9614816Z         
2026-07-16T00:44:28.9615436Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:28.9616261Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:28.9617027Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:28.9617727Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (66.27s)
```

- 2026-07-17 PASS 39 seconds
- 2026-07-18 PASS 44 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:23+00:00
```
2026-07-21T00:46:23.9067453Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-21T00:46:23.9072668Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-21T00:46:23.9095521Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-21T00:46:23.9096699Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:46:23.9097412Z         
2026-07-21T00:46:23.9098112Z         Error: error creating project: test-acc-tf-p-302289158867750942
2026-07-21T00:46:23.9098688Z         
2026-07-21T00:46:23.9099086Z           with mongodbatlas_project.test,
2026-07-21T00:46:23.9099774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:46:23.9100587Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:46:23.9100997Z         
2026-07-21T00:46:23.9101563Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-21T00:46:23.9102054Z         type
2026-07-21T00:46:23.9109198Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (32.08s)
```

- 2026-07-22 PASS 40 seconds
- 2026-07-23

### Error 2026-07-23T00:47:38+00:00
```
2026-07-23T00:47:38.5828346Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-23T00:47:38.5832034Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-23T00:47:38.5921411Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-07-23T00:47:38.5922290Z     resource_backup_compliance_policy_test.go:105: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:47:38.5922885Z         
2026-07-23T00:47:38.5923411Z         Error: error creating project: test-acc-tf-p-2537104501870748137
2026-07-23T00:47:38.5923881Z         
2026-07-23T00:47:38.5924276Z           with mongodbatlas_project.test,
2026-07-23T00:47:38.5925019Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:47:38.5925707Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:47:38.5926117Z         
2026-07-23T00:47:38.5926689Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:47:38.5927468Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:47:38.5928332Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:38.5929001Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (68.01s)
```

- 2026-07-24 PASS 35 seconds
- 2026-07-25 PASS 36 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 37 seconds
- 2026-07-28 PASS 37 seconds
- 2026-07-29 PASS 38 seconds
- 2026-07-30 PASS 36 seconds
- 2026-07-31 PASS 39 seconds
- 2026-08-01 PASS 38 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 40 seconds
- 2026-08-04 PASS 37 seconds
- 2026-08-05 PASS 38 seconds
- 2026-08-06 PASS 36 seconds
- 2026-08-07 PASS 38 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 36 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 37 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 36 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 38 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 35 seconds
  - PASS 39 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 40 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
