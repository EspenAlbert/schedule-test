# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) TIMEOUT(x 2)
Success rate: 100.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339270000) |  | dev | 6532.00s
[2025-07-23 11:39](#error-2025-07-23t1139380000) |  | qa | 5685.00s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 52 minutes
- 2025-07-03 PASS 54 minutes
- 2025-07-04 PASS 54 minutes
- 2025-07-05 PASS 53 minutes
- 2025-07-06 PASS 55 minutes
- 2025-07-07 PASS 50 minutes
- 2025-07-08 PASS an hour
- 2025-07-09 PASS 52 minutes
- 2025-07-10 PASS 52 minutes
- 2025-07-11

### Error 2025-07-11T03:39:27+00:00
```
2025-07-11T03:39:27.3927930Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-11T03:41:02.0295591Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-11T03:41:47.0335053Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-11T03:41:47.0336223Z     pre_check.go:40: Time before creating cluster: 2025-07-11T03:41:47.033242136Z, ProjectID: 6870876fd1742264a624a358, Cluster name: test-acc-tf-c-1063205525116125566
2025-07-11T05:29:53.6623833Z 		TestAccClusterAdvancedCluster_priorityNewSchema (1h48m52s)
2025-07-11T05:29:53.6624399Z 		TestAccClusterAdvancedCluster_priorityOldSchema (1h48m52s)
2025-07-11T05:29:53.6625244Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (1h48m52s)
```

- 2025-07-12 PASS 55 minutes
- 2025-07-13 PASS an hour
- 2025-07-14: MISSING
- 2025-07-15 PASS 57 minutes
- 2025-07-16 PASS 53 minutes
- 2025-07-17 PASS 53 minutes
- 2025-07-18 PASS an hour
- 2025-07-19 PASS 52 minutes
- 2025-07-20 PASS 54 minutes
- 2025-07-21 PASS 50 minutes
- 2025-07-22 PASS 53 minutes
- 2025-07-23
  - PASS 51 minutes
  - TIMEOUT an hour

### Error 2025-07-23T11:39:38+00:00
```
2025-07-23T11:39:38.2366885Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-23T11:40:40.7191675Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-23T11:41:30.7230324Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-07-23T11:41:30.7232318Z     pre_check.go:40: Time before creating cluster: 2025-07-23T11:41:30.722638686Z, ProjectID: 6880c9fa0afa8a5c604f9007, Cluster name: test-acc-tf-c-7221204384563873098
2025-07-23T13:15:25.5132383Z panic: test timed out after 5h0m0s
2025-07-23T13:15:25.5133027Z 	running tests:
2025-07-23T13:15:25.5133837Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (1h34m45s)
```

  - PASS 50 minutes
  - PASS 57 minutes
- 2025-07-24 PASS 50 minutes
- 2025-07-25 PASS 55 minutes
- 2025-07-26 PASS 54 minutes
- 2025-07-27 PASS 57 minutes
- 2025-07-28 PASS an hour
- 2025-07-29 PASS 57 minutes
- 2025-07-30 PASS 55 minutes
- 2025-07-31 PASS an hour