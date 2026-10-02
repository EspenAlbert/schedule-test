# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-22 00:43](#error-2026-09-22t0043000000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 20,21,22,23,24 | dev | 1981.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 48 minutes
- 2026-09-03
  - PASS 59 minutes
  - PASS 53 minutes
- 2026-09-04 PASS an hour
- 2026-09-05 PASS 51 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 56 minutes
- 2026-09-08 PASS an hour
- 2026-09-09 PASS an hour
- 2026-09-10 PASS an hour
- 2026-09-11
  - PASS 2 hours
  - PASS an hour
- 2026-09-12 PASS 59 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS an hour
- 2026-09-15 PASS 57 minutes
- 2026-09-16 PASS 52 minutes
- 2026-09-17 PASS an hour
- 2026-09-18 PASS 53 minutes
- 2026-09-19 PASS 52 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS an hour
- 2026-09-22
  - FAIL 33 minutes

### Error 2026-09-22T00:43:00+00:00
```
2026-09-22T00:43:00.5369235Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-09-22T00:44:34.5752347Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-09-22T01:14:33.4274459Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-09-22T01:14:33.4276907Z     effective_fields_test.go:289: Step 2/6 error: Check failed: Check 20/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected to be set
2026-09-22T01:14:33.4280758Z         Check 21/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.node_count' expected to be set
2026-09-22T01:14:33.4284001Z         Check 22/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_size_gb' expected to be set
2026-09-22T01:14:33.4287126Z         Check 23/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_iops' expected to be set
2026-09-22T01:14:33.4290375Z         Check 24/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.ebs_volume_type' expected to be set
2026-09-22T01:17:35.7795756Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (1981.93s)
```

  - PASS an hour
- 2026-09-23
  - PASS an hour
  - PASS 57 minutes
- 2026-09-24 PASS 49 minutes
- 2026-09-25 PASS 44 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 57 minutes
- 2026-09-29
  - PASS 59 minutes
  - PASS an hour
  - PASS an hour
- 2026-09-30 PASS 48 minutes
- 2026-10-01 PASS 58 minutes
- 2026-10-02 PASS 44 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 55 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 48 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 49 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 48 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS an hour
- 2026-09-28: MISSING
- 2026-09-29 PASS 59 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
