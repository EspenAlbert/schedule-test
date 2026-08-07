# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115190000) |  | dev | flaky_500 | 67.06s
[2026-07-11 00:44](#error-2026-07-11t0044540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-07-16 00:44](#error-2026-07-16t0044280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-21 00:46](#error-2026-07-21t0046230000) |  | dev | flaky_500 | 32.01s
[2026-07-23 00:47](#error-2026-07-23t0047380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:19+00:00
```
2026-07-09T01:15:19.7700019Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-09T01:15:19.7703790Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-09T01:15:19.7720510Z   
2026-07-09T01:15:19.7740095Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-09T01:15:19.7741105Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:15:19.7741692Z         
2026-07-09T01:15:19.7742214Z         Error: error creating project: test-acc-tf-p-1787607505207136108
2026-07-09T01:15:19.7742690Z         
2026-07-09T01:15:19.7743087Z           with mongodbatlas_project.test,
2026-07-09T01:15:19.7743815Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:15:19.7744712Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:15:19.7745170Z         
2026-07-09T01:15:19.7745979Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:15:19.7746506Z         type
2026-07-09T01:15:19.7746956Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.64s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:44:54+00:00
```
2026-07-11T00:44:54.1658005Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-11T00:44:54.1661115Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-11T00:44:54.1699838Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-11T00:44:54.1700816Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:44:54.1701404Z         
2026-07-11T00:44:54.1701953Z         Error: error creating project: test-acc-tf-p-8510109602635177123
2026-07-11T00:44:54.1702586Z         
2026-07-11T00:44:54.1703007Z           with mongodbatlas_project.test,
2026-07-11T00:44:54.1703754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:54.1704459Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:54.1704879Z         
2026-07-11T00:44:54.1705479Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:54.1706253Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:54.1707224Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:54.1707839Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (69.14s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16

### Error 2026-07-16T00:44:28+00:00
```
2026-07-16T00:44:28.9564879Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-16T00:44:28.9569329Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-16T00:44:28.9585572Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-16T00:44:28.9586886Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:28.9588075Z         
2026-07-16T00:44:28.9588681Z         Error: error creating project: test-acc-tf-p-6527894433142706510
2026-07-16T00:44:28.9589166Z         
2026-07-16T00:44:28.9589584Z           with mongodbatlas_project.test,
2026-07-16T00:44:28.9590722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:28.9591444Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:28.9592092Z         
2026-07-16T00:44:28.9592728Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:28.9593547Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:28.9594314Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:28.9594949Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (65.34s)
```

- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:23+00:00
```
2026-07-21T00:46:23.9069091Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-21T00:46:23.9073483Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-21T00:46:23.9088157Z   
2026-07-21T00:46:23.9102457Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-21T00:46:23.9103184Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:46:23.9103713Z         
2026-07-21T00:46:23.9104222Z         Error: error creating project: test-acc-tf-p-6839324905598733825
2026-07-21T00:46:23.9104668Z         
2026-07-21T00:46:23.9105068Z           with mongodbatlas_project.test,
2026-07-21T00:46:23.9105743Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:46:23.9106525Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:46:23.9107055Z         
2026-07-21T00:46:23.9107619Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-21T00:46:23.9108110Z         type
2026-07-21T00:46:23.9108549Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (32.08s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:47:38+00:00
```
2026-07-23T00:47:38.5830041Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-23T00:47:38.5833179Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-23T00:47:38.5868159Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2026-07-23T00:47:38.5868951Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:47:38.5869523Z         
2026-07-23T00:47:38.5871040Z         Error: error creating project: test-acc-tf-p-831593489476238
2026-07-23T00:47:38.5871505Z         
2026-07-23T00:47:38.5872075Z           with mongodbatlas_project.test,
2026-07-23T00:47:38.5872821Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:47:38.5873498Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:47:38.5873907Z         
2026-07-23T00:47:38.5874487Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:47:38.5875269Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:47:38.5875975Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:38.5876579Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (63.01s)
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
