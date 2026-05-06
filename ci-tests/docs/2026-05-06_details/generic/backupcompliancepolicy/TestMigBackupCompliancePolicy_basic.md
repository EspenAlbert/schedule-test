# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-22 01:44](#error-2026-04-22t0144310000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/69e81a50632b92cc72e46290/backupCompliancePolicy | dev | 74.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10 PASS a minute
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14: MISSING
- 2026-04-15 PASS a minute
- 2026-04-16: MISSING
- 2026-04-17 PASS a minute
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21: MISSING
- 2026-04-22
  - FAIL a minute

### Error 2026-04-22T01:44:31+00:00
```
2026-04-22T01:44:31.2842341Z === RUN   TestMigBackupCompliancePolicy_basic
2026-04-22T01:44:31.2848195Z === CONT  TestMigBackupCompliancePolicy_basic
2026-04-22T01:44:31.2977868Z === NAME  TestMigBackupCompliancePolicy_basic
2026-04-22T01:44:31.2978760Z     resource_backup_compliance_policy_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:44:31.2979446Z         
2026-04-22T01:44:31.2982075Z         Error: error disabling the Backup Compliance Policy: 69e81a50632b92cc72e46290: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a50632b92cc72e46290/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-22T01:44:31.2983821Z         
2026-04-22T01:44:31.2984160Z --- FAIL: TestMigBackupCompliancePolicy_basic (74.63s)
```

  - PASS a minute
- 2026-04-23: MISSING
- 2026-04-24 PASS a minute
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28: MISSING
- 2026-04-29 PASS a minute
- 2026-04-30: MISSING
- 2026-05-01 PASS a minute
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
