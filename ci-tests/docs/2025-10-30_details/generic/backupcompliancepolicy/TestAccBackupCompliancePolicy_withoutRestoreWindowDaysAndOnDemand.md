# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111e2dc7470847b1543 | dev | flaky_500 | 36.03s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 35 seconds
  - PASS 36 seconds
  - PASS 36 seconds
  - PASS 38 seconds
  - PASS 38 seconds
  - PASS 36 seconds
  - PASS 36 seconds
  - PASS 36 seconds
- 2025-10-02 PASS 36 seconds
- 2025-10-03 PASS 36 seconds
- 2025-10-04 PASS 37 seconds
- 2025-10-05 PASS 35 seconds
- 2025-10-06 PASS 37 seconds
- 2025-10-07 PASS 38 seconds
- 2025-10-08 PASS 40 seconds
- 2025-10-09 PASS 37 seconds
- 2025-10-10 PASS 38 seconds
- 2025-10-11 PASS 37 seconds
- 2025-10-12 PASS 37 seconds
- 2025-10-13 PASS 40 seconds
- 2025-10-14 PASS 36 seconds
- 2025-10-15 PASS 41 seconds
- 2025-10-16 PASS 36 seconds
- 2025-10-17 PASS 36 seconds
- 2025-10-18 PASS 39 seconds
- 2025-10-19 PASS 59 seconds
- 2025-10-20
  - PASS 41 seconds
  - PASS 37 seconds
- 2025-10-21 PASS 38 seconds
- 2025-10-22
  - PASS 38 seconds
  - PASS 40 seconds
- 2025-10-23 PASS 36 seconds
- 2025-10-24 PASS 39 seconds
- 2025-10-25 PASS 37 seconds
- 2025-10-26 PASS 37 seconds
- 2025-10-27 PASS 37 seconds
- 2025-10-28 PASS 36 seconds
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
