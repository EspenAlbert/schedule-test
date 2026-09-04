# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138254d9d7aa80051b47/backupCompliancePolicy | dev | 69.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute
- 2026-08-08 PASS a minute
- 2026-08-09: MISSING
- 2026-08-10 PASS a minute
- 2026-08-11 PASS a minute
- 2026-08-12 PASS a minute
- 2026-08-13 PASS a minute
- 2026-08-14 PASS a minute
- 2026-08-15 PASS a minute
- 2026-08-16: MISSING
- 2026-08-17 PASS a minute
- 2026-08-18 PASS a minute
- 2026-08-19 PASS a minute
- 2026-08-20 PASS a minute
- 2026-08-21 PASS a minute
- 2026-08-22 PASS a minute
- 2026-08-23: MISSING
- 2026-08-24 PASS a minute
- 2026-08-25 PASS a minute
- 2026-08-26 PASS a minute
- 2026-08-27 PASS a minute
- 2026-08-28 PASS a minute
- 2026-08-29 PASS a minute
- 2026-08-30: MISSING
- 2026-08-31 PASS a minute
- 2026-09-01 PASS a minute
- 2026-09-02 PASS a minute
- 2026-09-03
  - PASS a minute
  - PASS a minute
- 2026-09-04
  - FAIL a minute

### Error 2026-09-04T01:06:24+00:00
```
2026-09-04T01:06:24.3122761Z === RUN   TestAccBackupCompliancePolicy_update
2026-09-04T01:06:24.3130947Z === CONT  TestAccBackupCompliancePolicy_update
2026-09-04T01:06:24.3300042Z === NAME  TestAccBackupCompliancePolicy_update
2026-09-04T01:06:24.3301657Z     resource_backup_compliance_policy_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-04T01:06:24.3302738Z         
2026-09-04T01:06:24.3306916Z         Error: error disabling the Backup Compliance Policy: 6a9a138254d9d7aa80051b47: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a138254d9d7aa80051b47/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-04T01:06:24.3309935Z         
2026-09-04T01:06:24.3310511Z --- FAIL: TestAccBackupCompliancePolicy_update (69.12s)
```

  - PASS a minute

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS a minute
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS a minute
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS a minute
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS a minute
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS a minute
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS a minute
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
