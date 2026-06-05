# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-05-21 01:04](#error-2026-05-21t0104560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-05-23 01:00](#error-2026-05-23t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.01s
[2026-05-26 02:26](#error-2026-05-26t0226200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-28 01:18](#error-2026-05-28t0118520000) |  | dev | flaky_500 | 37.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T00:57:12+00:00
```
2026-05-09T00:57:12.3123276Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-09T00:57:12.3127870Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-09T00:57:12.3179159Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-09T00:57:12.3179992Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:57:12.3180579Z         
2026-05-09T00:57:12.3181095Z         Error: error creating project: test-acc-tf-p-5396037859985149658
2026-05-09T00:57:12.3181558Z         
2026-05-09T00:57:12.3181931Z           with mongodbatlas_project.test,
2026-05-09T00:57:12.3182677Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:12.3183535Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:12.3183946Z         
2026-05-09T00:57:12.3184521Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:12.3185317Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:12.3186232Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:12.3186871Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (71.48s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21

### Error 2026-05-21T01:04:56+00:00
```
2026-05-21T01:04:56.0760998Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-21T01:04:56.0763594Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-21T01:04:56.0840134Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-21T01:04:56.0840907Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:56.0841464Z         
2026-05-21T01:04:56.0841972Z         Error: error creating project: test-acc-tf-p-7259793843000806992
2026-05-21T01:04:56.0842421Z         
2026-05-21T01:04:56.0842795Z           with mongodbatlas_project.test,
2026-05-21T01:04:56.0843498Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:56.0844161Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:56.0844552Z         
2026-05-21T01:04:56.0845103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:56.0845854Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:56.0846690Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:56.0847270Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (66.65s)
```

- 2026-05-22 PASS a minute
- 2026-05-23

### Error 2026-05-23T01:00:54+00:00
```
2026-05-23T01:00:54.9081943Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-23T01:00:54.9085915Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-23T01:00:54.9166456Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-23T01:00:54.9167250Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:00:54.9167826Z         
2026-05-23T01:00:54.9168342Z         Error: error creating project: test-acc-tf-p-4927283043352582765
2026-05-23T01:00:54.9168802Z         
2026-05-23T01:00:54.9169200Z           with mongodbatlas_project.test,
2026-05-23T01:00:54.9169925Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:54.9170605Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:54.9171006Z         
2026-05-23T01:00:54.9171581Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:54.9172587Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:54.9173315Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:54.9173929Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (107.12s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26

### Error 2026-05-26T02:26:20+00:00
```
2026-05-26T02:26:20.7005975Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-26T02:26:20.7009785Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-26T02:26:20.7023871Z    test_terraform_path=/home/runner/work/_temp/e7e72b46-1651-4a6c-815b-701a76529439/terraform test_working_directory=/tmp/plugintest2729821059
2026-05-26T02:26:20.7025039Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:26:20.7025852Z         
2026-05-26T02:26:20.7026367Z         Error: error creating project: test-acc-tf-p-5359067340932048339
2026-05-26T02:26:20.7026812Z         
2026-05-26T02:26:20.7027184Z           with mongodbatlas_project.test,
2026-05-26T02:26:20.7027892Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:26:20.7028556Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:26:20.7028936Z         
2026-05-26T02:26:20.7029658Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:26:20.7030418Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:26:20.7031110Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:26:20.7031692Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (69.09s)
```

- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T01:18:52+00:00
```
2026-05-28T01:18:52.5713806Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-28T01:18:52.5720449Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-05-28T01:18:52.5731814Z   
2026-05-28T01:18:52.5732596Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:18:52.5733215Z         
2026-05-28T01:18:52.5733730Z         Error: error creating project: test-acc-tf-p-6996500260948340602
2026-05-28T01:18:52.5734185Z         
2026-05-28T01:18:52.5734841Z           with mongodbatlas_project.test,
2026-05-28T01:18:52.5735581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:18:52.5736253Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:18:52.5736648Z         
2026-05-28T01:18:52.5737210Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-28T01:18:52.5737730Z         type
2026-05-28T01:18:52.5738170Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (37.10s)
```

- 2026-05-29 PASS a minute
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS 2 minutes
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
