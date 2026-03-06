# cluster/cluster/TestAccCluster_Global Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 00:38](#error-2026-02-12t0038090000) |  | dev | timeout | 10802.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 37 minutes
- 2026-02-06 PASS 40 minutes
- 2026-02-07 PASS 35 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 38 minutes
- 2026-02-10 PASS 34 minutes
- 2026-02-11 PASS 35 minutes
- 2026-02-12

### Error 2026-02-12T00:38:09+00:00
```
2026-02-12T00:38:09.9268239Z === RUN   TestAccCluster_Global
2026-02-12T00:38:14.1155276Z === CONT  TestAccCluster_Global
2026-02-12T03:38:16.8071657Z === NAME  TestAccCluster_Global
2026-02-12T03:38:16.8072350Z     resource_cluster_test.go:589: Step 1/1 error: Error running apply: exit status 1
2026-02-12T03:38:16.8072854Z         
2026-02-12T03:38:16.8073872Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-12T03:38:16.8074530Z         
2026-02-12T03:38:16.8074961Z           with mongodbatlas_cluster.test,
2026-02-12T03:38:16.8075722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-12T03:38:16.8076595Z           12: 		resource "mongodbatlas_cluster" test {
2026-02-12T03:38:16.8076919Z         
2026-02-12T03:38:16.8536799Z --- FAIL: TestAccCluster_Global (10802.74s)
```

- 2026-02-13 PASS 37 minutes
- 2026-02-14 PASS 32 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 37 minutes
- 2026-02-17 PASS 33 minutes
- 2026-02-18 PASS 40 minutes
- 2026-02-19 PASS 50 minutes
- 2026-02-20 PASS 39 minutes
- 2026-02-21 PASS 34 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24 PASS 36 minutes
- 2026-02-25 PASS 34 minutes
- 2026-02-26 PASS 41 minutes
- 2026-02-27 PASS 34 minutes
- 2026-02-28 PASS 35 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 36 minutes
- 2026-03-03 PASS 42 minutes
- 2026-03-04 PASS 34 minutes
- 2026-03-05 PASS 45 minutes
- 2026-03-06 PASS 41 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 29 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
