# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138232dbcfd886f3b3f3/backupCompliancePolicy | dev | 37.03s
[2026-09-18 01:00](#error-2026-09-18t0100320000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6aac88d7b46960c15e2df062/backupCompliancePolicy | dev | 38.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 39 seconds
- 2026-09-03
  - PASS 36 seconds
  - PASS 37 seconds
- 2026-09-04
  - FAIL 37 seconds

### Error 2026-09-04T01:06:24+00:00
```
2026-09-04T01:06:24.3126222Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-09-04T01:06:24.3134367Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-09-04T01:06:24.3161447Z    test_terraform_path=/home/runner/work/_temp/28c67ee7-4579-4ce4-a87b-abd873de7883/terraform test_working_directory=/tmp/plugintest3836855856 test_step_number=2
2026-09-04T01:06:24.3233399Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-09-04T01:06:24.3235104Z     resource_backup_compliance_policy_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-04T01:06:24.3236195Z         
2026-09-04T01:06:24.3240508Z         Error: error disabling the Backup Compliance Policy: 6a9a138232dbcfd886f3b3f3: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138232dbcfd886f3b3f3/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-04T01:06:24.3243516Z         
2026-09-04T01:06:24.3244512Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (37.28s)
```

  - PASS 36 seconds
- 2026-09-05 PASS 37 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 37 seconds
- 2026-09-08 PASS 36 seconds
- 2026-09-09 PASS 38 seconds
- 2026-09-10 PASS 37 seconds
- 2026-09-11 PASS 40 seconds
- 2026-09-12 PASS 37 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 38 seconds
- 2026-09-15 PASS 38 seconds
- 2026-09-16 PASS 37 seconds
- 2026-09-17 PASS 38 seconds
- 2026-09-18

### Error 2026-09-18T01:00:32+00:00
```
2026-09-18T01:00:32.1981283Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-09-18T01:00:32.1985402Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2026-09-18T01:00:32.1995643Z    test_working_directory=/tmp/plugintest1574938272 test_name=TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand test_terraform_path=/home/runner/work/_temp/3c085fbd-1551-49e9-a4ae-7986507aea67/terraform test_step_number=1
2026-09-18T01:00:32.1997039Z     resource_backup_compliance_policy_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-18T01:00:32.1997580Z         
2026-09-18T01:00:32.1999486Z         Error: error disabling the Backup Compliance Policy: 6aac88d7b46960c15e2df062: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aac88d7b46960c15e2df062/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-18T01:00:32.2000866Z         
2026-09-18T01:00:32.2001417Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (38.35s)
```

- 2026-09-19 PASS 38 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 37 seconds
- 2026-09-22 PASS 39 seconds
- 2026-09-23
  - PASS 37 seconds
  - PASS 38 seconds
- 2026-09-24 PASS 36 seconds
- 2026-09-25 PASS 38 seconds
- 2026-09-26 PASS 37 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 42 seconds
- 2026-09-29 PASS 36 seconds
- 2026-09-30 PASS 38 seconds
- 2026-10-01 PASS 37 seconds
- 2026-10-02 PASS 38 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 37 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 38 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 38 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 38 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 37 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 37 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
