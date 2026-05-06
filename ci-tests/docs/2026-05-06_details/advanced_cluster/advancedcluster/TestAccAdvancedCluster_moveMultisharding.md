# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046570000) |  | dev | timeout | 12211.04s
[2026-04-16 00:51](#error-2026-04-16t0051220000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032838379397d109d0bb0/clusters | dev | out_of_capacity | 5.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:57+00:00
```
2026-04-07T00:46:57.6036584Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-04-07T00:48:53.8003445Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-04-07T04:12:25.2315238Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-04-07T04:12:25.2315999Z     move_upgrade_state_test.go:45: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:12:25.2316555Z         
2026-04-07T04:12:25.2316815Z         Error: Error in delete
2026-04-07T04:12:25.2317378Z         
2026-04-07T04:12:25.2317838Z         cluster=test-acc-tf-c-4209142444105813093 didn't reach desired state:
2026-04-07T04:12:25.2318520Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:12:25.2319307Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:12:25.2319693Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (12211.43s)
```

- 2026-04-08 PASS 26 minutes
- 2026-04-09 PASS 39 minutes
- 2026-04-10 PASS 35 minutes
- 2026-04-11 PASS 21 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14 PASS 23 minutes
- 2026-04-15 PASS 27 minutes
- 2026-04-16

### Error 2026-04-16T00:51:22+00:00
```
2026-04-16T00:51:22.2096607Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-04-16T00:54:54.5970004Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-04-16T00:54:59.0518197Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-04-16T00:54:59.0519288Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.0520049Z         
2026-04-16T00:54:59.0522857Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032838379397d109d0bb0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:54:59.0525041Z         
2026-04-16T00:54:59.0525650Z           with mongodbatlas_cluster.old,
2026-04-16T00:54:59.0526824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-04-16T00:54:59.0527944Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-04-16T00:54:59.0528883Z         
2026-04-16T00:54:59.1238014Z    test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_name=TestAccAdvancedCluster_effectiveSetToUnset test_working_directory=/tmp/plugintest883414720 test_step_number=1
2026-04-16T00:54:59.1301309Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (5.13s)
```

- 2026-04-17 PASS 27 minutes
- 2026-04-18 PASS 34 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 30 minutes
- 2026-04-22 PASS 37 minutes
- 2026-04-23 PASS 37 minutes
- 2026-04-24 PASS 26 minutes
- 2026-04-25 PASS 28 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 30 minutes
- 2026-04-28 PASS 29 minutes
- 2026-04-29 PASS 29 minutes
- 2026-04-30 PASS 29 minutes
- 2026-05-01 PASS 26 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 40 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 25 minutes
  - PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 29 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 25 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 27 minutes
