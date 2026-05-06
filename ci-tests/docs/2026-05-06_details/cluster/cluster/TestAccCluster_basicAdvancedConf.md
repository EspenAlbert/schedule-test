# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 47 minutes
- 2026-04-08 PASS 23 minutes
- 2026-04-09 PASS 28 minutes
- 2026-04-10 PASS 35 minutes
- 2026-04-11 PASS 19 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 21 minutes
- 2026-04-15 PASS 28 minutes
- 2026-04-16

### Error 2026-04-16T00:50:58+00:00
```
2026-04-16T00:50:58.7662566Z === RUN   TestAccCluster_basicAdvancedConf
2026-04-16T00:53:12.0721357Z === CONT  TestAccCluster_basicAdvancedConf
2026-04-16T00:53:27.0748446Z === NAME  TestAccCluster_basicAdvancedConf
2026-04-16T00:53:27.0750910Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:27.074524005Z, ProjectID: 69e0325d1ec945fedc71bf72, Cluster name: test-acc-tf-c-7769924800225464445
2026-04-16T00:53:27.8201824Z    test_name=TestAccCluster_basicAdvancedConf
2026-04-16T00:53:27.8202826Z     resource_cluster_test.go:265: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:27.8203615Z         
2026-04-16T00:53:27.8205810Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:27.8206977Z         
2026-04-16T00:53:27.8207566Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:27.8208239Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:27.8209117Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:27.8209445Z         
2026-04-16T00:53:27.8692193Z --- FAIL: TestAccCluster_basicAdvancedConf (15.80s)
```

- 2026-04-17 PASS 24 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 22 minutes
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 57 minutes
- 2026-04-23 PASS 30 minutes
- 2026-04-24 PASS 23 minutes
- 2026-04-25 PASS 21 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 22 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30 PASS 31 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 18 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 25 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 22 minutes
