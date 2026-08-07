# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 18 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-5563470974250213982 | dev | flaky_500 | 2427.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10

### Error 2026-07-10T00:49:38+00:00
```
2026-07-10T00:49:38.5784783Z === RUN   TestMigGlobalClusterConfig_basic
2026-07-10T00:49:38.5786652Z     resource_global_cluster_config_migration_test.go:11: Creating execution project (1): test-acc-tf-p-2229987628481865622
2026-07-10T01:38:51.9430016Z === CONT  TestMigGlobalClusterConfig_basic
2026-07-10T01:38:56.9431555Z === NAME  TestMigGlobalClusterConfig_basic
2026-07-10T01:38:56.9433169Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:38:56.94284799Z, ProjectID: 6a5041a2e2d93fff09dc5867, Cluster name: test-acc-tf-c-5563470974250213982
2026-07-10T02:19:16.8055785Z === NAME  TestMigGlobalClusterConfig_basic
2026-07-10T02:19:16.8056689Z     resource_global_cluster_config_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:19:16.8057472Z         
2026-07-10T02:19:16.8057758Z         Error: Error in delete
2026-07-10T02:19:16.8058101Z         
2026-07-10T02:19:16.8058658Z         cluster name: test-acc-tf-c-5563470974250213982, API error details:
2026-07-10T02:19:16.8060017Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-5563470974250213982
2026-07-10T02:19:16.8061090Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:19:16.8061910Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:19:16.8062385Z         BadRequestDetail: 
2026-07-10T02:19:16.8090078Z --- FAIL: TestMigGlobalClusterConfig_basic (2427.11s)
```

- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 29 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 25 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 28 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS an hour
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28: MISSING
- 2026-07-29 PASS 29 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 18 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 18 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 18 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 18 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 18 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
