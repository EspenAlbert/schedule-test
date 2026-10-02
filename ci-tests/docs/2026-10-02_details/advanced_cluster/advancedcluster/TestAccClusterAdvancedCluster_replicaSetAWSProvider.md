# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 00:45](#error-2026-09-29t0045470000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abb0a37b681a1ee4aa882eb/clusters/test-acc-tf-c-1023677893060447903 | dev | 528.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS an hour
- 2026-09-03
  - PASS an hour
  - PASS an hour
- 2026-09-04 PASS an hour
- 2026-09-05 PASS an hour
- 2026-09-06: MISSING
- 2026-09-07 PASS an hour
- 2026-09-08 PASS an hour
- 2026-09-09 PASS an hour
- 2026-09-10 PASS an hour
- 2026-09-11
  - PASS 3 hours
  - PASS 2 hours
- 2026-09-12 PASS an hour
- 2026-09-13: MISSING
- 2026-09-14 PASS an hour
- 2026-09-15 PASS an hour
- 2026-09-16 PASS an hour
- 2026-09-17 PASS an hour
- 2026-09-18 PASS an hour
- 2026-09-19 PASS an hour
- 2026-09-20: MISSING
- 2026-09-21 PASS an hour
- 2026-09-22
  - PASS an hour
  - PASS an hour
- 2026-09-23
  - PASS an hour
  - PASS an hour
- 2026-09-24 PASS an hour
- 2026-09-25 PASS an hour
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS an hour
- 2026-09-29
  - FAIL 8 minutes

### Error 2026-09-29T00:45:47+00:00
```
2026-09-29T00:45:47.0563599Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-09-29T00:47:21.0158973Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-09-29T00:48:35.6465983Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-09-29T00:48:35.6467990Z     pre_check.go:46: Time before creating cluster: 2026-09-29T00:48:35.646262451Z, ProjectID: 6abb0a37b681a1ee4aa882eb, Cluster name: test-acc-tf-c-1023677893060447903
2026-09-29T00:56:09.4305234Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-09-29T00:56:09.4306598Z     resource_test.go:77: Step 1/4 error: Error running apply: exit status 1
2026-09-29T00:56:09.4307400Z         
2026-09-29T00:56:09.4307925Z         Error: Error in create
2026-09-29T00:56:09.4308411Z         
2026-09-29T00:56:09.4309055Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T00:56:09.4310340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T00:56:09.4311540Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T00:56:09.4312162Z         
2026-09-29T00:56:09.4313058Z         cluster=test-acc-tf-c-1023677893060447903 didn't reach desired state: IDLE,
2026-09-29T00:56:09.4313850Z         error:
2026-09-29T00:56:09.4315258Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb0a37b681a1ee4aa882eb/clusters/test-acc-tf-c-1023677893060447903
2026-09-29T00:56:09.4317833Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T00:56:09.4319194Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T00:56:09.4320172Z         [], BadRequestDetail: 
2026-09-29T00:56:09.4878739Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (528.82s)
```

  - PASS an hour
  - PASS an hour
- 2026-09-30 PASS an hour
- 2026-10-01 PASS an hour
- 2026-10-02 PASS an hour

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS an hour
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS an hour
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS an hour
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS an hour
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS an hour
- 2026-09-28: MISSING
- 2026-09-29 PASS an hour
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
