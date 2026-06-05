# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-18 01:00](#error-2026-05-18t0100190000) |  | dev | 1827.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 37 minutes
  - PASS 56 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 30 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 16 minutes
- 2026-05-14 PASS 43 minutes
- 2026-05-15 PASS 19 minutes
- 2026-05-16 PASS 20 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:19+00:00
```
2026-05-18T01:00:19.2777870Z === RUN   TestAccCluster_basicAWS_simple
2026-05-18T01:00:24.5697241Z === CONT  TestAccCluster_basicAWS_simple
2026-05-18T01:01:24.5807357Z === NAME  TestAccCluster_basicAWS_simple
2026-05-18T01:01:24.5809415Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:01:24.580444717Z, ProjectID: 6a0a64a16fb087b449d98ae8, Cluster name: test-acc-tf-c-6017672216577676534
2026-05-18T01:22:36.9687528Z   
2026-05-18T01:22:36.9688118Z     resource_cluster_test.go:29: Step 2/3 error: Error running apply: exit status 1
2026-05-18T01:22:36.9688745Z         
2026-05-18T01:22:36.9691767Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6017672216577676534): error updating MongoDB Cluster (test-acc-tf-c-6017672216577676534): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64a16fb087b449d98ae8/clusters/test-acc-tf-c-6017672216577676534 GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-05-18T01:22:36.9695477Z         
2026-05-18T01:22:36.9695802Z           with mongodbatlas_cluster.test,
2026-05-18T01:22:36.9696439Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-18T01:22:36.9697027Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-05-18T01:22:36.9697340Z         
2026-05-18T01:22:37.8099927Z    test_name=TestMigCluster_basicAWS_simple test_step_number=2
2026-05-18T01:30:51.8075510Z --- FAIL: TestAccCluster_basicAWS_simple (1827.23s)
```

- 2026-05-19 PASS 19 minutes
- 2026-05-20 PASS 21 minutes
- 2026-05-21 PASS 26 minutes
- 2026-05-22 PASS 40 minutes
- 2026-05-23 PASS 24 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 27 minutes
- 2026-05-26 PASS 21 minutes
- 2026-05-27 PASS 44 minutes
- 2026-05-28 PASS 27 minutes
- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 19 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 31 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 33 minutes
- 2026-06-04 PASS 52 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
