# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041530000) | INVALID_ATTRIBUTE /api/atlas/v1.0/groups/6aa34e531761787ecbe19447/clusters/test-acc-tf-c-5985462610620394763 | dev | 4765.08s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | INVALID_ATTRIBUTE /api/atlas/v1.0/groups/6aa3a27b821e0ea7a45dbd98/clusters/test-acc-tf-c-5127279622701145022 | dev | 1292.03s

### Timeline
- 2026-09-07 PASS 32 minutes
- 2026-09-08 PASS 33 minutes
- 2026-09-09 PASS 33 minutes
- 2026-09-10 PASS 32 minutes
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T00:41:53+00:00
```
2026-09-11T00:41:53.7389900Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T00:41:53.7397538Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T01:59:46.1167020Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T01:59:46.1167676Z     resource_cluster_test.go:1351: Step 6/7 error: Error running apply: exit status 1
2026-09-11T01:59:46.1168136Z         
2026-09-11T01:59:46.1170647Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5985462610620394763): error updating MongoDB Cluster (test-acc-tf-c-5985462610620394763): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa34e531761787ecbe19447/clusters/test-acc-tf-c-5985462610620394763: 400 (request "INVALID_ATTRIBUTE") Invalid attribute Cannot validate cluster compatibility due to stale monitoring data. Please wait a few minutes and try again. specified.
2026-09-11T01:59:46.1172765Z         
2026-09-11T01:59:46.1173088Z           with mongodbatlas_cluster.test,
2026-09-11T01:59:46.1173725Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-09-11T01:59:46.1174320Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-09-11T01:59:46.1174644Z         
2026-09-11T02:01:19.4926054Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4765.76s)
```

  - FAIL 21 minutes

### Error 2026-09-11T06:40:57+00:00
```
2026-09-11T06:40:57.7457970Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T06:40:57.7464572Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:00:57.9931805Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:00:57.9932470Z     resource_cluster_test.go:1351: Step 5/7 error: Error running apply: exit status 1
2026-09-11T07:00:57.9932917Z         
2026-09-11T07:00:57.9936010Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5127279622701145022): error updating MongoDB Cluster (test-acc-tf-c-5127279622701145022): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa3a27b821e0ea7a45dbd98/clusters/test-acc-tf-c-5127279622701145022: 400 (request "INVALID_ATTRIBUTE") Invalid attribute Cannot validate cluster compatibility due to stale monitoring data. Please wait a few minutes and try again. specified.
2026-09-11T07:00:57.9937882Z         
2026-09-11T07:00:57.9938207Z           with mongodbatlas_cluster.test,
2026-09-11T07:00:57.9938844Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-09-11T07:00:57.9939437Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-09-11T07:00:57.9939759Z         
2026-09-11T07:02:30.0631957Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1292.32s)
```

- 2026-09-12 PASS 33 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 33 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 32 minutes
- 2026-09-14: MISSING
