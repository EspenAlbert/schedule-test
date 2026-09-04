# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS 23 minutes
- 2026-08-29 PASS 22 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 20 minutes
- 2026-09-01 PASS 23 minutes
- 2026-09-02 PASS 19 minutes
- 2026-09-03
  - PASS 21 minutes
  - PASS 26 minutes
- 2026-09-04 PASS 37 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-30 00:46](#error-2026-08-30t0046140000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 17,18,19,20,21,22 | qa | 1072.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T00:46:14+00:00
```
2026-08-30T00:46:14.4931669Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-08-30T00:48:29.8526134Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-08-30T01:03:50.0525010Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-08-30T01:03:50.0526818Z     effective_fields_test.go:216: Step 2/3 error: Check failed: Check 17/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected to be set
2026-08-30T01:03:50.0529794Z         Check 18/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected to be set
2026-08-30T01:03:50.0533138Z         Check 19/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.node_count' expected to be set
2026-08-30T01:03:50.0536171Z         Check 20/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_size_gb' expected to be set
2026-08-30T01:03:50.0539190Z         Check 21/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_iops' expected to be set
2026-08-30T01:03:50.0542751Z         Check 22/27 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.ebs_volume_type' expected to be set
2026-08-30T01:06:21.7029294Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (1072.30s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
