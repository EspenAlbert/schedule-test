# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111e2dc7470847b1407 | dev | flaky_500 | 68.09s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute
- 2025-10-03 PASS a minute
- 2025-10-04 PASS a minute
- 2025-10-05 PASS a minute
- 2025-10-06 PASS a minute
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09 PASS a minute
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS a minute
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.3801230Z === RUN   TestAccBackupCompliancePolicy_update
2025-10-30T00:44:19.3813465Z === CONT  TestAccBackupCompliancePolicy_update
2025-10-30T00:44:19.3828837Z    test_name=TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-10-30T00:44:19.3895827Z === NAME  TestAccBackupCompliancePolicy_update
2025-10-30T00:44:19.3896637Z     resource_backup_compliance_policy_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3897244Z         
2025-10-30T00:44:19.3897621Z         Error: error when destroying resource
2025-10-30T00:44:19.3897968Z         
2025-10-30T00:44:19.3898509Z         error deleting project (6902b111e2dc7470847b1407):
2025-10-30T00:44:19.3899179Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111e2dc7470847b1407
2025-10-30T00:44:19.3899892Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3900577Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3901064Z         BadRequestDetail: 
2025-10-30T00:44:19.3901448Z --- FAIL: TestAccBackupCompliancePolicy_update (68.90s)
```
