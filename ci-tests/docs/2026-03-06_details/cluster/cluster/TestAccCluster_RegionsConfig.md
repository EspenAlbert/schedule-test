# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 00:38](#error-2026-02-05t0038520000) |  | dev | timeout | 10802.08s
[2026-02-13 00:41](#error-2026-02-13t0041110000) |  | dev | timeout | 10802.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T00:38:52+00:00
```
2026-02-05T00:38:52.1779815Z === RUN   TestAccCluster_RegionsConfig
2026-02-05T00:38:52.1794770Z === CONT  TestAccCluster_RegionsConfig
2026-02-05T03:38:54.9460925Z === NAME  TestAccCluster_RegionsConfig
2026-02-05T03:38:54.9461754Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-05T03:38:54.9462420Z         
2026-02-05T03:38:54.9463597Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-05T03:38:54.9464379Z         
2026-02-05T03:38:54.9464670Z           with mongodbatlas_cluster.test,
2026-02-05T03:38:54.9465562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-05T03:38:54.9466157Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-05T03:38:54.9466645Z         
2026-02-05T03:38:54.9933907Z --- FAIL: TestAccCluster_RegionsConfig (10802.81s)
```

- 2026-02-06 PASS an hour
- 2026-02-07 PASS 55 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 58 minutes
- 2026-02-10 PASS 53 minutes
- 2026-02-11 PASS 55 minutes
- 2026-02-12 PASS an hour
- 2026-02-13

### Error 2026-02-13T00:41:11+00:00
```
2026-02-13T00:41:11.9303661Z === RUN   TestAccCluster_RegionsConfig
2026-02-13T00:41:11.9312065Z === CONT  TestAccCluster_RegionsConfig
2026-02-13T03:41:14.6359904Z === NAME  TestAccCluster_RegionsConfig
2026-02-13T03:41:14.6360553Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-13T03:41:14.6361140Z         
2026-02-13T03:41:14.6362215Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-13T03:41:14.6362932Z         
2026-02-13T03:41:14.6363314Z           with mongodbatlas_cluster.test,
2026-02-13T03:41:14.6364161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-13T03:41:14.6364838Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-13T03:41:14.6365130Z         
2026-02-13T03:41:14.6826879Z --- FAIL: TestAccCluster_RegionsConfig (10802.75s)
```

- 2026-02-14 PASS 55 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 57 minutes
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS 57 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 58 minutes
- 2026-02-24 PASS an hour
- 2026-02-25 PASS 59 minutes
- 2026-02-26 PASS an hour
- 2026-02-27 PASS an hour
- 2026-02-28 PASS 58 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 59 minutes
- 2026-03-03 PASS an hour
- 2026-03-04 PASS 58 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 38 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 41 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 49 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 44 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 45 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 52 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 46 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
