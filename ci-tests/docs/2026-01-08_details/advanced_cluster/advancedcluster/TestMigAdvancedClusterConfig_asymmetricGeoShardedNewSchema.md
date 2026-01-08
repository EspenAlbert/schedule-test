# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da938d59b8466ea72895c/clusters/test-acc-tf-c-4534790073412231235 | dev | flaky_500 | 189.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 22 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 22 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 26 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 26 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 20 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 23 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 24 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:50+00:00
```
2026-01-07T00:30:50.8818938Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-01-07T00:31:16.8396667Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-01-07T00:34:25.9076312Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-01-07T00:34:25.9076900Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:34:25.9077273Z         
2026-01-07T00:34:25.9077518Z         Error: Error in create
2026-01-07T00:34:25.9077756Z         
2026-01-07T00:34:25.9078082Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:25.9078662Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:25.9079205Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:25.9079500Z         
2026-01-07T00:34:25.9079925Z         cluster=test-acc-tf-c-4534790073412231235 didn't reach desired state: IDLE,
2026-01-07T00:34:25.9080306Z         error:
2026-01-07T00:34:25.9080952Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da938d59b8466ea72895c/clusters/test-acc-tf-c-4534790073412231235
2026-01-07T00:34:25.9081678Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:25.9082202Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:25.9082768Z         BadRequestDetail: 
2026-01-07T00:34:26.0843999Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (189.25s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 19 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
