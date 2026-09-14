# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041560000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 25 | dev | 9691.08s

### Timeline
- 2026-09-07: MISSING
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
