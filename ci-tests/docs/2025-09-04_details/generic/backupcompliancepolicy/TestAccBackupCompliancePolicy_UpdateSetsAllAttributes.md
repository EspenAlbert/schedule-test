# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cbf746882a383c746a/limits | qa | flaky_500 | 103.01s
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d294192cd1cc589b865/limits | qa | flaky_500 | 32.06s
[2025-09-01 03:30](#error-2025-09-01t0330180000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68b4e91746ef690a79d6cc6e/backupCompliancePolicy | dev |  | 35.09s

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
2025-08-17T01:01:40.3992646Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-17T01:01:40.3997514Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-17T01:01:40.4101586Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-17T01:01:40.4102988Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T01:01:40.4103981Z         
2025-08-17T01:01:40.4104898Z         Error: error when getting project properties after create
2025-08-17T01:01:40.4105585Z         
2025-08-17T01:01:40.4106220Z           with mongodbatlas_project.test,
2025-08-17T01:01:40.4107410Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T01:01:40.4108474Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T01:01:40.4109091Z         
2025-08-17T01:01:40.4110032Z         error getting project (68a122cbf746882a383c746a): error getting project's
2025-08-17T01:01:40.4110951Z         limits (68a122cbf746882a383c746a):
2025-08-17T01:01:40.4112076Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cbf746882a383c746a/limits
2025-08-17T01:01:40.4113388Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:01:40.4114722Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:01:40.4115530Z         BadRequestDetail: 
2025-08-17T01:01:40.4116299Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (103.12s)
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
2025-08-24T00:32:39.4467468Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-24T00:32:39.4470994Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-24T00:32:39.4532410Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-08-24T00:32:39.4533144Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:39.4533666Z         
2025-08-24T00:32:39.4534115Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4534517Z         
2025-08-24T00:32:39.4534888Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4535558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4536177Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4536541Z         
2025-08-24T00:32:39.4537068Z         error getting project (68aa5d294192cd1cc589b865): error getting project's
2025-08-24T00:32:39.4537605Z         limits (68aa5d294192cd1cc589b865):
2025-08-24T00:32:39.4538262Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d294192cd1cc589b865/limits
2025-08-24T00:32:39.4539122Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4539784Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4540250Z         BadRequestDetail: 
2025-08-24T00:32:39.4541601Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (32.63s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL 35 seconds

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2103027Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-01T03:30:18.2107117Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-01T03:30:18.2136067Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-01T03:30:18.2137498Z     resource_backup_compliance_policy_test.go:129: Step 2/2 error: Error running apply: exit status 1
2025-09-01T03:30:18.2138408Z         
2025-09-01T03:30:18.2143133Z         Error: error updating a Backup Compliance Policy: 68b4e91746ef690a79d6cc6e: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6cc6e/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2146071Z         
2025-09-01T03:30:18.2146988Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-09-01T03:30:18.2148654Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-09-01T03:30:18.2150210Z           24: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-09-01T03:30:18.2151015Z         
2025-09-01T03:30:18.2173294Z    test_working_directory=/tmp/plugintest1544914768
2025-09-01T03:30:18.2174483Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2175356Z         
2025-09-01T03:30:18.2179775Z         Error: error disabling the Backup Compliance Policy: 68b4e91746ef690a79d6cc6e: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6cc6e/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2182892Z         
2025-09-01T03:30:18.2183596Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (35.88s)
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