# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 21 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a7e2b992f4d13aeefe/clusters/test-acc-tf-c-4972118170755544213 | dev | flaky_500 | 2076.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10

### Error 2026-07-10T00:49:46+00:00
```
2026-07-10T00:49:46.8069135Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2026-07-10T01:44:21.5374423Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2026-07-10T01:44:26.5451008Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-07-10T01:44:26.5471914Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:44:26.540610961Z, ProjectID: 6a5041a7e2b992f4d13aeefe, Cluster name: test-acc-tf-c-4972118170755544213
2026-07-10T02:18:57.8794387Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-07-10T02:18:57.8795353Z     resource_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:18:57.8796020Z         
2026-07-10T02:18:57.8796303Z         Error: Error in delete
2026-07-10T02:18:57.8796703Z         
2026-07-10T02:18:57.8797188Z         cluster name: test-acc-tf-c-4972118170755544213, API error details:
2026-07-10T02:18:57.8798289Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a7e2b992f4d13aeefe/clusters/test-acc-tf-c-4972118170755544213
2026-07-10T02:18:57.8799492Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:18:57.8800291Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:18:57.8800743Z         BadRequestDetail: 
2026-07-10T02:18:57.8824311Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (2076.35s)
```

- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 35 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 26 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 27 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 57 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS an hour
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28: MISSING
- 2026-07-29 PASS 31 minutes
- 2026-07-30: MISSING
- 2026-07-31
  - PASS 20 minutes
  - PASS 17 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 18 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 39 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 26 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
