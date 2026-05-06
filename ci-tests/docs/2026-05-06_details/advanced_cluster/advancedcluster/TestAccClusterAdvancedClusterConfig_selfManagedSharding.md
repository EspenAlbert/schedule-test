# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047080000) |  | dev | timeout | 12061.05s
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters | dev | out_of_capacity | 16.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:08+00:00
```
2026-04-07T00:47:08.2141811Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-07T00:48:53.7997031Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-07T04:09:55.2816951Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-07T04:09:55.2817679Z     resource_test.go:587: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:09:55.2818163Z         
2026-04-07T04:09:55.2818412Z         Error: Error in delete
2026-04-07T04:09:55.2818663Z         
2026-04-07T04:09:55.2819371Z         cluster=test-acc-tf-c-6907004249865256405 didn't reach desired state:
2026-04-07T04:09:55.2820014Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:09:55.2820480Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:09:55.2820910Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (12061.48s)
```

- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 34 minutes
- 2026-04-10 PASS 33 minutes
- 2026-04-11 PASS 19 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 23 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4671125Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-16T00:54:54.4772825Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-16T00:54:59.4022584Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-04-16T00:54:59.4023772Z     resource_test.go:587: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:54:59.4024778Z         
2026-04-16T00:54:59.4025366Z         Error: Error in create
2026-04-16T00:54:59.4025924Z         
2026-04-16T00:54:59.4026642Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.4028090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.4029386Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.4030160Z         
2026-04-16T00:54:59.4031866Z         cluster name: test-acc-tf-c-12718645447989999, API error details:
2026-04-16T00:54:59.4033306Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters
2026-04-16T00:54:59.4034951Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.4036328Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.4037388Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.4065664Z   
2026-04-16T00:54:59.7843956Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (16.11s)
```

- 2026-04-17 PASS 21 minutes
- 2026-04-18 PASS 33 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 30 minutes
- 2026-04-22 PASS 38 minutes
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 26 minutes
- 2026-04-25 PASS 21 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 24 minutes
- 2026-04-30 PASS 34 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 21 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 23 minutes
  - PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 28 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 22 minutes
- 2026-05-04 PASS 53 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes
