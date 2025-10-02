# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026050000) |  | dev | timeout | 10806.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 44 minutes
- 2025-09-20 PASS 40 minutes
- 2025-09-21 PASS 38 minutes
- 2025-09-22 PASS 37 minutes
- 2025-09-23 PASS 39 minutes
- 2025-09-24 PASS 42 minutes
- 2025-09-25 PASS 40 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 33 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29 PASS 19 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 24 minutes
- 2025-10-01
  - PASS an hour
  - PASS 19 minutes
  - PASS 33 minutes
  - PASS 44 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-10-02

### Error 2025-10-02T00:26:05+00:00
```
2025-10-02T00:26:05.8814750Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T00:26:09.5720278Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:13.7062823Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:13.7063670Z     resource_migration_v1x_test.go:20: Step 1/4 error: Error running apply: exit status 1
2025-10-02T03:26:13.7064100Z         
2025-10-02T03:26:13.7064368Z         Error: Error in create
2025-10-02T03:26:13.7064626Z         
2025-10-02T03:26:13.7066871Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:26:13.7067554Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:26:13.7068156Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:26:13.7068493Z         
2025-10-02T03:26:13.7068960Z         cluster=test-acc-tf-c-358464567825752915 didn't reach desired state: IDLE,
2025-10-02T03:26:13.7069573Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-02T03:26:13.7070004Z         'CREATING', timeout: 3h0m0s)
2025-10-02T03:26:13.9180327Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10806.34s)
```
