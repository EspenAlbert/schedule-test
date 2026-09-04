# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-03 01:00](#error-2026-09-03t0100010000) |  | dev | flaky_client | 981.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 16 minutes
- 2026-08-08 PASS 16 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 16 minutes
- 2026-08-11 PASS 17 minutes
- 2026-08-12 PASS 17 minutes
- 2026-08-13 PASS 16 minutes
- 2026-08-14 PASS 16 minutes
- 2026-08-15 PASS 15 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 15 minutes
- 2026-08-18 PASS 16 minutes
- 2026-08-19 PASS 16 minutes
- 2026-08-20 PASS 16 minutes
- 2026-08-21 PASS 15 minutes
- 2026-08-22 PASS 15 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 16 minutes
- 2026-08-25 PASS 16 minutes
- 2026-08-26 PASS 17 minutes
- 2026-08-27 PASS 15 minutes
- 2026-08-28 PASS 38 minutes
- 2026-08-29 PASS 16 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 18 minutes
- 2026-09-01 PASS 18 minutes
- 2026-09-02 PASS 17 minutes
- 2026-09-03
  - FAIL 16 minutes

### Error 2026-09-03T01:00:01+00:00
```
2026-09-03T01:00:01.4021217Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-09-03T01:00:01.4028320Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-09-03T01:00:01.4061423Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-09-03T01:00:01.4062831Z     resource_backup_compliance_policy_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-03T01:00:01.4063772Z         
2026-09-03T01:00:01.4064269Z         Error: Error in delete
2026-09-03T01:00:01.4064719Z         
2026-09-03T01:00:01.4065447Z         cluster=test-acc-tf-c-4085079498195641732 didn't reach desired state:
2026-09-03T01:00:01.4066185Z         DELETED, error: Get
2026-09-03T01:00:01.4067387Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a98c2ba7f44bc884f4a043f/clusters/test-acc-tf-c-4085079498195641732":
2026-09-03T01:00:01.4068449Z         dial tcp 23.23.86.210:443: i/o timeout
2026-09-03T01:00:01.4069150Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (981.43s)
```

  - PASS 16 minutes
- 2026-09-04
  - PASS 25 minutes
  - PASS 17 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 17 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 17 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 17 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 15 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 16 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 16 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
