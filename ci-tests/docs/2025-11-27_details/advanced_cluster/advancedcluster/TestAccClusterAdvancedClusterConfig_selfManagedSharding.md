# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 11841.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8268595Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T00:29:52.4607350Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T03:47:13.6018144Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T03:47:13.6019075Z     resource_test.go:626: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:47:13.6019692Z         
2025-10-30T03:47:13.6020016Z         Error: Error in delete
2025-10-30T03:47:13.6020665Z         
2025-10-30T03:47:13.6021232Z         cluster=test-acc-tf-c-8255530908908067890 didn't reach desired state:
2025-10-30T03:47:13.6022258Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:47:13.6022736Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:47:13.6023160Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (11841.14s)
```

- 2025-10-31 PASS 20 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 19 minutes
- 2025-11-05
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13 PASS 29 minutes
- 2025-11-14 PASS 22 minutes
- 2025-11-15 PASS 18 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 23 minutes
- 2025-11-18 PASS 17 minutes
- 2025-11-19
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-11-20
  - PASS 28 minutes
  - PASS 14 minutes
- 2025-11-21 PASS 17 minutes
- 2025-11-22 PASS 17 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 17 minutes
- 2025-11-25 PASS 19 minutes
- 2025-11-26 PASS 16 minutes
- 2025-11-27 PASS 26 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029450000) |  | qa | 5.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:45+00:00
```
2025-11-02T00:29:45.9166665Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:20.5649220Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:25.4264821Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:25.4266958Z     resource_test.go:626: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.4268837Z         
2025-11-02T00:31:25.4270583Z         Error: Error in create
2025-11-02T00:31:25.4272585Z         
2025-11-02T00:31:25.4274314Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.4276624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.4279205Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.4280830Z         
2025-11-02T00:31:25.4282642Z         cluster name: test-acc-tf-c-9090896152896017147, API error details:
2025-11-02T00:31:25.4284921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5f75ace12378d295e75/clusters
2025-11-02T00:31:25.4288198Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.4294540Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.4312656Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.4313720Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.4314426Z         BadRequestDetail: 
2025-11-02T00:31:25.4356268Z   
2025-11-02T00:31:25.7173429Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.16s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 18 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 19 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
