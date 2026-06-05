# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-16 01:09](#error-2026-05-16t0109320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-21 01:04](#error-2026-05-21t0104560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s
[2026-05-26 02:26](#error-2026-05-26t0226200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s
[2026-05-28 01:18](#error-2026-05-28t0118520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-30 01:16](#error-2026-05-30t0116430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T00:57:12+00:00
```
2026-05-09T00:57:12.3114164Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-09T00:57:12.3124543Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-09T00:57:12.3141881Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-09T00:57:12.3142619Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:57:12.3143212Z         
2026-05-09T00:57:12.3144047Z         Error: error creating project: test-acc-tf-p-3050019420759551921
2026-05-09T00:57:12.3144720Z         
2026-05-09T00:57:12.3145320Z           with mongodbatlas_project.test,
2026-05-09T00:57:12.3146581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:12.3147483Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:12.3148072Z         
2026-05-09T00:57:12.3148852Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:12.3149807Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:12.3150723Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:12.3151455Z --- FAIL: TestAccBackupCompliancePolicy_basic (67.20s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T01:09:32+00:00
```
2026-05-16T01:09:32.7871173Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-16T01:09:32.7877693Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-16T01:09:32.7916854Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-16T01:09:32.7917589Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-16T01:09:32.7918345Z         
2026-05-16T01:09:32.7918862Z         Error: error creating project: test-acc-tf-p-1562635370167473953
2026-05-16T01:09:32.7919330Z         
2026-05-16T01:09:32.7919994Z           with mongodbatlas_project.test,
2026-05-16T01:09:32.7920733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:09:32.7921412Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:09:32.7921815Z         
2026-05-16T01:09:32.7922387Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:09:32.7923160Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:09:32.7923861Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:09:32.7924397Z --- FAIL: TestAccBackupCompliancePolicy_basic (63.32s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21

### Error 2026-05-21T01:04:56+00:00
```
2026-05-21T01:04:56.0753335Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-21T01:04:56.0762251Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-21T01:04:56.0860244Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-21T01:04:56.0860943Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:56.0861495Z         
2026-05-21T01:04:56.0861992Z         Error: error creating project: test-acc-tf-p-1523517645107650849
2026-05-21T01:04:56.0862437Z         
2026-05-21T01:04:56.0862808Z           with mongodbatlas_project.test,
2026-05-21T01:04:56.0863511Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:56.0864169Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:56.0864556Z         
2026-05-21T01:04:56.0865103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:56.0865851Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:56.0866785Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:56.0867307Z --- FAIL: TestAccBackupCompliancePolicy_basic (68.05s)
```

- 2026-05-22 PASS a minute
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26

### Error 2026-05-26T02:26:20+00:00
```
2026-05-26T02:26:20.7000205Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-26T02:26:20.7007255Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-26T02:26:20.7066882Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-26T02:26:20.7067590Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:26:20.7068147Z         
2026-05-26T02:26:20.7068645Z         Error: error creating project: test-acc-tf-p-6791553165141717926
2026-05-26T02:26:20.7069084Z         
2026-05-26T02:26:20.7069455Z           with mongodbatlas_project.test,
2026-05-26T02:26:20.7070172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:26:20.7070839Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:26:20.7071225Z         
2026-05-26T02:26:20.7071780Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:26:20.7072536Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:26:20.7073232Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:26:20.7073746Z --- FAIL: TestAccBackupCompliancePolicy_basic (88.15s)
```

- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T01:18:52+00:00
```
2026-05-28T01:18:52.5706695Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-28T01:18:52.5716490Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-28T01:18:52.5752042Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-28T01:18:52.5752761Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:18:52.5753321Z         
2026-05-28T01:18:52.5753834Z         Error: error creating project: test-acc-tf-p-5750790228612609886
2026-05-28T01:18:52.5754417Z         
2026-05-28T01:18:52.5755007Z           with mongodbatlas_project.test,
2026-05-28T01:18:52.5755737Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:18:52.5756409Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:18:52.5756807Z         
2026-05-28T01:18:52.5757451Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:18:52.5758250Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:18:52.5759090Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:18:52.5759618Z --- FAIL: TestAccBackupCompliancePolicy_basic (63.14s)
```

- 2026-05-29 PASS a minute
- 2026-05-30

### Error 2026-05-30T01:16:43+00:00
```
2026-05-30T01:16:43.1408073Z === RUN   TestAccBackupCompliancePolicy_basic
2026-05-30T01:16:43.1415040Z === CONT  TestAccBackupCompliancePolicy_basic
2026-05-30T01:16:43.1433035Z === NAME  TestAccBackupCompliancePolicy_basic
2026-05-30T01:16:43.1433969Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:16:43.1434606Z         
2026-05-30T01:16:43.1435191Z         Error: error creating project: test-acc-tf-p-5777360848203651764
2026-05-30T01:16:43.1435708Z         
2026-05-30T01:16:43.1436160Z           with mongodbatlas_project.test,
2026-05-30T01:16:43.1436951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:16:43.1438005Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:16:43.1438471Z         
2026-05-30T01:16:43.1439292Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:16:43.1440129Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:16:43.1440884Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:16:43.1441475Z --- FAIL: TestAccBackupCompliancePolicy_basic (68.44s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
