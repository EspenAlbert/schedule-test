# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037020000) |  | dev | flaky_500 | 1386.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 34 minutes
- 2026-02-06 PASS 31 minutes
- 2026-02-07 PASS 32 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 32 minutes
- 2026-02-10 PASS 32 minutes
- 2026-02-11 PASS 31 minutes
- 2026-02-12 PASS 31 minutes
- 2026-02-13 PASS 33 minutes
- 2026-02-14 PASS 35 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 34 minutes
- 2026-02-17 PASS 33 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 45 minutes
- 2026-02-20 PASS 35 minutes
- 2026-02-21 PASS 32 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 32 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7161218Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:37:02.7163408Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:55:46.1083285Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:55:46.1084024Z     resource_cluster_test.go:1373: Step 4/7 error: Error running pre-apply plan: exit status 1
2026-02-24T00:55:46.1084480Z         
2026-02-24T00:55:46.1084954Z         Error: error when getting project properties after create
2026-02-24T00:55:46.1085287Z         
2026-02-24T00:55:46.1085697Z           with mongodbatlas_project.test,
2026-02-24T00:55:46.1086346Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-02-24T00:55:46.1087263Z           12: 		resource "mongodbatlas_project" "test" {
2026-02-24T00:55:46.1087562Z         
2026-02-24T00:55:46.1087998Z         error getting project (699cf2b0ae2412ce6211fc04): error getting project's
2026-02-24T00:55:46.1088623Z         settings assigned (699cf2b0ae2412ce6211fc04): (503 Service Unavailable)
2026-02-24T00:55:46.1089175Z         failed to decode response body: undefined response type
2026-02-24T01:00:08.7273783Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1386.01s)
```

- 2026-02-25 PASS 33 minutes
- 2026-02-26 PASS 37 minutes
- 2026-02-27 PASS 34 minutes
- 2026-02-28 PASS 38 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 32 minutes
- 2026-03-03 PASS 35 minutes
- 2026-03-04 PASS 34 minutes
- 2026-03-05 PASS 42 minutes
- 2026-03-06 PASS 43 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 28 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 30 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 35 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 28 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 31 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 35 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 30 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
