# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-27 00:40](#error-2026-02-27t0040370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a0e7d9f16f089968abeaee/clusters | dev | out_of_capacity | 3.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 30 minutes
- 2026-02-06 PASS 32 minutes
- 2026-02-07 PASS 25 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 25 minutes
- 2026-02-11 PASS 29 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 26 minutes
- 2026-02-14 PASS 25 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 25 minutes
- 2026-02-18 PASS 29 minutes
- 2026-02-19 PASS 45 minutes
- 2026-02-20 PASS 33 minutes
- 2026-02-21 PASS 27 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24 PASS 29 minutes
- 2026-02-25 PASS 26 minutes
- 2026-02-26 PASS 36 minutes
- 2026-02-27

### Error 2026-02-27T00:40:37+00:00
```
2026-02-27T00:40:37.9225822Z === RUN   TestAccClusterAPI_moveBasic
2026-02-27T00:40:37.9227121Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7205839534260790614
2026-02-27T00:40:37.9232193Z === CONT  TestAccClusterAPI_moveBasic
2026-02-27T00:40:37.9290610Z === NAME  TestAccClusterAPI_moveBasic
2026-02-27T00:40:37.9291412Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-27T00:40:37.9292035Z         
2026-02-27T00:40:37.9292526Z         Error: Error calling API in Create
2026-02-27T00:40:37.9293012Z         
2026-02-27T00:40:37.9293570Z           with mongodbatlas_cluster_old_api.old,
2026-02-27T00:40:37.9294738Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-02-27T00:40:37.9295857Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-02-27T00:40:37.9296593Z         
2026-02-27T00:40:37.9297536Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a0e7d9f16f089968abeaee/clusters
2026-02-27T00:40:37.9298811Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-27T00:40:37.9300249Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-27T00:40:37.9301172Z         Conflict. Params: [], BadRequestDetail: 
2026-02-27T00:40:37.9301763Z --- FAIL: TestAccClusterAPI_moveBasic (3.78s)
```

- 2026-02-28 PASS 26 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 25 minutes
  - PASS 24 minutes
- 2026-03-03 PASS 30 minutes
- 2026-03-04 PASS 28 minutes
- 2026-03-05 PASS 44 minutes
- 2026-03-06 PASS 30 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 20 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 21 minutes
- 2026-03-02 PASS 16 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
