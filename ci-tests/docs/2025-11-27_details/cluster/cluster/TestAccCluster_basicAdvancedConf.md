# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11811.10s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 32 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1395871Z === RUN   TestAccCluster_basicAdvancedConf
2025-10-30T00:28:10.4956955Z === CONT  TestAccCluster_basicAdvancedConf
2025-10-30T00:28:25.4978310Z === NAME  TestAccCluster_basicAdvancedConf
2025-10-30T00:28:25.4979713Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:25.497470597Z, ProjectID: 6902b112abf4374f32989f92, Cluster name: test-acc-tf-c-4254420799383396395
2025-10-30T03:45:02.4674745Z === NAME  TestAccCluster_basicAdvancedConf
2025-10-30T03:45:02.4675506Z     resource_cluster_test.go:265: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:45:02.4676058Z         
2025-10-30T03:45:02.4677273Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4254420799383396395): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:45:02.4678017Z         
2025-10-30T03:45:02.4678297Z --- FAIL: TestAccCluster_basicAdvancedConf (11811.97s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 17 minutes
- 2025-11-04 PASS 19 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 44 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 16 minutes
- 2025-11-11 PASS 17 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13 PASS 26 minutes
- 2025-11-14 PASS 21 minutes
- 2025-11-15 PASS 18 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 23 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 16 minutes
- 2025-11-22 PASS 17 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 17 minutes
- 2025-11-25 PASS 23 minutes
- 2025-11-26 PASS 14 minutes
- 2025-11-27 PASS 26 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 18 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 15 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 16 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 17 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
