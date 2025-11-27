# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11754.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1390747Z === RUN   TestAccCluster_partial_advancedConf
2025-10-30T00:28:10.4958807Z === CONT  TestAccCluster_partial_advancedConf
2025-10-30T00:28:40.5031742Z === NAME  TestAccCluster_partial_advancedConf
2025-10-30T00:28:40.5034008Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:40.502884643Z, ProjectID: 6902b112abf4374f32989f92, Cluster name: test-acc-tf-c-5464657024506341047
2025-10-30T03:44:04.4952117Z === NAME  TestAccCluster_partial_advancedConf
2025-10-30T03:44:04.4952957Z     resource_cluster_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:04.4953436Z         
2025-10-30T03:44:04.4954334Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-5464657024506341047): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:04.4954981Z         
2025-10-30T03:44:04.4955263Z --- FAIL: TestAccCluster_partial_advancedConf (11754.00s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 23 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 24 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 44 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 16 minutes
- 2025-11-12 PASS 18 minutes
- 2025-11-13 PASS 26 minutes
- 2025-11-14 PASS 21 minutes
- 2025-11-15 PASS 18 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 21 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 17 minutes
- 2025-11-22 PASS 18 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 17 minutes
- 2025-11-25 PASS 22 minutes
- 2025-11-26 PASS 17 minutes
- 2025-11-27 PASS 25 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 17 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 16 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 20 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
