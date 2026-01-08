# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 19 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:34](#error-2026-01-07t0034240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da94eaf4f6cc389e88e6e/clusters | dev | flaky_500 | 30.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 26 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 31 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 24 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 27 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 28 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 26 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 24 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 24 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:34:24+00:00
```
2026-01-07T00:34:24.2981221Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:34:24.2984454Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:34:24.3000927Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:34:24.3002108Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:34:24.3002843Z         
2026-01-07T00:34:24.3003319Z         Error: Error in create
2026-01-07T00:34:24.3003703Z         
2026-01-07T00:34:24.3004069Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:24.3004721Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:24.3005951Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:24.3006276Z         
2026-01-07T00:34:24.3006686Z         cluster name: test-acc-tf-c-8900762656998236285, API error details:
2026-01-07T00:34:24.3007361Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da94eaf4f6cc389e88e6e/clusters
2026-01-07T00:34:24.3008042Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:24.3008783Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:24.3009177Z         BadRequestDetail: 
2026-01-07T00:34:24.3014865Z    test_step_number=1 test_name=TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:34:24.3015757Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:34:24.3016189Z         
2026-01-07T00:34:24.3016482Z         Error: error when destroying resource
2026-01-07T00:34:24.3016763Z         
2026-01-07T00:34:24.3017099Z         error deleting project (695da94eaf4f6cc389e88e6e):
2026-01-07T00:34:24.3017672Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da94eaf4f6cc389e88e6e
2026-01-07T00:34:24.3018157Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:34:24.3018946Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:34:24.3019964Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:34:24.3020410Z         Params: [], BadRequestDetail: 
2026-01-07T00:34:24.3020782Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (30.81s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09 PASS 22 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 26 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 23 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
