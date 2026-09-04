# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 12 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 11) FAIL
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138232dbcfd886f3b3f3/backupCompliancePolicy | dev | 37.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 36 seconds
- 2026-08-07 PASS 38 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS 37 seconds
- 2026-08-29 PASS 38 seconds
- 2026-08-30: MISSING
- 2026-08-31 PASS 40 seconds
- 2026-09-01 PASS 36 seconds
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

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 38 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
