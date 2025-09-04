# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 03:30](#error-2025-09-01t0330180000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68b4e9177af6b0372e94220a/backupCompliancePolicy | dev | 36.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 35 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 35 seconds
- 2025-08-09 PASS 35 seconds
- 2025-08-10 PASS 51 seconds
- 2025-08-11 PASS 38 seconds
- 2025-08-12 PASS 38 seconds
- 2025-08-13 PASS 36 seconds
- 2025-08-14 PASS 35 seconds
- 2025-08-15 PASS 37 seconds
- 2025-08-16 PASS 35 seconds
- 2025-08-17 PASS 38 seconds
- 2025-08-18 PASS 36 seconds
- 2025-08-19 PASS 35 seconds
- 2025-08-20
  - PASS 36 seconds
  - PASS 34 seconds
- 2025-08-21 PASS 36 seconds
- 2025-08-22 PASS 39 seconds
- 2025-08-23 PASS 39 seconds
- 2025-08-24 PASS a minute
- 2025-08-25 PASS 38 seconds
- 2025-08-26 PASS 41 seconds
- 2025-08-27 PASS 36 seconds
- 2025-08-28 PASS 38 seconds
- 2025-08-29 PASS 38 seconds
- 2025-08-30 PASS 35 seconds
- 2025-08-31 PASS 49 seconds
- 2025-09-01
  - FAIL 36 seconds

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2100757Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-01T03:30:18.2108801Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-01T03:30:18.2135454Z   
2025-09-01T03:30:18.2207114Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-09-01T03:30:18.2208738Z     resource_backup_compliance_policy_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2209814Z         
2025-09-01T03:30:18.2214619Z         Error: error disabling the Backup Compliance Policy: 68b4e9177af6b0372e94220a: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e9177af6b0372e94220a/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2217589Z         
2025-09-01T03:30:18.2218397Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.02s)
```

  - PASS 39 seconds
  - PASS 36 seconds
  - PASS 37 seconds
  - PASS 35 seconds
  - PASS 38 seconds
  - PASS 35 seconds
  - PASS 37 seconds
- 2025-09-02 PASS 35 seconds
- 2025-09-03 PASS 37 seconds
- 2025-09-04 PASS 36 seconds