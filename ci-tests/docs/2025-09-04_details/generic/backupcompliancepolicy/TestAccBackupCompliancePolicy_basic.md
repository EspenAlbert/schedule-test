# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cbf746882a383c7514/limits | qa | flaky_500 | 98.01s
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d299bbb8c4ee1f81840/limits | qa | flaky_500 | 32.06s
[2025-09-01 03:30](#error-2025-09-01t0330180000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68b4e9177af6b0372e94220d/backupCompliancePolicy | dev |  | 66.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T01:01:40+00:00
```
2025-08-17T01:01:40.3986064Z === RUN   TestAccBackupCompliancePolicy_basic
2025-08-17T01:01:40.3997037Z === CONT  TestAccBackupCompliancePolicy_basic
2025-08-17T01:01:40.4021407Z === NAME  TestAccBackupCompliancePolicy_basic
2025-08-17T01:01:40.4022752Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T01:01:40.4023740Z         
2025-08-17T01:01:40.4024693Z         Error: error when getting project properties after create
2025-08-17T01:01:40.4025396Z         
2025-08-17T01:01:40.4026025Z           with mongodbatlas_project.test,
2025-08-17T01:01:40.4027409Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T01:01:40.4028525Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T01:01:40.4029156Z         
2025-08-17T01:01:40.4030059Z         error getting project (68a122cbf746882a383c7514): error getting project's
2025-08-17T01:01:40.4030985Z         limits (68a122cbf746882a383c7514):
2025-08-17T01:01:40.4032110Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cbf746882a383c7514/limits
2025-08-17T01:01:40.4033408Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:01:40.4034721Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:01:40.4035538Z         BadRequestDetail: 
2025-08-17T01:01:40.4036181Z --- FAIL: TestAccBackupCompliancePolicy_basic (98.10s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:32:39+00:00
```
2025-08-24T00:32:39.4461697Z === RUN   TestAccBackupCompliancePolicy_basic
2025-08-24T00:32:39.4471545Z === CONT  TestAccBackupCompliancePolicy_basic
2025-08-24T00:32:39.4487546Z === NAME  TestAccBackupCompliancePolicy_basic
2025-08-24T00:32:39.4488254Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:39.4488957Z         
2025-08-24T00:32:39.4489416Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4489810Z         
2025-08-24T00:32:39.4490162Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4490829Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4491591Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4491955Z         
2025-08-24T00:32:39.4492476Z         error getting project (68aa5d299bbb8c4ee1f81840): error getting project's
2025-08-24T00:32:39.4493012Z         limits (68aa5d299bbb8c4ee1f81840):
2025-08-24T00:32:39.4493674Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d299bbb8c4ee1f81840/limits
2025-08-24T00:32:39.4494437Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4495097Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4495568Z         BadRequestDetail: 
2025-08-24T00:32:39.4509854Z   
2025-08-24T00:32:39.4540622Z --- FAIL: TestAccBackupCompliancePolicy_basic (32.60s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a minute

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2095900Z === RUN   TestAccBackupCompliancePolicy_basic
2025-09-01T03:30:18.2107924Z === CONT  TestAccBackupCompliancePolicy_basic
2025-09-01T03:30:18.2270754Z === NAME  TestAccBackupCompliancePolicy_basic
2025-09-01T03:30:18.2272022Z     resource_backup_compliance_policy_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2273369Z         
2025-09-01T03:30:18.2276986Z         Error: error disabling the Backup Compliance Policy: 68b4e9177af6b0372e94220d: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e9177af6b0372e94220d/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2278678Z         
2025-09-01T03:30:18.2279035Z --- FAIL: TestAccBackupCompliancePolicy_basic (66.81s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute