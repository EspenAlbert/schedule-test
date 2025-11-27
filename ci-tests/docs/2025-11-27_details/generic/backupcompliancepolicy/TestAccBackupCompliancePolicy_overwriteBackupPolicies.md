# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111e2dc7470847b1473 | dev | flaky_500 | 978.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.3802671Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-10-30T00:44:19.3812320Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-10-30T00:44:19.3921036Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-10-30T00:44:19.3921907Z     resource_backup_compliance_policy_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3922508Z         
2025-10-30T00:44:19.3922888Z         Error: error when destroying resource
2025-10-30T00:44:19.3923494Z         
2025-10-30T00:44:19.3923914Z         error deleting project (6902b111e2dc7470847b1473):
2025-10-30T00:44:19.3924576Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111e2dc7470847b1473
2025-10-30T00:44:19.3925284Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3926091Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3926588Z         BadRequestDetail: 
2025-10-30T00:44:19.3927042Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (978.33s)
```

- 2025-10-31 PASS 15 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 14 minutes
- 2025-11-04 PASS 18 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-11-06 PASS 17 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 41 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 13 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 16 minutes
- 2025-11-13 PASS 26 minutes
- 2025-11-14 PASS 17 minutes
- 2025-11-15 PASS 15 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 16 minutes
- 2025-11-18 PASS 14 minutes
- 2025-11-19 PASS 17 minutes
- 2025-11-20 PASS 17 minutes
- 2025-11-21 PASS 12 minutes
- 2025-11-22 PASS 14 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 15 minutes
- 2025-11-25 PASS 19 minutes
- 2025-11-26 PASS 13 minutes
- 2025-11-27 PASS 21 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 14 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 12 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 14 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 12 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 15 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
