# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 868.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 27 minutes
- 2026-02-06 PASS 26 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 25 minutes
- 2026-02-13 PASS 30 minutes
- 2026-02-14 PASS 27 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 26 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8710448Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:40:00.5697389Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:51:45.5226403Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:51:45.5227650Z     resource_test.go:854: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:51:45.5228282Z         
2026-02-24T00:51:45.5228822Z         Error: error when getting project properties after create
2026-02-24T00:51:45.5229166Z         
2026-02-24T00:51:45.5229555Z           with mongodbatlas_project.test,
2026-02-24T00:51:45.5230196Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-02-24T00:51:45.5230890Z           12: 		resource "mongodbatlas_project" "test" {
2026-02-24T00:51:45.5231303Z         
2026-02-24T00:51:45.5231835Z         error getting project (699cf365ae2412ce6213c719): error getting project's IP
2026-02-24T00:51:45.5233018Z         addresses (699cf365ae2412ce6213c719): (503 Service Unavailable) failed to
2026-02-24T00:51:45.5233607Z         decode response body: undefined response type
2026-02-24T00:54:29.2479705Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (868.68s)
```

- 2026-02-25 PASS 28 minutes
- 2026-02-26 PASS 31 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 29 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 23 minutes
  - PASS 30 minutes
- 2026-03-03 PASS 30 minutes
- 2026-03-04 PASS 24 minutes
- 2026-03-05 PASS 36 minutes
- 2026-03-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 25 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 26 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 29 minutes
- 2026-03-02 PASS 19 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
