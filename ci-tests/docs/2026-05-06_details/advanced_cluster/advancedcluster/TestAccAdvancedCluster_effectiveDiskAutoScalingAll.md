# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskAutoScalingAll Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 5.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 46 minutes
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 34 minutes
- 2026-04-10 PASS 29 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7577608Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-04-16T00:54:54.6816981Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-04-16T00:54:59.6934244Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-04-16T00:54:59.6935480Z     effective_fields_test.go:149: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.6936188Z         
2026-04-16T00:54:59.6936604Z         Error: Error in create
2026-04-16T00:54:59.6937006Z         
2026-04-16T00:54:59.6937568Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6938953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6940090Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6940632Z         
2026-04-16T00:54:59.6941379Z         cluster name: test-acc-tf-c-1676886064900189208, API error details:
2026-04-16T00:54:59.6942590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.6943832Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6945263Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6946185Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6969549Z    test_working_directory=/tmp/plugintest149115007 test_step_number=1
2026-04-16T00:54:59.8623312Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (5.82s)
```

- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 31 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 25 minutes
- 2026-04-22 PASS 38 minutes
- 2026-04-23 PASS 35 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 19 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30 PASS 29 minutes
- 2026-05-01 PASS 18 minutes
- 2026-05-02 PASS 18 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 21 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
