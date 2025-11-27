# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111e2dc7470847b1543 | dev | flaky_500 | 36.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 39 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.3804712Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-10-30T00:44:19.3810313Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-10-30T00:44:19.3829469Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-10-30T00:44:19.3830920Z     resource_backup_compliance_policy_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3832041Z         
2025-10-30T00:44:19.3832438Z         Error: error when destroying resource
2025-10-30T00:44:19.3832803Z         
2025-10-30T00:44:19.3833669Z         error deleting project (6902b111e2dc7470847b1543):
2025-10-30T00:44:19.3834374Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111e2dc7470847b1543
2025-10-30T00:44:19.3835133Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3847303Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3847845Z         BadRequestDetail: 
2025-10-30T00:44:19.3848371Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.33s)
```

- 2025-10-31 PASS 37 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 37 seconds
- 2025-11-04 PASS 39 seconds
- 2025-11-05
  - PASS 39 seconds
  - PASS 39 seconds
- 2025-11-06 PASS 36 seconds
- 2025-11-07 PASS 39 seconds
- 2025-11-08 PASS 36 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 36 seconds
- 2025-11-11 PASS 37 seconds
- 2025-11-12 PASS 38 seconds
- 2025-11-13 PASS 36 seconds
- 2025-11-14 PASS 37 seconds
- 2025-11-15 PASS 36 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 35 seconds
- 2025-11-18 PASS 36 seconds
- 2025-11-19 PASS 39 seconds
- 2025-11-20 PASS 38 seconds
- 2025-11-21 PASS 37 seconds
- 2025-11-22 PASS 38 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 36 seconds
- 2025-11-25 PASS 36 seconds
- 2025-11-26 PASS 39 seconds
- 2025-11-27 PASS 38 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 36 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 36 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 34 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 35 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 37 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
