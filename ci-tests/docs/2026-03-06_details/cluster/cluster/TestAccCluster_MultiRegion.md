# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 00:38](#error-2026-02-12t0038070000) |  | dev | timeout | 11829.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 43 minutes
- 2026-02-06 PASS 44 minutes
- 2026-02-07 PASS 42 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 42 minutes
- 2026-02-10 PASS 42 minutes
- 2026-02-11 PASS 41 minutes
- 2026-02-12

### Error 2026-02-12T00:38:07+00:00
```
2026-02-12T00:38:07.8240277Z === RUN   TestAccCluster_MultiRegion
2026-02-12T00:38:14.1160728Z === CONT  TestAccCluster_MultiRegion
2026-02-12T03:52:57.7947586Z === NAME  TestAccCluster_MultiRegion
2026-02-12T03:52:57.7948180Z     resource_cluster_test.go:479: Step 2/2 error: Error running apply: exit status 1
2026-02-12T03:52:57.7948611Z         
2026-02-12T03:52:57.7949954Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8833291637545940445): error updating MongoDB Cluster (test-acc-tf-c-8833291637545940445): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-02-12T03:52:57.7951191Z         
2026-02-12T03:52:57.7951558Z           with mongodbatlas_cluster.multi_region,
2026-02-12T03:52:57.7952278Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-12T03:52:57.7952932Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-12T03:52:57.7953265Z         
2026-02-12T03:55:21.6906183Z --- FAIL: TestAccCluster_MultiRegion (11829.68s)
```

- 2026-02-13 PASS 41 minutes
- 2026-02-14 PASS 43 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 43 minutes
- 2026-02-17 PASS 43 minutes
- 2026-02-18 PASS 45 minutes
- 2026-02-19 PASS 52 minutes
- 2026-02-20 PASS 45 minutes
- 2026-02-21 PASS 44 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 45 minutes
- 2026-02-24 PASS 47 minutes
- 2026-02-25 PASS 43 minutes
- 2026-02-26 PASS 46 minutes
- 2026-02-27 PASS 43 minutes
- 2026-02-28 PASS 43 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 42 minutes
- 2026-03-03 PASS 47 minutes
- 2026-03-04 PASS 41 minutes
- 2026-03-05 PASS 50 minutes
- 2026-03-06 PASS 50 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 35 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 37 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 40 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 37 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 38 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 42 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 37 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
