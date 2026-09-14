# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:41](#error-2026-09-10t0041070000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa1fcf55b8d9510e8920cad/clusters/test-acc-tf-c-6779555425410180291 | dev | 1360.10s
[2026-09-11 06:41](#error-2026-09-11t0641230000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa3a2ef821e0ea7a45ebb56/clusters/test-acc-tf-c-5418400816829747513 | dev | 1437.01s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 24 minutes
- 2026-09-09 PASS 27 minutes
- 2026-09-10

### Error 2026-09-10T00:41:07+00:00
```
2026-09-10T00:41:07.5055820Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T00:42:25.3018841Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T01:02:33.3965494Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T01:02:33.3966202Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-10T01:02:33.3966627Z         
2026-09-10T01:02:33.3966915Z         Error: Error in update
2026-09-10T01:02:33.3967192Z         
2026-09-10T01:02:33.3967555Z           with mongodbatlas_advanced_cluster.test,
2026-09-10T01:02:33.3968258Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-10T01:02:33.3968925Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-10T01:02:33.3969270Z         
2026-09-10T01:02:33.3969730Z         cluster name: test-acc-tf-c-6779555425410180291, API error details:
2026-09-10T01:02:33.3970658Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fcf55b8d9510e8920cad/clusters/test-acc-tf-c-6779555425410180291
2026-09-10T01:02:33.3971501Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-10T01:02:33.3972356Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T01:02:33.3973055Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-10T01:02:33.3973720Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T01:02:33.3974329Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-10T01:05:05.9387372Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1360.95s)
```

- 2026-09-11
  - PASS 28 minutes
  - FAIL 23 minutes

### Error 2026-09-11T06:41:23+00:00
```
2026-09-11T06:41:23.9714435Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T06:42:51.1344792Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:04:44.4400561Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:04:44.4401655Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-11T07:04:44.4402299Z         
2026-09-11T07:04:44.4402749Z         Error: Error in update
2026-09-11T07:04:44.4403178Z         
2026-09-11T07:04:44.4404416Z           with mongodbatlas_advanced_cluster.test,
2026-09-11T07:04:44.4405706Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-11T07:04:44.4406896Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T07:04:44.4407529Z         
2026-09-11T07:04:44.4408346Z         cluster name: test-acc-tf-c-5418400816829747513, API error details:
2026-09-11T07:04:44.4409975Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa3a2ef821e0ea7a45ebb56/clusters/test-acc-tf-c-5418400816829747513
2026-09-11T07:04:44.4411484Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-11T07:04:44.4412738Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T07:04:44.4414252Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-11T07:04:44.4415484Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T07:04:44.4416608Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-11T07:06:47.1828231Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1437.09s)
```

- 2026-09-12 PASS 26 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 23 minutes
- 2026-09-14: MISSING
