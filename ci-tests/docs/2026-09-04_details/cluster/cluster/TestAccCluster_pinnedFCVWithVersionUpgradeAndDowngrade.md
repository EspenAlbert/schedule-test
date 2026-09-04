# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 00:33](#error-2026-08-14t0033070000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/6a7e624533ce881fa885ac4b/clusters/test-acc-tf-c-8424070265033449327 | dev | 1448.01s
[2026-08-28 03:08](#error-2026-08-28t0308380000) | ATLAS_GENERAL_ERROR /api/atlas/v1.0/groups/6a90fbb863fde9550ed1eca2/clusters/test-acc-tf-c-115856759914049523 | dev | 1620.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 30 minutes
- 2026-08-08 PASS 33 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 31 minutes
- 2026-08-11 PASS 32 minutes
- 2026-08-12 PASS 33 minutes
- 2026-08-13 PASS 32 minutes
- 2026-08-14

### Error 2026-08-14T00:33:07+00:00
```
2026-08-14T00:33:07.5918122Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:33:07.5968098Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:55:03.4934467Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:55:03.4935207Z     resource_cluster_test.go:1351: Step 6/7 error: Error running apply: exit status 1
2026-08-14T00:55:03.4935737Z         
2026-08-14T00:55:03.4939124Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8424070265033449327): error updating MongoDB Cluster (test-acc-tf-c-8424070265033449327): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a7e624533ce881fa885ac4b/clusters/test-acc-tf-c-8424070265033449327: 400 (request "ATLAS_GENERAL_ERROR") Reason: Cannot upgrade MongoDB version due to in progress Feature Compatibility Version change. Please ensure all version change operations are complete before upgrading..
2026-08-14T00:55:03.4940845Z         
2026-08-14T00:55:03.4941197Z           with mongodbatlas_cluster.test,
2026-08-14T00:55:03.4941859Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-08-14T00:55:03.4942458Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-08-14T00:55:03.4942782Z         
2026-08-14T00:57:15.6638529Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1448.07s)
```

- 2026-08-15 PASS 31 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 31 minutes
- 2026-08-18 PASS 32 minutes
- 2026-08-19 PASS 33 minutes
- 2026-08-20 PASS 31 minutes
- 2026-08-21 PASS 31 minutes
- 2026-08-22 PASS 30 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 32 minutes
- 2026-08-25 PASS 31 minutes
- 2026-08-26 PASS 32 minutes
- 2026-08-27 PASS 32 minutes
- 2026-08-28

### Error 2026-08-28T03:08:38+00:00
```
2026-08-28T03:08:38.1201697Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-28T03:08:38.1208207Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-28T03:32:46.7618551Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-28T03:32:46.7619210Z     resource_cluster_test.go:1351: Step 6/7 error: Error running apply: exit status 1
2026-08-28T03:32:46.7619655Z         
2026-08-28T03:32:46.7622974Z         Error: error updating MongoDB Cluster (test-acc-tf-c-115856759914049523): error updating MongoDB Cluster (test-acc-tf-c-115856759914049523): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a90fbb863fde9550ed1eca2/clusters/test-acc-tf-c-115856759914049523: 400 (request "ATLAS_GENERAL_ERROR") Reason: Cannot upgrade MongoDB version due to in progress Feature Compatibility Version change. Please ensure all version change operations are complete before upgrading..
2026-08-28T03:32:46.7624874Z         
2026-08-28T03:32:46.7625461Z           with mongodbatlas_cluster.test,
2026-08-28T03:32:46.7626347Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-08-28T03:32:46.7627173Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-08-28T03:32:46.7627647Z         
2026-08-28T03:35:39.0169660Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1620.90s)
```

- 2026-08-29 PASS 31 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 42 minutes
- 2026-09-01 PASS 32 minutes
- 2026-09-02 PASS 35 minutes
- 2026-09-03
  - PASS 39 minutes
  - PASS 32 minutes
- 2026-09-04 PASS 39 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 32 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 32 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 32 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 32 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 31 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 32 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
