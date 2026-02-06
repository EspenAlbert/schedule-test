# cluster/cluster/TestMigCluster_basicAWS_simple Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038290000) |  | dev | timeout | 10810.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 17 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 15 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 13 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 12 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 14 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 18 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 17 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 26 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:29+00:00
```
2026-02-02T00:38:29.6736251Z === RUN   TestMigCluster_basicAWS_simple
2026-02-02T00:38:37.8806084Z === CONT  TestMigCluster_basicAWS_simple
2026-02-02T00:38:42.8804234Z === NAME  TestMigCluster_basicAWS_simple
2026-02-02T00:38:42.8805404Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:42.880148191Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-4647111091620967536
2026-02-02T03:38:45.7502626Z === NAME  TestMigCluster_basicAWS_simple
2026-02-02T03:38:45.7503538Z     resource_cluster_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:45.7504360Z         
2026-02-02T03:38:45.7505369Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:45.7506158Z         
2026-02-02T03:38:45.7506596Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:45.7507623Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:45.7508429Z           14: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:45.7508945Z         
2026-02-02T03:38:45.9330004Z --- FAIL: TestMigCluster_basicAWS_simple (10810.79s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 27 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 16 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 13 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 12 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
