# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931af4f6cc389e8089a/clusters/test-acc-tf-c-1563503014311748690 | dev | flaky_500 | 270.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 24 minutes
  - PASS 17 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 26 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 18 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 20 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 17 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 19 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 16 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 22 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 17 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 18 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:43+00:00
```
2026-01-07T00:30:43.8365818Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:30:43.8375569Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:18.1302874Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/6b13dd37-beca-4ca0-b447-5fd3a6f2ccbd/terraform test_working_directory=/tmp/plugintest1640109998
2026-01-07T00:35:13.9973788Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:35:13.9974563Z     resource_migration_v1x_test.go:302: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:35:13.9975091Z         
2026-01-07T00:35:13.9977119Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e8089a/clusters/test-acc-tf-c-1563503014311748690 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:13.9978370Z         
2026-01-07T00:35:13.9978704Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:35:13.9979365Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:35:13.9979977Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:35:13.9980299Z         
2026-01-07T00:35:14.2067658Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (270.37s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 14 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
