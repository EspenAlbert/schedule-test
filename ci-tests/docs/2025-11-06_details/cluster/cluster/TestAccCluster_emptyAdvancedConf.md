# cluster/cluster/TestAccCluster_emptyAdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11813.08s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 19 minutes
- 2025-10-09 PASS 52 minutes
- 2025-10-10 PASS 22 minutes
- 2025-10-11 PASS 20 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 23 minutes
- 2025-10-14 PASS 30 minutes
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18 PASS 19 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 21 minutes
  - PASS 14 minutes
- 2025-10-23 PASS 24 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 16 minutes
- 2025-10-26 PASS 19 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 18 minutes
- 2025-10-29 PASS 21 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1393944Z === RUN   TestAccCluster_emptyAdvancedConf
2025-10-30T00:28:10.4957522Z === CONT  TestAccCluster_emptyAdvancedConf
2025-10-30T00:28:30.4993483Z === NAME  TestAccCluster_emptyAdvancedConf
2025-10-30T00:28:30.4994798Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:30.499066887Z, ProjectID: 6902b112abf4374f32989f92, Cluster name: test-acc-tf-c-3730279035124441467
2025-10-30T03:45:04.3105406Z === NAME  TestAccCluster_emptyAdvancedConf
2025-10-30T03:45:04.3106078Z     resource_cluster_test.go:225: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:45:04.3106829Z         
2025-10-30T03:45:04.3108056Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-3730279035124441467): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:45:04.3108721Z         
2025-10-30T03:45:04.3108988Z --- FAIL: TestAccCluster_emptyAdvancedConf (11813.82s)
```

- 2025-10-31 PASS 18 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 25 minutes