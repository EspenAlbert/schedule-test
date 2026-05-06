# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047080000) |  | dev | timeout | 11548.10s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0336381002038a8a1f7cf/clusters | dev | out_of_capacity | 11.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:08+00:00
```
2026-04-07T00:47:08.2815305Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-07T00:48:53.8087181Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-07T00:48:55.7810139Z   diagnostic_detail=
2026-04-07T00:48:55.7939234Z    diagnostic_summary="Missing Configuration for Required Attribute"
2026-04-07T04:01:22.7945466Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-07T04:01:22.7946209Z     resource_test.go:677: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:01:22.7946713Z         
2026-04-07T04:01:22.7946971Z         Error: Error in delete
2026-04-07T04:01:22.7947217Z         
2026-04-07T04:01:22.7947644Z         cluster=test-acc-tf-c-5787819160377604828 didn't reach desired state:
2026-04-07T04:01:22.7948283Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:01:22.7948758Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:01:22.7949530Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11548.96s)
```

- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 30 minutes
- 2026-04-10 PASS 35 minutes
- 2026-04-11 PASS 14 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 17 minutes
- 2026-04-15 PASS 17 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.8555173Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-16T00:54:54.5153628Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-16T00:55:04.4089911Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-16T00:55:04.4091225Z     resource_test.go:677: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:55:04.4092443Z         
2026-04-16T00:55:04.4093175Z         Error: Error in create
2026-04-16T00:55:04.4093626Z         
2026-04-16T00:55:04.4094538Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:04.4096719Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:04.4098433Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:04.4099108Z         
2026-04-16T00:55:04.4099995Z         cluster name: test-acc-tf-c-4445707393563338581, API error details:
2026-04-16T00:55:04.4101439Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0336381002038a8a1f7cf/clusters
2026-04-16T00:55:04.4102791Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:04.4103985Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:04.4106254Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.4618083Z   
2026-04-16T00:55:05.3014655Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11.31s)
```

- 2026-04-17 PASS 15 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 28 minutes
- 2026-04-22 PASS 41 minutes
- 2026-04-23 PASS 36 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 25 minutes
- 2026-04-30 PASS 32 minutes
- 2026-05-01 PASS 18 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 12 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
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
- 2026-05-03 PASS 15 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
