# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2258704811492b56695/limits | qa | flaky_500 | 39.01s
[2025-09-21 00:29](#error-2025-09-21t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474cbd1cb41a3e706ea8/limits | qa | flaky_500 | 36.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 34 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 33 minutes
- 2025-09-07

### Error 2025-09-07T00:29:33+00:00
```
2025-09-07T00:29:33.2715174Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-07T00:30:25.1000742Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-07T00:31:04.1614404Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-07T00:31:04.1615255Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-09-07T00:31:04.1615760Z         
2025-09-07T00:31:04.1616441Z         Error: error when getting project properties after create
2025-09-07T00:31:04.1616896Z         
2025-09-07T00:31:04.1617420Z           with mongodbatlas_project.test,
2025-09-07T00:31:04.1618212Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:04.1618800Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:04.1619109Z         
2025-09-07T00:31:04.1619558Z         error getting project (68bcd2258704811492b56695): error getting project's
2025-09-07T00:31:04.1620195Z         limits (68bcd2258704811492b56695):
2025-09-07T00:31:04.1620763Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2258704811492b56695/limits
2025-09-07T00:31:04.1621419Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:04.1621992Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:04.1622384Z         BadRequestDetail: 
2025-09-07T00:31:04.2065360Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (39.11s)
```

- 2025-09-08
  - PASS 32 minutes
  - PASS 31 minutes
  - PASS 29 minutes
- 2025-09-09 PASS 34 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 21 minutes
- 2025-09-20 PASS 22 minutes
- 2025-09-21

### Error 2025-09-21T00:29:40+00:00
```
2025-09-21T00:29:40.3788767Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:31:04.4014329Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:31:41.1173505Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:31:41.1174229Z     resource_test.go:905: Step 1/8 error: Error running apply: exit status 1
2025-09-21T00:31:41.1174594Z         
2025-09-21T00:31:41.1175490Z         Error: error when getting project properties after create
2025-09-21T00:31:41.1175833Z         
2025-09-21T00:31:41.1176214Z           with mongodbatlas_project.test,
2025-09-21T00:31:41.1177113Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:31:41.1177785Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:31:41.1178134Z         
2025-09-21T00:31:41.1178588Z         error getting project (68cf474cbd1cb41a3e706ea8): error getting project's
2025-09-21T00:31:41.1179041Z         limits (68cf474cbd1cb41a3e706ea8):
2025-09-21T00:31:41.1179603Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474cbd1cb41a3e706ea8/limits
2025-09-21T00:31:41.1180429Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:41.1180989Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:41.1181372Z         BadRequestDetail: 
2025-09-21T00:31:41.1635651Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (36.77s)
```

- 2025-09-22 PASS 21 minutes
- 2025-09-23 PASS 22 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 24 minutes
- 2025-09-27 PASS 25 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 24 minutes
  - PASS 18 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 20 minutes
  - PASS 17 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 29 minutes