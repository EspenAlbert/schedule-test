# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053080000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters | dev | out_of_capacity | 45.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 50 minutes
- 2026-04-08 PASS 16 minutes
- 2026-04-09 PASS 39 minutes
- 2026-04-10 PASS 34 minutes
- 2026-04-11 PASS 17 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 15 minutes
- 2026-04-14 PASS 15 minutes
- 2026-04-15 PASS 19 minutes
- 2026-04-16

### Error 2026-04-16T00:53:08+00:00
```
2026-04-16T00:53:08.4152909Z === RUN   TestAccCluster_withAutoScalingAWS
2026-04-16T00:53:12.1705063Z === CONT  TestAccCluster_withAutoScalingAWS
2026-04-16T00:53:14.3477391Z    test_terraform_path=/home/runner/work/_temp/9471bf85-4be6-4dec-8183-4ca56d6cc8e8/terraform test_working_directory=/tmp/plugintest3544181969
2026-04-16T00:53:57.0882302Z === NAME  TestAccCluster_withAutoScalingAWS
2026-04-16T00:53:57.0884500Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:57.087913063Z, ProjectID: 69e032be1ec945fedc72a160, Cluster name: test-acc-tf-c-8136758481039600613
2026-04-16T00:53:57.8488631Z   
2026-04-16T00:53:57.8489480Z     resource_cluster_test.go:982: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:57.8489934Z         
2026-04-16T00:53:57.8491395Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:57.8492418Z         
2026-04-16T00:53:57.8492754Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:57.8493413Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:57.8494019Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:57.8494337Z         
2026-04-16T00:53:57.8965104Z --- FAIL: TestAccCluster_withAutoScalingAWS (45.81s)
```

- 2026-04-17 PASS 15 minutes
- 2026-04-18 PASS 24 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 minutes
- 2026-04-21 PASS 23 minutes
- 2026-04-22 PASS 58 minutes
- 2026-04-23 PASS 29 minutes
- 2026-04-24 PASS 18 minutes
- 2026-04-25 PASS 15 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30 PASS 32 minutes
- 2026-05-01 PASS 19 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 20 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 16 minutes
  - PASS 13 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 16 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
