# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-22 00:42](#error-2026-09-22t0042570000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 14,15,16,17,18 | dev | 1924.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 34 minutes
- 2026-09-03
  - PASS 37 minutes
  - PASS 36 minutes
- 2026-09-04 PASS 45 minutes
- 2026-09-05 PASS 36 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 36 minutes
- 2026-09-08 PASS 37 minutes
- 2026-09-09 PASS 34 minutes
- 2026-09-10 PASS 54 minutes
- 2026-09-11
  - PASS an hour
  - PASS 53 minutes
- 2026-09-12 PASS 32 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 38 minutes
- 2026-09-15 PASS 37 minutes
- 2026-09-16 PASS 33 minutes
- 2026-09-17 PASS 54 minutes
- 2026-09-18 PASS 33 minutes
- 2026-09-19 PASS 32 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 28 minutes
- 2026-09-22
  - FAIL 32 minutes

### Error 2026-09-22T00:42:57+00:00
```
2026-09-22T00:42:57.6921361Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-09-22T00:44:34.5962604Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-09-22T01:13:32.9042687Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-09-22T01:13:32.9044764Z     effective_fields_test.go:264: Step 2/2 error: Check failed: Check 14/26 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected to be set
2026-09-22T01:13:32.9047200Z         Check 15/26 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.node_count' expected to be set
2026-09-22T01:13:32.9049967Z         Check 16/26 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_size_gb' expected to be set
2026-09-22T01:13:32.9052135Z         Check 17/26 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_iops' expected to be set
2026-09-22T01:13:32.9054328Z         Check 18/26 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.ebs_volume_type' expected to be set
2026-09-22T01:16:35.1454660Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (1924.14s)
```

  - PASS 32 minutes
- 2026-09-23
  - PASS 39 minutes
  - PASS 50 minutes
- 2026-09-24 PASS 30 minutes
- 2026-09-25 PASS 27 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 32 minutes
- 2026-09-29
  - PASS 33 minutes
  - PASS 33 minutes
  - PASS 37 minutes
- 2026-09-30 PASS 33 minutes
- 2026-10-01 PASS 30 minutes
- 2026-10-02 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 33 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 32 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 33 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 26 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 30 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 29 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
