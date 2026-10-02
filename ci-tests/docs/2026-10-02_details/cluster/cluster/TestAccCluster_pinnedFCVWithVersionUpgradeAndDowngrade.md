# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041530000) | INVALID_ATTRIBUTE /api/atlas/v1.0/groups/6aa34e531761787ecbe19447/clusters/test-acc-tf-c-5985462610620394763 | dev | 4765.08s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | INVALID_ATTRIBUTE /api/atlas/v1.0/groups/6aa3a27b821e0ea7a45dbd98/clusters/test-acc-tf-c-5127279622701145022 | dev | 1292.03s
[2026-09-23 00:40](#error-2026-09-23t0040290000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/6ab31ffed27ba93df64234cc/clusters/test-acc-tf-c-1801104403054544222 | dev | 1492.07s
[2026-09-23 08:25](#error-2026-09-23t0825510000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/6ab38d11f8a29abe2358da9f/clusters/test-acc-tf-c-8054192393309768887 | dev | 1559.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 35 minutes
- 2026-09-03
  - PASS 39 minutes
  - PASS 32 minutes
- 2026-09-04 PASS 39 minutes
- 2026-09-05 PASS 33 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 32 minutes
  - PASS 32 minutes
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
- 2026-09-15 PASS 32 minutes
- 2026-09-16 PASS 33 minutes
- 2026-09-17 PASS 32 minutes
- 2026-09-18 PASS 33 minutes
- 2026-09-19 PASS 30 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 31 minutes
- 2026-09-22 PASS 33 minutes
- 2026-09-23
  - FAIL 24 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.0703720Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T00:40:29.0707682Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T01:03:49.4451716Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T01:03:49.4452422Z     resource_cluster_test.go:1351: Step 6/7 error: Error running apply: exit status 1
2026-09-23T01:03:49.4452832Z         
2026-09-23T01:03:49.4455382Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1801104403054544222): error updating MongoDB Cluster (test-acc-tf-c-1801104403054544222): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab31ffed27ba93df64234cc/clusters/test-acc-tf-c-1801104403054544222: 400 (request "ATLAS_GENERAL_ERROR") Reason: Cannot upgrade MongoDB version due to in progress Feature Compatibility Version change. Please ensure all version change operations are complete before upgrading..
2026-09-23T01:03:49.4456775Z         
2026-09-23T01:03:49.4457053Z           with mongodbatlas_cluster.test,
2026-09-23T01:03:49.4457585Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-09-23T01:03:49.4458083Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-09-23T01:03:49.4458368Z         
2026-09-23T01:05:21.7326319Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1492.66s)
```

  - FAIL 25 minutes

### Error 2026-09-23T08:25:51+00:00
```
2026-09-23T08:25:51.2508494Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:25:51.2546230Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:48:58.1505064Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:48:58.1506745Z     resource_cluster_test.go:1351: Step 6/7 error: Error running apply: exit status 1
2026-09-23T08:48:58.1507969Z         
2026-09-23T08:48:58.1513534Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8054192393309768887): error updating MongoDB Cluster (test-acc-tf-c-8054192393309768887): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab38d11f8a29abe2358da9f/clusters/test-acc-tf-c-8054192393309768887: 400 (request "ATLAS_GENERAL_ERROR") Reason: Cannot upgrade MongoDB version due to in progress Feature Compatibility Version change. Please ensure all version change operations are complete before upgrading..
2026-09-23T08:48:58.1517165Z         
2026-09-23T08:48:58.1518129Z           with mongodbatlas_cluster.test,
2026-09-23T08:48:58.1519741Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-09-23T08:48:58.1521121Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-09-23T08:48:58.1522112Z         
2026-09-23T08:51:50.3770804Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1559.13s)
```

- 2026-09-24 PASS 34 minutes
- 2026-09-25 PASS 33 minutes
- 2026-09-26 PASS 31 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 39 minutes
- 2026-09-29 PASS 32 minutes
- 2026-09-30 PASS 32 minutes
- 2026-10-01 PASS 33 minutes
- 2026-10-02 PASS 33 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 32 minutes
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
- 2026-09-20 PASS 33 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 33 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 31 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
