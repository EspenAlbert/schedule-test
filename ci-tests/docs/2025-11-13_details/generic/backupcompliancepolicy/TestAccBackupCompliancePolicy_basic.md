# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111e2dc7470847b1474 | dev | flaky_500 | 68.03s

## Timeline
- 2025-10-14: MISSING
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
2025-10-30T00:44:19.3799075Z === RUN   TestAccBackupCompliancePolicy_basic
2025-10-30T00:44:19.3809202Z === CONT  TestAccBackupCompliancePolicy_basic
2025-10-30T00:44:19.3860416Z === NAME  TestAccBackupCompliancePolicy_basic
2025-10-30T00:44:19.3861246Z     resource_backup_compliance_policy_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3861861Z         
2025-10-30T00:44:19.3862239Z         Error: error when destroying resource
2025-10-30T00:44:19.3862600Z         
2025-10-30T00:44:19.3863205Z         error deleting project (6902b111e2dc7470847b1474):
2025-10-30T00:44:19.3863904Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111e2dc7470847b1474
2025-10-30T00:44:19.3864622Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3865307Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3865796Z         BadRequestDetail: 
2025-10-30T00:44:19.3866180Z --- FAIL: TestAccBackupCompliancePolicy_basic (68.27s)
```

- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13
  - PASS a minute
  - PASS a minute