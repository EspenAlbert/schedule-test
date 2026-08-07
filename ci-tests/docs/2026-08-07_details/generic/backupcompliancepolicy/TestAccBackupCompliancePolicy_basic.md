# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-11 00:44](#error-2026-07-11t0044540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.08s
[2026-07-21 00:46](#error-2026-07-21t0046230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:19+00:00
```
2026-07-09T01:15:19.7694880Z === RUN   TestAccBackupCompliancePolicy_basic
2026-07-09T01:15:19.7701258Z === CONT  TestAccBackupCompliancePolicy_basic
2026-07-09T01:15:19.7720852Z === NAME  TestAccBackupCompliancePolicy_basic
2026-07-09T01:15:19.7721621Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:15:19.7722218Z         
2026-07-09T01:15:19.7722760Z         Error: error creating project: test-acc-tf-p-1819137955529836796
2026-07-09T01:15:19.7723274Z         
2026-07-09T01:15:19.7723684Z           with mongodbatlas_project.test,
2026-07-09T01:15:19.7724424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:15:19.7725379Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:15:19.7725803Z         
2026-07-09T01:15:19.7726388Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:15:19.7727164Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:15:19.7727888Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:19.7728446Z --- FAIL: TestAccBackupCompliancePolicy_basic (62.63s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:44:54+00:00
```
2026-07-11T00:44:54.1650212Z === RUN   TestAccBackupCompliancePolicy_basic
2026-07-11T00:44:54.1659343Z === CONT  TestAccBackupCompliancePolicy_basic
2026-07-11T00:44:54.1742886Z === NAME  TestAccBackupCompliancePolicy_basic
2026-07-11T00:44:54.1743617Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:44:54.1744215Z         
2026-07-11T00:44:54.1744757Z         Error: error creating project: test-acc-tf-p-1034258861607741458
2026-07-11T00:44:54.1745228Z         
2026-07-11T00:44:54.1745629Z           with mongodbatlas_project.test,
2026-07-11T00:44:54.1746594Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:54.1747316Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:54.1747739Z         
2026-07-11T00:44:54.1748327Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:54.1749102Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:54.1749817Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:54.1750355Z --- FAIL: TestAccBackupCompliancePolicy_basic (88.76s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:23+00:00
```
2026-07-21T00:46:23.9063224Z === RUN   TestAccBackupCompliancePolicy_basic
2026-07-21T00:46:23.9070315Z === CONT  TestAccBackupCompliancePolicy_basic
2026-07-21T00:46:23.9161272Z === NAME  TestAccBackupCompliancePolicy_basic
2026-07-21T00:46:23.9162214Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:46:23.9163030Z         
2026-07-21T00:46:23.9163760Z         Error: error creating project: test-acc-tf-p-2171588100636110994
2026-07-21T00:46:23.9164416Z         
2026-07-21T00:46:23.9164813Z           with mongodbatlas_project.test,
2026-07-21T00:46:23.9165497Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:46:23.9166585Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:46:23.9167141Z         
2026-07-21T00:46:23.9167944Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:46:23.9168856Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:46:23.9169516Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:23.9170047Z --- FAIL: TestAccBackupCompliancePolicy_basic (104.25s)
```

- 2026-07-22 PASS a minute
- 2026-07-23 PASS 2 minutes
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
