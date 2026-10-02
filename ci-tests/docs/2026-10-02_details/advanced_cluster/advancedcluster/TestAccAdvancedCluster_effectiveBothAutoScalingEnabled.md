# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041560000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 25 | dev | 9691.08s
[2026-09-23 08:25](#error-2026-09-23t0825570000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 19,20,21,22,23,24 | dev | 1134.06s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 20 minutes
- 2026-09-03
  - PASS 19 minutes
  - PASS 18 minutes
- 2026-09-04 PASS 28 minutes
- 2026-09-05 PASS 16 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 19 minutes
- 2026-09-08 PASS 17 minutes
- 2026-09-09 PASS 20 minutes
- 2026-09-10 PASS 19 minutes
- 2026-09-11
  - FAIL 2 hours

### Error 2026-09-11T00:41:56+00:00
```
2026-09-11T00:41:56.0474072Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-11T00:45:00.1075242Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-11T03:24:58.8013342Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-11T03:24:58.8015413Z     effective_fields_test.go:193: Step 2/2 error: Check failed: Check 25/29 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected "M10", got "M20"
2026-09-11T03:26:30.8341279Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (9691.77s)
```

  - PASS 19 minutes
- 2026-09-12 PASS 18 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 19 minutes
- 2026-09-15 PASS 19 minutes
- 2026-09-16 PASS 18 minutes
- 2026-09-17 PASS 17 minutes
- 2026-09-18 PASS 24 minutes
- 2026-09-19 PASS 16 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 20 minutes
- 2026-09-22
  - PASS 20 minutes
  - PASS 16 minutes
- 2026-09-23
  - PASS 19 minutes
  - FAIL 18 minutes

### Error 2026-09-23T08:25:57+00:00
```
2026-09-23T08:25:57.7740837Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-23T08:27:38.3271237Z === CONT  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-23T08:44:01.0518846Z === NAME  TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-09-23T08:44:01.0520224Z     effective_fields_test.go:193: Step 2/2 error: Check failed: Check 19/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected to be set
2026-09-23T08:44:01.0522136Z         Check 20/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected to be set
2026-09-23T08:44:01.0523801Z         Check 21/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.node_count' expected to be set
2026-09-23T08:44:01.0525432Z         Check 22/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_size_gb' expected to be set
2026-09-23T08:44:01.0527045Z         Check 23/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_iops' expected to be set
2026-09-23T08:44:01.0528667Z         Check 24/29 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.ebs_volume_type' expected to be set
2026-09-23T08:46:32.4976351Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (1134.55s)
```

- 2026-09-24 PASS 17 minutes
- 2026-09-25 PASS 18 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 19 minutes
- 2026-09-29
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-09-30 PASS 20 minutes
- 2026-10-01 PASS 17 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 16 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 20 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 19 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
