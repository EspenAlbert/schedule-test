# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-04 01:06](#error-2026-09-04t0106240000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6a9a138254d9d7aa80051b47/backupCompliancePolicy | dev |  | 69.01s
[2026-09-18 01:00](#error-2026-09-18t0100320000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6aac88d7acef019a4179a50d/backupCompliancePolicy | dev | flaky_500 | 73.06s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS a minute
- 2026-09-06: MISSING
- 2026-09-07 PASS a minute
- 2026-09-08 PASS a minute
- 2026-09-09 PASS a minute
- 2026-09-10 PASS a minute
- 2026-09-11 PASS a minute
- 2026-09-12 PASS a minute
- 2026-09-13: MISSING
- 2026-09-14 PASS a minute
- 2026-09-15 PASS a minute
- 2026-09-16 PASS a minute
- 2026-09-17 PASS a minute
- 2026-09-18

### Error 2026-09-18T01:00:32+00:00
```
2026-09-18T01:00:32.1978445Z === RUN   TestAccBackupCompliancePolicy_update
2026-09-18T01:00:32.1984622Z === CONT  TestAccBackupCompliancePolicy_update
2026-09-18T01:00:32.2047038Z === NAME  TestAccBackupCompliancePolicy_update
2026-09-18T01:00:32.2047699Z     resource_backup_compliance_policy_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-18T01:00:32.2048206Z         
2026-09-18T01:00:32.2050076Z         Error: error disabling the Backup Compliance Policy: 6aac88d7acef019a4179a50d: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aac88d7acef019a4179a50d/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-09-18T01:00:32.2051526Z         
2026-09-18T01:00:32.2051823Z --- FAIL: TestAccBackupCompliancePolicy_update (73.55s)
```

- 2026-09-19 PASS a minute
- 2026-09-20: MISSING
- 2026-09-21 PASS a minute
- 2026-09-22 PASS a minute
- 2026-09-23
  - PASS a minute
  - PASS a minute
- 2026-09-24 PASS a minute
- 2026-09-25 PASS a minute
- 2026-09-26 PASS a minute
- 2026-09-27: MISSING
- 2026-09-28 PASS a minute
- 2026-09-29 PASS a minute
- 2026-09-30 PASS a minute
- 2026-10-01 PASS a minute
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
