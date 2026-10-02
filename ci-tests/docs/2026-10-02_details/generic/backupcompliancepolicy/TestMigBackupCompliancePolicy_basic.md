# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 22 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138345c4d5f3e09deac9/backupCompliancePolicy | dev | 72.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS a minute
- 2026-09-03: MISSING
- 2026-09-04
  - FAIL a minute

### Error 2026-09-04T01:06:24+00:00
```
2026-09-04T01:06:24.3119799Z === RUN   TestMigBackupCompliancePolicy_basic
2026-09-04T01:06:24.3130244Z === CONT  TestMigBackupCompliancePolicy_basic
2026-09-04T01:06:24.3333180Z === NAME  TestMigBackupCompliancePolicy_basic
2026-09-04T01:06:24.3334823Z     resource_backup_compliance_policy_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-04T01:06:24.3335972Z         
2026-09-04T01:06:24.3340291Z         Error: error disabling the Backup Compliance Policy: 6a9a138345c4d5f3e09deac9: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138345c4d5f3e09deac9/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-04T01:06:24.3343156Z         
2026-09-04T01:06:24.3343726Z --- FAIL: TestMigBackupCompliancePolicy_basic (72.05s)
```

  - PASS a minute
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS a minute
- 2026-09-08: MISSING
- 2026-09-09 PASS a minute
- 2026-09-10: MISSING
- 2026-09-11 PASS a minute
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS a minute
- 2026-09-15: MISSING
- 2026-09-16 PASS a minute
- 2026-09-17: MISSING
- 2026-09-18 PASS a minute
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS a minute
- 2026-09-22: MISSING
- 2026-09-23
  - PASS a minute
  - PASS a minute
- 2026-09-24: MISSING
- 2026-09-25 PASS a minute
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS a minute
- 2026-09-29: MISSING
- 2026-09-30 PASS a minute
- 2026-10-01: MISSING
- 2026-10-02 PASS a minute

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS a minute
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS a minute
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS a minute
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS a minute
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS a minute
- 2026-09-28: MISSING
- 2026-09-29 PASS a minute
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
